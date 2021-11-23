/* eslint-disable react/jsx-max-depth */
/* eslint-disable max-lines */
import { CircularProgress, CssBaseline } from '@material-ui/core';
import TimerIcon from '@mui/icons-material/Timer';
import { Box } from '@material-ui/system';
import { Container, Typography, Avatar,
  Paper, ButtonGroup, Button } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/styles';

const ONE_SECOND = 1000;
const ONE_PERCENT = 3.33;

const styles = () => ({
  disabledGreen: {
    '&:disabled': {
      color: 'black',
      borderColor: 'black',
      border: '3px solid black',
    },
    background: 'linear-gradient(45deg, #1df401 30%, #1df401 90%)',
    color: '#1df401',
  },
  disabledRed: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  },
});

export class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      timer: 30,
      questionNumber: 0,
      PlayerScore: 0,
      PlayerAssertions: 0,
    };

    this.handleClick = this.handleClick.bind(this);
    this.setTimer = this.setTimer.bind(this);
  }

  componentDidMount() {
    this.setTimer();
    this.updateLocalStorage();
  }

  componentWillUnmount() {
    const playerInfo = JSON.parse(localStorage.getItem('state'));

    const player = {
      name: playerInfo.player.name,
      score: playerInfo.player.score,
      picture: playerInfo.player.picture,
    };

    const getRanking = JSON.parse(localStorage.getItem('ranking'));
    if (getRanking) {
      localStorage.setItem('ranking', JSON.stringify([...getRanking, player]));
    } else localStorage.setItem('ranking', JSON.stringify([player]));
  }

  handleClick({ target }) {
    const { timer, questionNumber } = this.state;
    const { questions } = this.props;
    const { difficulty } = questions[questionNumber];
    const baseScore = 10;

    const obj = {
      easy: 1,
      medium: 2,
      hard: 3,
    };

    if (target.name === 'correct-answer') {
      this.setState((prevstate) => ({
        PlayerScore:
          prevstate.PlayerScore + baseScore + timer * obj[difficulty],
        PlayerAssertions: prevstate.PlayerAssertions + 1,
      }));
    }

    this.setState(
      {
        clicked: true,
      },
      () => {
        this.updateLocalStorage();
      },
    );
  }

  setTimer() {
    this.setState({ timer: 30 });
    const countdown = setInterval(() => {
      this.setState(
        (prevState) => ({
          timer: prevState.timer - 1,
        }),
        () => {
          const { timer, clicked } = this.state;
          if (timer <= 0 || clicked) {
            clearInterval(countdown);
            this.setState({ clicked: true });
          }
        },
      );
    }, ONE_SECOND);
  }

  updateLocalStorage() {
    const { PlayerAssertions, PlayerScore } = this.state;
    const { player } = this.props;

    const localStorageObj = {
      player: {
        name: player.name,
        assertions: PlayerAssertions,
        score: PlayerScore,
        gravatarEmail: player.email,
        picture: player.avatar,
      },
    };

    localStorage.setItem('state', JSON.stringify(localStorageObj));
  }

  randomAnswers(questions) {
    const { questionNumber, clicked } = this.state;
    const { classes } = this.props;
    const allQuestions = [
      questions[questionNumber].correct_answer,
      ...questions[questionNumber].incorrect_answers,
    ].sort();
    return (
      <ButtonGroup
        orientation="vertical"
        variant="outlined"
        aria-label="outlined button group"
        sx={ { textAlign: 'center',
          pb: 5,
          maxWidth: '100%',
        } }
        color="primary"
      >
        {allQuestions.map((question, index) => {
          if (question === questions[questionNumber].correct_answer) {
            return (
              <Button
                type="button"
                onClick={ this.handleClick }
                data-testid="correct-answer"
                disabled={ clicked }
                id="correct"
                className={ clicked && classes.disabledGreen }
                name="correct-answer"
                key={ index }
              >
                {decodeURIComponent(question)}
              </Button>
            );
          }
          return (
            <Button
              type="button"
              disabled={ clicked }
              id={ index }
              className={ clicked && classes.disabledRed }
              name="wrong-answer"
              key={ index }
              data-testid={ `wrong-answer-${index}` }
              onClick={ this.handleClick }
            >
              {decodeURIComponent(question)}
            </Button>
          );
        })}
      </ButtonGroup>
    );
  }

  nextButton(questionNumber) {
    const { history, questions } = this.props;
    if (questionNumber < questions.length - 1) {
      this.setState(
        (prevState) => ({
          questionNumber: prevState.questionNumber + 1,
          clicked: false,
        }),
        () => {
          this.setTimer();
        },
      );
    } else {
      history.push('/trivia-game/feedback');
    }
  }

  circularProgressWithLabel(timer) {
    return (
      <Box
        sx={ {
          position: 'relative', display: 'inline-flex',
        } }
      >
        <Box
          sx={ {
            top: 0,
            left: 0,
            bottom: 25,
            right: 0,
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          } }
        >
          <TimerIcon fontSize="20" />
        </Box>
        <CircularProgress
          variant="determinate"
          value={ timer * ONE_PERCENT }
          sx={ { color: '#006600' } }
          size={ 60 }
          thickness={ 3 }
        />
        <Box
          sx={ {
            top: 13,
            left: 0,
            bottom: 0,
            right: 0,
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          } }
        >
          <Typography
            sx={ { fontWeight: 600 } }
            variant="h6"
            component="div"
            color="text.secondary"
          >
            {timer}
          </Typography>
        </Box>
      </Box>
    );
  }

  render() {
    const { player, questions } = this.props;
    const { timer, questionNumber, PlayerScore, clicked } = this.state;

    return (
      <Container component="main" maxWidth="md" sx={ { pb: 5 } }>
        <CssBaseline />
        <Box
          sx={ {
            marginTop: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          } }
        >
          <Avatar
            sx={ { height: 50, width: 60 } }
            src={ player.avatar }
            alt="Player Image Avatar"
          />
          <Typography variant="h6">
            {player.name}
          </Typography>
          <Typography
            variant="h6"
            sx={ { fontWeight: 'regular' } }
          >
            {PlayerScore}
            {' '}
            Points
          </Typography>
          <header>
            {this.circularProgressWithLabel(timer)}
          </header>
          <Paper
            variant="outlined"
            sx={ {
              maxWidth: { xs: '80%' },
              my: { xs: 1, md: 2 },
              p: 2,
              pb: 5,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center' } }
          >
            <Paper elevation="3" sx={ { textAlign: 'center', p: 1 } }>
              <Typography sx={ { fontSize: { xs: 18, md: 20 }, fontWeight: 'bold' } }>
                {decodeURIComponent(questions[questionNumber].category)}
              </Typography>
            </Paper>
            <Typography
              variant="h6"
              component="div"
              sx={ { pt: 2, pb: 4, fontWeight: 'regular', textAlign: 'center' } }
              gutterBottom
            >
              {decodeURIComponent(questions[questionNumber].question)}
            </Typography>
            {this.randomAnswers(questions)}
            {clicked && (
              <Button
                sx={ { justifyContent: 'center',
                  alignSelf: 'center',
                  textAlign: 'center' } }
                variant="contained"
                data-testid="btn-next"
                onClick={ () => this.nextButton(questionNumber) }
              >
                Next
              </Button>
            )}
          </Paper>
        </Box>
      </Container>
    );
  }
}

Game.propTypes = {
  classes: PropTypes.shape({
    disabledGreen: PropTypes.string,
    disabledRed: PropTypes.string,
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  player: PropTypes.shape({
    avatar: PropTypes.string,
    email: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
  questions: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  questions: state.user.questions,
  player: state.user.player,
});

export default connect(mapStateToProps)(withStyles(styles)(Game));

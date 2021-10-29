/* eslint-disable react/jsx-max-depth */
/* eslint-disable max-lines */
import { CircularProgress, CssBaseline } from '@material-ui/core';
import { Box } from '@material-ui/system';
import { AppBar, Container, Toolbar, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

const ONE_SECOND = 1000;
const ONE_PERCENT = 3.33;
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
    const allQuestions = [
      questions[questionNumber].correct_answer,
      ...questions[questionNumber].incorrect_answers,
    ].sort();
    return (
      <ul>
        {allQuestions.map((question, index) => {
          if (question === questions[questionNumber].correct_answer) {
            return (
              <button
                type="button"
                onClick={ this.handleClick }
                data-testid="correct-answer"
                disabled={ clicked }
                id="correct"
                className={ clicked ? 'green-border' : '' }
                name="correct-answer"
                key={ index }
              >
                {decodeURIComponent(question)}
              </button>
            );
          }
          return (
            <button
              type="button"
              disabled={ clicked }
              id={ index }
              className={ clicked ? 'red-border' : '' }
              name="wrong-answer"
              key={ index }
              data-testid={ `wrong-answer-${index}` }
              onClick={ this.handleClick }
            >
              {decodeURIComponent(question)}
            </button>
          );
        })}
      </ul>
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
          position: 'absolute',
          zIndex: 1,
          top: 8,
          left: 140,
          margin: '0 auto',
        } }
      >
        <CircularProgress
          variant="determinate"
          value={ timer * ONE_PERCENT }
          sx={ { color: '#006600' } }
          size={ 40 }
          thickness={ 3 }
        />
        <Box
          sx={ {
            top: 0,
            left: 0,
            bottom: 5,
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
      <Container component="main" maxWidth="md">
        <CssBaseline />
        <Box
          sx={ {
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          } }
        >
          <AppBar position="fixed" color="secondary" sx={ { bottom: 'auto', top: 0 } }>
            <Toolbar>
              {this.circularProgressWithLabel(timer)}
            </Toolbar>
          </AppBar>
          <header>
            <img
              alt="avatar"
              data-testid="header-profile-picture"
              src={ player.avatar }
            />
            <h4 data-testid="header-player-name">
              Nome:
              {player.name}
              {' '}
              <span data-testid="header-score">
                Score:
                {PlayerScore}
              </span>
            </h4>
          </header>
          <div>
            <p data-testid="question-category">
              Category:
              {decodeURIComponent(questions[questionNumber].category)}
            </p>
            <h3 data-testid="question-text">
              {decodeURIComponent(questions[questionNumber].question)}
            </h3>
            {this.randomAnswers(questions)}
          </div>
          {clicked && (
            <input
              type="button"
              data-testid="btn-next"
              onClick={ () => this.nextButton(questionNumber) }
              value="Próxima"
            />
          )}
        </Box>
      </Container>
    );
  }
}

Game.propTypes = {
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

export default connect(mapStateToProps)(Game);

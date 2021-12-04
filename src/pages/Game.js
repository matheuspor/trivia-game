import { Container, Typography, Avatar, CssBaseline, Box } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/styles';
import TimeCounter from '../components/TimeCounter';
import { updateLocalStorage, updateRanking } from '../services/apiHelper';
import { QuestionBody } from '../components/QuestionBody';

const ONE_SECOND = 1000;

const styles = () => ({
  disabledGreen: {
    '&:disabled': {
      borderColor: 'black !important',
      border: '3px solid black !important',
      background: 'linear-gradient(45deg, #1df401 30%, #1df401 90%)',
      color: '#212121 !important',
    },
  },
  disabledRed: {
    '&:disabled': {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    },
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
    this.nextButton = this.nextButton.bind(this);
  }

  componentDidMount() {
    const { player } = this.props;
    this.setTimer();
    updateLocalStorage(this.state, player);
  }

  componentWillUnmount() {
    updateRanking();
  }

  handleClick({ target }) {
    const { timer, questionNumber } = this.state;
    const { questions, player } = this.props;
    const { difficulty } = questions[questionNumber];
    const baseScore = 10;

    const obj = {
      easy: 1,
      medium: 2,
      hard: 3,
    };
    this.setState({ clicked: true });

    if (target.name === 'correct-answer') {
      this.setState((prevstate) => ({
        PlayerScore:
          prevstate.PlayerScore + baseScore + timer * obj[difficulty],
        PlayerAssertions: prevstate.PlayerAssertions + 1,
      }), () => {
        updateLocalStorage(this.state, player);
      });
    }
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

  render() {
    const { player, questions, classes } = this.props;
    const { timer, questionNumber, PlayerScore } = this.state;

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
            {`${PlayerScore} Points`}
          </Typography>
          <TimeCounter timer={ timer } />
          <QuestionBody
            state={ this.state }
            questions={ questions }
            classes={ classes }
            handler={ this.handleClick }
            nextButton={ this.nextButton }
          />
        </Box>
        <hr
          style={ {
            color: '#000000',
            backgroundColor: '#000000',
            width: '80%',
            borderColor: '#000000',
          } }
        />
        <Typography
          variant="h6"
          component="div"
          sx={ { pt: 2, pb: 4, fontWeight: 'regular', textAlign: 'center' } }
          gutterBottom
        >
          {`${questionNumber + 1}/5`}
        </Typography>
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

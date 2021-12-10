import PropTypes from 'prop-types';
import React
  from 'react';
import md5 from 'crypto-js/md5';
import { connect } from 'react-redux';
import { CssBaseline, Box, Stack, Button,
  TextField, Link, Container } from '@mui/material';
import { withStyles } from '@mui/styles';
import { setPlayerInfo, setPlayerQuestions } from '../actions';
import '../App.css';
import logo from '../trivia.png';
import { fetchCategories, fetchPlayerImg, fetchPlayerToken,
  fetchQuestions } from '../services/apiHelper';
import theme from '../theme';
import Footer from '../components/Footer';
import BackdropComp from '../components/Backdrop';
import Settings from './Settings';

const styles = () => ({
  logo: {
    height: '6em',
    [theme.breakpoints.up('sm')]: {
      height: '9em',
    },
    mb: '1em',
    animation: 'shake infinite 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both',
  },
});

export class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    const { player: { name, email } } = this.props;
    this.state = {
      user: {
        name,
        email,
      },
      openBackdrop: true,
      openSettings: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    fetchPlayerToken()
      .then(() => {
        fetchCategories();
        this.setState({ openBackdrop: false });
      });
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState((prevValue) => ({
      user: {
        ...prevValue.user,
        [name]: value,
      },
    }));
  }

  handleSubmit(event) {
    const { sendQuestions, sendPlayer, settings, history } = this.props;
    const { user } = this.state;
    event.preventDefault();
    this.setState({ openBackdrop: true });
    const emailHash = md5(user.email).toString();

    fetchPlayerImg(emailHash)
      .then(({ url }) => {
        this.setState((prevState) => ({
          user: {
            ...prevState.user,
            avatar: url,
          },
        }), () => {
          const currentState = this.state;
          sendPlayer(currentState.user);
        });
      });

    fetchQuestions(localStorage.getItem('token'), settings)
      .then((questions) => {
        sendQuestions(questions);
        history.push('/trivia-game/game');
      });
  }

  render() {
    const { classes } = this.props;
    const { user, openBackdrop, openSettings } = this.state;
    return (
      <Container maxWidth="xs">
        <>
          {openBackdrop || (
            <Box
              component="form"
              onSubmit={ this.handleSubmit }
            >
              <BackdropComp open={ openBackdrop } />
              <Settings
                openSettings={ openSettings }
                handler={ (value) => this.setState({ openSettings: value }) }
              />
              <CssBaseline />
              <Stack spacing={ 3 } sx={ { my: 4 } }>
                <img src={ logo } className={ classes.logo } alt="logo" />
                <TextField
                  name="name"
                  type="text"
                  label="Name:"
                  value={ user.name }
                  autoComplete="name"
                  onChange={ this.handleChange }
                  required
                />
                <TextField
                  name="email"
                  type="email"
                  label="Gravatar email:"
                  value={ user.email }
                  autoComplete="email"
                  onChange={ this.handleChange }
                  helperText={
                    <Link href="https://en.gravatar.com/" target="_blank" underline="always">
                      Gravatar
                    </Link>
                  }
                />
                <Button
                  type="submit"
                  fullWidth
                  disabled={ !user.name }
                  variant="contained"
                  color="primary"
                >
                  Play
                </Button>
                <Button
                  type="button"
                  fullWidth
                  variant="contained"
                  color="secondary"
                  onClick={ () => this.setState({ openSettings: true }) }
                >
                  Settings
                </Button>
              </Stack>
            </Box>
          )}
          <Footer />
        </>
      </Container>
    );
  }
}

const mapStateToProps = ({ user: { player, settings } }) => ({
  player,
  settings,
});

const mapDispatchToProps = (dispatch) => ({
  sendQuestions: (payload) => dispatch(setPlayerQuestions(payload)),
  sendPlayer: (payload) => dispatch(setPlayerInfo(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(
  withStyles(styles)(LoginPage),
);

LoginPage.propTypes = {
  classes: PropTypes.shape({
    logo: PropTypes.string,
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  player: PropTypes.shape({
    email: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
  sendPlayer: PropTypes.func.isRequired,
  sendQuestions: PropTypes.func.isRequired,
  settings: PropTypes.shape({
    category: PropTypes.number,
    difficulty: PropTypes.string,
    type: PropTypes.string,
  }).isRequired,
};

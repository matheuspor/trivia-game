/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import React, { useContext, useEffect, useState } from 'react';
import md5 from 'crypto-js/md5';
import { connect } from 'react-redux';
import { CircularProgress, Container, CssBaseline } from '@material-ui/core';
import { Box } from '@material-ui/system';
import { makeStyles } from '@material-ui/styles';
import { Backdrop, Link, Typography } from '@mui/material';
import { useHistory } from 'react-router';
import { setPlayerInfo, setPlayerQuestions } from '../actions';
import '../App.css';
import logo from '../trivia.png';
import { fetchCategories, fetchPlayerImg, fetchPlayerToken,
  fetchQuestions } from '../services/apiHelper';
import SettingsContext from '../context/SettingsContext';
import PageButton from '../components/PageButton';
import PageInput from '../components/PageInput';
import theme from '../theme';

const useStyles = makeStyles(() => ({
  logo: {
    height: '6em',
    [theme.breakpoints.up('sm')]: {
      height: '9em',
    },
    marginBottom: '1em',
    animation: 'shake infinite 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both',
  },
}));
function Login({ sendQuestions, sendPlayer, player }) {
  const { settings } = useContext(SettingsContext);
  const [open, setOpen] = useState(false);

  const history = useHistory();

  const categories = JSON.parse(localStorage.getItem('categories'));

  const classes = useStyles();

  const [user, setUser] = useState({
    name: player.name,
    email: player.email,
  });

  useEffect(() => {
    fetchPlayerToken()
      .then((token) => {
        localStorage.setItem('token', token);
      });
  }, []);

  function handleChange({ target }) {
    const { name, value } = target;
    setUser({ ...user, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    setOpen(true);
    const emailHash = md5(user.email).toString();
    fetchPlayerImg(emailHash).then(({ url }) => {
      setUser({ ...user, avatar: url });
      sendPlayer({ ...user, avatar: url });
    });
    fetchQuestions(localStorage.getItem('token'), settings)
      .then((questions) => {
        sendQuestions(questions);
        history.push('/trivia-game/game');
      });
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={ {
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        } }
      >
        <img src={ logo } className={ classes.logo } alt="logo" />
        <Box
          component="form"
          onSubmit={ handleSubmit }
          sx={ { mt: 1 } }
        >
          <PageInput name="name" value={ user.name } handler={ handleChange } />
          <PageInput name="email" value={ user.email } handler={ handleChange } />
          <PageButton
            name="Play"
            user={ user }
          />
          <PageButton
            name="Settings"
            user={ user }
            handler={ () => {
              setOpen(true);
              if (!categories) {
                fetchCategories()
                  .then(() => {
                    history.push('/trivia-game/settings');
                  });
              } else {
                history.push('/trivia-game/settings');
              }
            } }
          />
        </Box>
      </Box>
      <Backdrop
        sx={ { color: '#fff' } }
        open={ open }
        onClick={ () => setOpen(false) }
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <hr />
      <Typography
        sx={ { mt: 2, pb: 2 } }
        variant="body2"
        color="text.secondary"
        align="center"
      >
        {'© '}
        <Link color="text.primary" target="_blank" href="https://github.com/matheuspor">
          matheuspor
        </Link>
        {' 2021'}
      </Typography>
    </Container>
  );
}

const mapStateToProps = ({ user: { player } }) => ({
  player,
});

const mapDispatchToProps = (dispatch) => ({
  sendQuestions: (payload) => dispatch(setPlayerQuestions(payload)),
  sendPlayer: (payload) => dispatch(setPlayerInfo(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  player: PropTypes.shape({
    email: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
  sendPlayer: PropTypes.func.isRequired,
  sendQuestions: PropTypes.func.isRequired,
};

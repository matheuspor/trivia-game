import PropTypes from 'prop-types';
import React, { useContext, useEffect, useState } from 'react';
import md5 from 'crypto-js/md5';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import { ToastContainer } from 'react-toastify';
import { setPlayerInfo, setPlayerQuestions } from '../actions';
import '../App.css';
import logo from '../trivia.png';
import { fetchPlayerImg, fetchPlayerToken,
  fetchQuestions } from '../services/apiHelper';
import SettingsContext from '../context/SettingsContext';
import makeInput from '../components/input';
import makeButton from '../components/button';
import 'react-toastify/dist/ReactToastify.css';

function Login({ sendToken, sendPlayer, player }) {
  const { settings } = useContext(SettingsContext);
  const history = useHistory();

  const [user, setUser] = useState({
    nome: player.nome,
    email: player.email,
  });

  useEffect(() => {
    if (user.avatar) {
      sendPlayer(user);
      history.push('/trivia-game/game');
    }
  });

  async function redirectSettings() {
    history.push('/trivia-game/settings');
  }

  function handleChange({ target }) {
    const { name, value } = target;
    setUser({ ...user, [name]: value });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const token = await fetchPlayerToken();
    const questions = await fetchQuestions(token, settings);
    localStorage.setItem('token', token);
    sendToken(questions);
    const emailHash = md5(user.email).toString();
    const playerAvatar = await fetchPlayerImg(emailHash);
    setUser({ ...user, avatar: playerAvatar.url });
  }

  return (
    <form className="App-header" onSubmit={ handleSubmit }>
      <img src={ logo } className="App-logo" alt="logo" />
      <p>SUA VEZ</p>
      {makeInput('nome', handleChange, user.nome)}
      {makeInput('email', handleChange, user.email)}
      {makeButton('Jogar', user)}
      <ToastContainer />
      {makeButton('Configurações', user, redirectSettings)}
    </form>
  );
}

const mapStateToProps = ({ user: { player } }) => ({
  player,
});

const mapDispatchToProps = (dispatch) => ({
  sendToken: (payload) => dispatch(setPlayerQuestions(payload)),
  sendPlayer: (payload) => dispatch(setPlayerInfo(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  player: PropTypes.shape({
    email: PropTypes.string,
    nome: PropTypes.string,
  }).isRequired,
  sendPlayer: PropTypes.func.isRequired,
  sendToken: PropTypes.func.isRequired,
};

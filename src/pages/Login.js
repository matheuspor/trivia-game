import PropTypes from 'prop-types';
import React, { useContext, useEffect, useState } from 'react';
import md5 from 'crypto-js/md5';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import { setPlayerInfo, setPlayerQuestions } from '../actions';
import '../App.css';
import logo from '../trivia.png';
import { fetchPlayerImg, fetchPlayerToken,
  fetchQuestions } from '../services/apiHelper';
import SettingsContext from '../context/SettingsContext';
import Button from '../components/Button';
import Input from '../components/Input';

function Login({ sendQuestions, sendPlayer, player }) {
  const { settings } = useContext(SettingsContext);
  const history = useHistory();

  const [user, setUser] = useState({
    nome: player.nome,
    email: player.email,
  });

  useEffect(() => {
    fetchPlayerToken()
      .then((token) => {
        localStorage.setItem('token', token);
        fetchQuestions(token, settings)
          .then((questions) => sendQuestions(questions));
      });
  }, [settings, sendQuestions]);

  function handleChange({ target }) {
    const { name, value } = target;
    setUser({ ...user, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const emailHash = md5(user.email).toString();
    fetchPlayerImg(emailHash).then(({ url }) => {
      setUser({ ...user, avatar: url });
      sendPlayer({ ...user, avatar: url });
      history.push('/trivia-game/game');
    });
  }

  return (
    <form
      className="App-header"
      onSubmit={ handleSubmit }
    >
      <img src={ logo } className="App-logo" alt="logo" />
      <p>SUA VEZ</p>
      <Input name="nome" value={ user.nome } handler={ handleChange } />
      <Input name="email" value={ user.email } handler={ handleChange } />
      <Button name="Jogar" user={ user } />
      <Button
        name="Configurações"
        user={ user }
        handler={ () => history.push('/trivia-game/settings') }
      />
    </form>
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
    nome: PropTypes.string,
  }).isRequired,
  sendPlayer: PropTypes.func.isRequired,
  sendQuestions: PropTypes.func.isRequired,
};

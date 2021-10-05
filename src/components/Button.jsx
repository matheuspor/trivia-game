import PropTypes from 'prop-types';
import React from 'react';

export default function Button({ name, user, handler }) {
  const re = /.+@.+\.[A-Za-z]+$/;

  return (
    <button
      type={ name === 'Jogar' ? 'submit' : 'button' }
      data-testid={ name === 'Jogar' ? 'btn-play' : 'btn-settings' }
      disabled={ name === 'Jogar' ? !re.test(user.email) || !user.nome : false }
      onClick={ handler }
    >
      {name}
    </button>
  );
}

Button.propTypes = {
  handler: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  user: PropTypes.shape({
    email: PropTypes.string,
    nome: PropTypes.string,
  }).isRequired,
};

import React from 'react';

export default function makeButton(name, user, handler) {
  return (
    <button
      type={ name === 'Jogar' ? 'submit' : 'button' }
      data-testid={ name === 'Jogar' ? 'btn-play' : 'btn-settings' }
      disabled={ name === 'Jogar' ? !user.email || !user.nome : false }
      onClick={ name === 'Jogar' ? null : () => handler() }
    >
      {name}
    </button>
  );
}

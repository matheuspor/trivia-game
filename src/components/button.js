import React from 'react';
import { toast } from 'react-toastify';

export default function makeButton(name, user, handler) {
  const re = /.+@.+\.[A-Za-z]+$/;
  const notify = () => {
    toast.loading('Buscando Perguntas!', {
      position: 'bottom-left',
    });
  };

  return (
    <button
      type={ name === 'Jogar' ? 'submit' : 'button' }
      data-testid={ name === 'Jogar' ? 'btn-play' : 'btn-settings' }
      disabled={ name === 'Jogar' ? !re.test(user.email) || !user.nome : false }
      onClick={ name === 'Jogar' ? notify : () => handler() }
    >
      {name}
    </button>
  );
}

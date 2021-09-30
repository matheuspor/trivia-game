import React from 'react';
import { toast } from 'react-toastify';

export default function makeButton(name, user, handler) {
  const notify = () => {
    toast.loading('Buscando Perguntas!', {
      position: "bottom-center",
      });
  }
    
  return (
    <button
      type={ name === 'Jogar' ? 'submit' : 'button' }
      data-testid={ name === 'Jogar' ? 'btn-play' : 'btn-settings' }
      disabled={ name === 'Jogar' ? !user.email || !user.nome : false }
      onClick={ name === 'Jogar' ? notify : () => handler() }
    >
      {name}
    </button>
  );
}

import React from 'react';

export default function makeInput(name, handler) {
  return (
    <label htmlFor={ name }>
      {`${name[0].toUpperCase()}${name.substr(1)}:`}
      <input
        type={ name === 'email' ? 'email' : 'text' }
        name={ name }
        id={ name }
        data-testid={ name === 'email' ? 'input-gravatar-email' : 'input-player-name' }
        onChange={ handler }
      />
    </label>
  );
}

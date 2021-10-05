import PropTypes from 'prop-types';
import React from 'react';

export default function Input({ name, handler, value }) {
  return (
    <label htmlFor={ name }>
      {`${name[0].toUpperCase()}${name.substr(1)}:`}
      <input
        type={ name === 'email' ? 'email' : 'text' }
        name={ name }
        id={ name }
        data-testid={ name === 'email' ? 'input-gravatar-email' : 'input-player-name' }
        onChange={ handler }
        value={ value }
      />
    </label>
  );
}

Input.propTypes = {
  handler: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

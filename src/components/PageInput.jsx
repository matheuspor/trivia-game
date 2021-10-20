import { TextField } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';

export default function PageInput({ name, handler, value }) {
  return (
    <TextField
      type={ name === 'email' ? 'email' : 'text' }
      margin="normal"
      required
      fullWidth
      id={ `${name[0].toUpperCase()}${name.substr(1)}` }
      label={ `${name[0].toUpperCase()}${name.substr(1)}` }
      name={ name }
      autoComplete={ name }
      onChange={ handler }
      value={ value }
    />
  );
}

PageInput.propTypes = {
  handler: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

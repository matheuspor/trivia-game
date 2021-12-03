import { Link, TextField } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';

export default function PageInput({ name, handler, value }) {
  return (
    <TextField
      type={ name === 'email' ? 'email' : 'text' }
      margin="normal"
      required={ name === 'name' }
      fullWidth
      id={ `${name[0].toUpperCase()}${name.substr(1)}` }
      label={ name === 'email' ? 'Gravatar email:' : 'Name:' }
      name={ name }
      autoComplete={ name }
      onChange={ handler }
      value={ value }
      helperText={ name === 'email' && (
        <Link href="https://en.gravatar.com/" target="_blank" underline="always">
          Gravatar
        </Link>
      ) }
    />
  );
}

PageInput.propTypes = {
  handler: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

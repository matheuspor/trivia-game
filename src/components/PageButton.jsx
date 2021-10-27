import PropTypes from 'prop-types';
import React from 'react';
import { Button } from '@material-ui/core';

export default function PageButton({ name, user, handler }) {
  return (
    (
      <Button
        type={ name === 'Play' ? 'submit' : 'button' }
        fullWidth
        disabled={ name === 'Play' && !user.name }
        onClick={ () => (name !== 'Play' && handler()) }
        variant="contained"
        sx={ { mt: 3, mb: 2 } }
        color={ name === 'Play' ? 'primary' : 'secondary' }
      >
        {name}
      </Button>)
  );
}

PageButton.propTypes = {
  handler: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  user: PropTypes.shape({
    email: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
};

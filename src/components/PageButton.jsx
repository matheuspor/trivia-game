import PropTypes from 'prop-types';
import React from 'react';
import { Button } from '@mui/material';

export default function PageButton({ name, user, handler }) {
  return (
    (
      <Button
        type={ name === 'Play' ? 'submit' : 'button' }
        fullWidth
        disabled={ name === 'Play' && !user.name }
        onClick={ handler }
        variant="contained"
        sx={ { my: 2 } }
        color={ name === 'Play' ? 'primary' : 'secondary' }
      >
        {name}
      </Button>)
  );
}

PageButton.propTypes = {
  handler: PropTypes.func,
  name: PropTypes.string.isRequired,
  user: PropTypes.shape({
    email: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
};

PageButton.defaultProps = {
  handler: undefined,
};

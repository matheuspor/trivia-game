import PropTypes from 'prop-types';
import React from 'react';
import { Button } from '@material-ui/core';

export default function PageButton({ name, user, handler }) {
  const re = /.+@.+\.[A-Za-z]+$/;

  return (
    <Button
      type={ name === 'Jogar' ? 'submit' : 'button' }
      fullWidth
      disabled={ name === 'Jogar' ? !re.test(user.email) || !user.name : false }
      onClick={ handler }
      variant="contained"
      sx={ { mt: 3, mb: 2 } }
      color={ name === 'Jogar' ? 'primary' : 'secondary' }
    >
      {name}
    </Button>
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

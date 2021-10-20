import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Button, CircularProgress } from '@material-ui/core';

export default function PageButton({ name, user, handler }) {
  const re = /.+@.+\.[A-Za-z]+$/;
  const [clicked, setClick] = useState(false);

  return (
    (
      <Button
        type={ name === 'Play' ? 'submit' : 'button' }
        fullWidth
        disabled={ name === 'Play' ? !re.test(user.email) || !user.name : false }
        onClick={ () => (name === 'Play' ? setClick(true) : handler()) }
        variant="contained"
        sx={ { mt: 3, mb: 2 } }
        color={ name === 'Play' ? 'primary' : 'secondary' }
      >
        {clicked ? <CircularProgress color="secondary" /> : name}
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

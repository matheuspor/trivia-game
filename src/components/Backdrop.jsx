import PropTypes from 'prop-types';
import { CircularProgress } from '@material-ui/core';
import { Backdrop } from '@mui/material';
import React from 'react';

export default function BackdropComp({ open }) {
  return (
    <Backdrop
      sx={ { color: '#fff' } }
      open={ open }
    >
      <CircularProgress color="inherit" />
    </Backdrop>);
}

BackdropComp.propTypes = {
  open: PropTypes.bool.isRequired,
};

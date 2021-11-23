/* eslint-disable react/jsx-max-depth */
import PropTypes from 'prop-types';
import { CssBaseline } from '@material-ui/core';
import { Box } from '@material-ui/system';
import { Avatar, Button, Container, Grid, Paper, Typography } from '@mui/material';
import React, { Component } from 'react';

export default class Feedback extends Component {
  render() {
    const userData = JSON.parse(localStorage.getItem('state'));
    const NUMBER = 3;
    const { player } = userData;
    const { history } = this.props;
    return (
      <Container component="main" maxWidth="md" sx={ { pb: 5 } }>
        <CssBaseline />
        <Box
          sx={ {
            marginTop: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          } }
        >
          <Paper sx={ { maxWidth: 400, my: 1, mx: 'auto', p: 2 } }>
            <Grid container wrap="nowrap" spacing={ 2 }>
              <Grid item>
                <Avatar
                  data-testid="header-profile-picture"
                  src={ player.picture }
                  alt="avatar"
                />
              </Grid>
              <Grid item xs>
                <Typography
                  sx={ { fontWeight: 'bold' } }
                  variant="h6"
                  color="text.secondary"
                >
                  {player.name}
                </Typography>
              </Grid>
            </Grid>
          </Paper>
          <Paper
            variant="outlined"
            sx={ {
              p: 3,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center' } }
          >
            <Paper elevation="3" sx={ { textAlign: 'center', p: 1, px: 2 } }>
              <Typography
                variant="h5"
                color="text.primary"
              >
                {`Score: ${player.score} points`}
              </Typography>
            </Paper>
            <Typography
              sx={ { py: 1 } }
              variant="h6"
              color="text.primary"
            >
              {`Correct answers: ${player.assertions}`}
            </Typography>
            <Typography
              variant="body1"
              sx={ { py: 1,
                fontStyle: 'oblique',
                fontWeight: 'regular',
                textDecoration: 'underline',
                fontSize: 18 } }
            >
              {player.assertions < NUMBER
                ? 'You can do better...' : 'Good Job!'}
            </Typography>
            <Button
              variant="outlined"
              data-testid="btn-play-again"
              color="primary"
              onClick={ () => history.push('/trivia-game') }
              sx={ { my: 1 } }
            >
              Play Again
            </Button>
            <Button
              variant="contained"
              data-testid="btn-ranking"
              color="primary"
              onClick={ () => history.push('/trivia-game/ranking') }
            >
              Ranking
            </Button>
          </Paper>
        </Box>
      </Container>
    );
  }
}

Feedback.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

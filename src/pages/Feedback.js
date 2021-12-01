/* eslint-disable react/jsx-max-depth */
import PropTypes from 'prop-types';
import { Avatar, Button, Container, Grid,
  Paper, Typography, CssBaseline, Box } from '@mui/material';
import React, { Component } from 'react';

export default class Feedback extends Component {
  render() {
    const userData = JSON.parse(localStorage.getItem('state'));
    const THREE_QUESTIONS = 3;
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
            <Grid container spacing={ 2 }>
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
              sx={ { pt: 2,
                pb: 1,
                fontSize: {
                  xs: 16,
                  sm: 'h6.fontSize',
                },
                fontWeight: 'regular' } }
              color="text.primary"
            >
              {`You scored ${player.assertions} out of 5 questions`}
            </Typography>
            {player.assertions >= THREE_QUESTIONS
                && (
                  <Typography
                    sx={ { mb: 2,
                      fontStyle: 'oblique',
                      fontWeight: 'regular',
                      textDecoration: 'underline',
                      fontSize: {
                        xs: 18,
                        sm: 'h6.fontSize',
                      } } }
                  >
                    Good Job!
                  </Typography>
                )}
            <Button
              variant="outlined"
              data-testid="btn-play-again"
              color="primary"
              onClick={ () => history.push('/trivia-game') }
              sx={ { mb: 1 } }
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

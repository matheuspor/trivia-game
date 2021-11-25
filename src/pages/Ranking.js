import { CssBaseline, ListItemAvatar, ListItemText } from '@material-ui/core';
import { Box } from '@material-ui/system';
import { Avatar, Button, Container, Divider,
  Grid, List, ListItem, Paper, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import { EmojiEventsTwoTone } from '@mui/icons-material';

export default class Ranking extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const getRanking = JSON.parse(localStorage.getItem('ranking'));
    const { history } = this.props;
    return (
      <Container component="main">
        <CssBaseline />
        <Box
          sx={ {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            mb: 5,
          } }
        >
          <Grid
            container
            direction="row"
            alignItems="center"
            justifyContent="center"
            sx={ { py: 2 } }
          >
            <Typography variant="h3" sx={ { fontSize: 35, fontWeight: 'regular' } }>
              Leaderboard
            </Typography>
            <EmojiEventsTwoTone sx={ { fontSize: 50 } } />
          </Grid>
          <Paper
            variant="outlined"
            sx={ {
              px: 2,
              pb: 3,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center' } }
          >
            <List sx={ { mb: 2 } }>
              {getRanking
            && getRanking.sort((lower, greater) => greater.score - lower.score)
              .map((user, index) => (
                <>
                  <ListItem key={ index }>
                    <ListItemAvatar>
                      <Avatar src={ user.picture } />
                    </ListItemAvatar>
                    <ListItemText
                      primary={ user.name }
                      secondary={
                        <Typography
                          sx={ { display: 'inline', fontWeight: 'bold' } }
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          {user.score}
                          {' '}
                          Points
                        </Typography>
                      }
                    />
                  </ListItem>
                  <Divider component="li" />
                </>
              ))}
            </List>
            <Button
              variant="contained"
              type="button"
              data-testid="btn-go-home"
              onClick={ () => history.push('/trivia-game') }
            >
              Play Again
            </Button>
          </Paper>
        </Box>
      </Container>
    );
  }
}

Ranking.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

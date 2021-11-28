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
    const TOP_10 = 10;
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
            <Typography variant="h2" sx={ { fontSize: 40 } }>
              Leaderboard
            </Typography>
            <EmojiEventsTwoTone sx={ { fontSize: 60 } } />
          </Grid>
          <Paper
            variant="outlined"
            sx={ {
              width: 250,
              px: 2,
              pb: 2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center' } }
          >
            <List sx={ { mb: 2 } }>
              {getRanking
            && getRanking.sort((lower, greater) => greater.score - lower.score)
              .map((user, index) => (
                index < TOP_10 && (
                  <>
                    <ListItem key={ index }>
                      <ListItemText>
                        <Typography sx={ { fontWeight: '600' } }>
                          {index + 1}
                        </Typography>
                      </ListItemText>
                      <ListItemAvatar sx={ { ml: 1 } }>
                        <Avatar
                          sx={ { width: 45, height: 45 } }
                          src={ user.picture }
                        />
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
                  </>)
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

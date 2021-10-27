import { Button, Container, CssBaseline, Dialog, DialogActions,
  DialogContent, DialogContentText,
  DialogTitle, Typography } from '@material-ui/core';
import { Box } from '@material-ui/system';
import { SettingsOutlined } from '@mui/icons-material';
import { FormControl, Grid } from '@mui/material';
import React, { useContext, useState } from 'react';
import makeSelect from '../components/select';
import SettingsContext from '../context/SettingsContext';
import { fetchQuestions } from '../services/apiHelper';

function Settings(window) {
  const [open, setOpen] = useState(false);
  const [settings, setSettings] = useState({
    category: 'All',
    difficulty: 'All',
    type: 'All',
  });
  const { setNewSetting, categories } = useContext(SettingsContext);

  function handleChange({ target: { name, value } }) {
    if (name === 'category') {
      const cat = categories.trivia_categories
        .find((category) => category.name === value);
      setSettings({ ...settings,
        [name]: cat ? cat.id : 'All',
      });
    } else {
      setSettings({ ...settings,
        [name]: value,
      });
    }
  }

  function redirect() {
    setNewSetting(settings);
    const token = localStorage.getItem('token');
    fetchQuestions(token, settings)
      .then((questions) => {
        if (!questions.length) {
          setOpen(true);
        } else {
          window.history.push('/trivia-game');
        }
      });
  }

  const makeDialog = () => (
    <Dialog
      open={ open }
      onClose={ () => setOpen(false) }
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        Error: Unable to find questions with the current settings.
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Please change the Category, Difficulty and/or Type.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={ () => setOpen(false) } autofocus>Close</Button>
      </DialogActions>
    </Dialog>
  );

  return (
    <Container component="main" maxWidth="sx">
      <CssBaseline />
      <Box
        sx={ {
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        } }
      >
        <Grid
          container
          direction="row"
          alignItems="center"
          justifyContent="center"
          sx={ { mb: 2, mt: -2 } }
        >
          <Typography variant="h2">
            Settings
          </Typography>
          <SettingsOutlined sx={ { fontSize: 55 } } />
        </Grid>
        <Box component="form" noValidate sx={ { mt: 1 } }>
          <FormControl sx={ { m: 1, minWidth: 120 } }>
            {makeSelect('category', categories, handleChange) }
            <br />
            {makeSelect('difficulty', ['Easy', 'Medium', 'Hard'], handleChange)}
            <br />
            {makeSelect('type', ['Multiple', 'True/False'], handleChange)}
            <br />
          </FormControl>
        </Box>
        <Button
          type="button"
          onClick={ redirect }
          variant="contained"
          size="medium"
          color="primary"
        >
          Return
        </Button>
      </Box>
      {makeDialog()}
    </Container>
  );
}

export default Settings;

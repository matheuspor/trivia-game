import { Button, Dialog, DialogActions,
  DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
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
  // const history = useHistory();
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
    <>
      <h2 data-testid="settings-title">Settings</h2>
      {makeSelect('category', categories, handleChange)}
      <br />
      {makeSelect('difficulty', ['Easy', 'Medium', 'Hard'], handleChange)}
      <br />
      {makeSelect('type', ['Multiple', 'True/False'], handleChange)}
      <br />
      <button type="button" onClick={ redirect }> Return </button>
      {makeDialog()}
    </>
  );
}

export default Settings;

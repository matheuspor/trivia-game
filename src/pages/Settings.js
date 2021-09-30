import PropTypes from 'prop-types';
import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router';
import makeSelect from '../components/select';
import SettingsContext from '../context/SettingsContext';

function Settings() {
  const [settings, setSettings] = useState({
    category: 'All',
    difficulty: 'All',
    type: 'All',
  });
  const history = useHistory();
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
    history.push('/trivia-game');
  }

  return (
    <>
      <h2 data-testid="settings-title">Settings</h2>
      {makeSelect('category', categories, handleChange)}
      <br />
      {makeSelect('difficulty', ['Easy', 'Medium', 'Hard'], handleChange)}
      <br />
      {makeSelect('type', ['Multiple', 'True/False'], handleChange)}
      <br />
      <button type="button" onClick={ redirect }> Voltar </button>
    </>
  );
}

Settings.propTypes = {
  location: PropTypes.shape({
    categories: PropTypes.shape({
      trivia_categories: PropTypes.arrayOf(PropTypes.object),
    }).isRequired,
  }).isRequired,
};

export default Settings;

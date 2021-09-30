import PropTypes from 'prop-types';
import React, { useState } from 'react';
import SettingsContext from './SettingsContext';

function SettingsProvider({ children }) {
  const [settings, setSettings] = useState({
    category: 'All',
    difficulty: 'All',
    type: 'All',
  });

  const [categories, setCategories] = useState();

  function setNewSetting(newSetting) {
    setSettings(newSetting);
  }

  function setNewCategories(NewValue) {
    setCategories(NewValue);
  }

  return (
    <SettingsContext.Provider
      value={ { settings, setNewSetting, setNewCategories, categories } }
    >
      {children}
    </SettingsContext.Provider>
  );
}

SettingsProvider.propTypes = {
  children: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default SettingsProvider;

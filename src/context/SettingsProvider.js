import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { fetchCategories } from '../services/apiHelper';
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

  useEffect(() => {
    fetchCategories()
      .then((res) => setCategories(res))
  }, [])

  return (
    <SettingsContext.Provider
      value={ { settings, setNewSetting, setCategories, categories } }
    >
      {children}
    </SettingsContext.Provider>
  );
}

SettingsProvider.propTypes = {
  children: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default SettingsProvider;

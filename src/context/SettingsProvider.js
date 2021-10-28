import PropTypes from 'prop-types';
import React, { useState } from 'react';
import SettingsContext from './SettingsContext';

function SettingsProvider({ children }) {
  const [settings, setSettings] = useState({
    category: 'All',
    difficulty: 'All',
    type: 'All',
  });

  function setNewSetting(newSetting) {
    setSettings(newSetting);
  }

  return (
    <SettingsContext.Provider
      value={ { settings, setNewSetting } }
    >
      {children}
    </SettingsContext.Provider>
  );
}

SettingsProvider.propTypes = {
  children: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default SettingsProvider;

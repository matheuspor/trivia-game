import { TextField } from '@material-ui/core';
import { MenuItem } from '@mui/material';
import React from 'react';

export default function makeSelect(name, values, handler) {
  return (
    <TextField
      onChange={ handler }
      select
      label={ `${name[0].toUpperCase()}${name.substr(1)}` }
      name={ name }
    >
      <MenuItem value="All">
        All
      </MenuItem>
      {name === 'category' ? (
        values.trivia_categories.map((category) => (
          <MenuItem key={ category.id } value={ category.name }>
            {category.name}
          </MenuItem>
        ))
      )
        : (
          values.map((value) => (
            value === 'True/False'
              ? (
                <MenuItem key="boolean" value="boolean">
                  {value}
                </MenuItem>
              )
              : (
                <MenuItem key={ value } value={ value.toLowerCase() }>
                  {value}
                </MenuItem>
              )
          ))
        )}
    </TextField>
  );
}

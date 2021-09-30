import React from 'react';

export default function makeSelect(name, values, handler) {
  return (
    <label htmlFor={ name }>
      {`${name[0].toUpperCase()}${name.substr(1)}:`}
      <select id={ name } name={ name } onChange={ handler }>
        <option> All </option>
        {name === 'category' ? (
          values.trivia_categories.map((category) => (
            <option key={ category.id }>{category.name}</option>))
        )
          : (
            values.map((value) => (
              value === 'True/False'
                ? (
                  <option key="boolean" value="boolean">
                    {value}
                  </option>
                )
                : (
                  <option key={ value } value={ value.toLowerCase() }>
                    {value}
                  </option>
                )
            ))

          )}
      </select>
    </label>
  );
}

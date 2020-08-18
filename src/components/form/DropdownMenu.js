import React from 'react';

const DropdownMenu = props => {
  const handleUserInput = event => {
    props.onChange(event);
  };

  return (
    <div className="field">
      <label>{props.labelText}</label>
      <select
        name={props.name}
        className="ui simple dropdown"
        value={props.value}
        onChange={handleUserInput}
      >
        {props.optionDataSource.map(option => {
          return (
            <option value={option.value} label={option.label} key={option.value}>
              {option.label}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default DropdownMenu;

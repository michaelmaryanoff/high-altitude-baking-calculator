import React from 'react';

const UnitDropdown = props => {
  const handleUserInput = event => {
    props.onChange(event);
  };

  return (
    <div className={`field`}>
      <label>{props.label}</label>
      <select
        name={props.name}
        className="ui simple dropdown item"
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

export default UnitDropdown;

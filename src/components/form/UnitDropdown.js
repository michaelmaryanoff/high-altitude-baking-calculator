import React from 'react';
import PropTypes from 'prop-types';

const UnitDropdown = props => {
  const handleUserInput = event => {
    props.handleOnChange(event);
  };

  return (
    <div className="field">
      <label>{props.label}</label>
      <select
        name={props.name}
        className="ui fluid dropdown"
        value={props.value}
        onChange={handleUserInput}
        style={{ fontSize: 15 }}
      >
        {props.optionDataSource.map(option => {
          return (
            <option className="item" value={option.value} label={option.label} key={option.value}>
              {option.label}
            </option>
          );
        })}
      </select>
    </div>
  );
};

UnitDropdown.propTypes = {
  label: PropTypes.any.isRequired,
  name: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
  handleOnChange: PropTypes.any.isRequired,
  optionDataSource: PropTypes.any.isRequired
};

export default UnitDropdown;

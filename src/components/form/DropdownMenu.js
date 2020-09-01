import React from 'react';
import PropTypes from 'prop-types';

const DropdownMenu = props => {
  const handleUserInput = event => {
    props.handleOnChange(event);
  };

  return (
    <div className={`field`}>
      <label>Fraction</label>
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

DropdownMenu.propTypes = {
  name: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
  handleOnChange: PropTypes.func.isRequired,
  optionDataSource: PropTypes.any.isRequired
};

export default DropdownMenu;

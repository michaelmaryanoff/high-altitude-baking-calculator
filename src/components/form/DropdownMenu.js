import React from 'react';

import { useDispatch } from 'react-redux';

import { handleInput } from '../../actions';

const DropdownMenu = props => {
  const dispatch = useDispatch();

  const handleUserInput = event => {
    const { name, value } = event.target;
    dispatch(handleInput(name, value));
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

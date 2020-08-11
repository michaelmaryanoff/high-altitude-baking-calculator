import React, { useState } from 'react';

import { useDispatch } from 'react-redux';

import { handleDropDownInput } from '../../actions';

const DropdownMenu = props => {
  const [fieldData, setFieldData] = useState('metric');
  const dispatch = useDispatch();

  const handleUserInput = event => {
    const { id, value } = event.target;
    setFieldData(value);
    dispatch(handleDropDownInput(id, value));
  };

  return (
    <div className="field">
      <label>{props.labelText}</label>
      <select
        id={props.id}
        className="ui simple dropdown"
        value={fieldData}
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

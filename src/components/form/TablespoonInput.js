import React from 'react';

import { useDispatch } from 'react-redux';

import { handleInput } from '../../actions';

const TablespoonInput = props => {
  const dispatch = useDispatch();

  const handleUserInput = event => {
    const { name, value } = event.target;

    // If we pass an empty string into our handleInput function,
    // It will cause errors in redux and give us NaN
    const safeValue = value ? value : 0;

    dispatch(handleInput(name, safeValue));
    props.handleOnChange(event);
  };

  return (
    <div className="two wide field">
      <label>{props.label}</label>
      <input
        type="number"
        name={props.name}
        onChange={handleUserInput}
        value={props.value}
        label={props.label}
        min={0}
      />

      {/* Optional error */}
      <div>{props.children}</div>
    </div>
  );
};

export default TablespoonInput;

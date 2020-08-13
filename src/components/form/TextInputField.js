import React from 'react';

import { useDispatch } from 'react-redux';

import { handleDropDownInput } from '../../actions';

const TextInputField = props => {
  const dispatch = useDispatch();

  const handleUserInput = event => {
    const { id, value } = event.target;
    dispatch(handleDropDownInput(id, value));
    props.handleOnChange(value);
  };

  return (
    <div className="field">
      <label>{props.label}</label>
      <input
        type={props.type}
        id={props.id}
        placeholder={props.placeholder}
        onChange={handleUserInput}
        value={props.value}
        label={props.value}
        min={props.min}
      />

      {/* Optional error */}
      <div>{props.children}</div>
    </div>
  );
};

export default TextInputField;

import React from 'react';

import { useDispatch } from 'react-redux';

import { handleInput } from '../../actions';

const TextInputField = props => {
  const dispatch = useDispatch();

  const handleUserInput = event => {
    const { name, value } = event.target;
    dispatch(handleInput(name, value));
    props.handleOnChange(event);
  };

  return (
    <div className="field">
      <label>{props.label}</label>
      <input
        type={props.type}
        name={props.name}
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

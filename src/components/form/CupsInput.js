import React from 'react';

import { useDispatch } from 'react-redux';

import { handleInput } from '../../actions';

const CupsInput = props => {
  const dispatch = useDispatch();

  const handleUserInput = event => {
    const { name, value } = event.target;
    dispatch(handleInput(name, value));
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

export default CupsInput;

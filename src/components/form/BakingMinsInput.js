import React from 'react';

import { useDispatch } from 'react-redux';

import { handleInput } from '../../actions';

const BakingMinsInput = props => {
  const dispatch = useDispatch();

  const handleUserInput = event => {
    const { name, value } = event.target;
    dispatch(handleInput(name, value));
    props.handleOnChange(event);
  };

  return (
    <div className="two wide field">
      <label>Time (m)</label>
      <input
        type="text"
        pattern="[0-9]*"
        name="bakingMinsInput"
        onChange={handleUserInput}
        value={props.value}
        label="Time (mins)"
        min={0}
      />

      {/* Optional error */}
      <div>{props.children}</div>
    </div>
  );
};

export default BakingMinsInput;

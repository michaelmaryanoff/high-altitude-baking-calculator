import React from 'react';

import { useDispatch } from 'react-redux';

import { handleInput } from '../../actions';

const BakingHoursInput = props => {
  const dispatch = useDispatch();

  const handleUserInput = event => {
    const { name, value } = event.target;
    dispatch(handleInput(name, value));
    props.handleOnChange(event);
  };

  return (
    <div className="two wide field">
      <label>Time (h)</label>
      <input
        type="text"
        name="bakingHoursInput"
        onChange={handleUserInput}
        value={props.value}
        label="Time (hours)"
        min={0}
      />

      {/* Optional error */}
      <div>{props.children}</div>
    </div>
  );
};

export default BakingHoursInput;

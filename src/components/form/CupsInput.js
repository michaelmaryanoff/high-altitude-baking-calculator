import React from 'react';

const CupsInput = props => {
  const handleUserInput = event => {
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

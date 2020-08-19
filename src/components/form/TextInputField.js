import React from 'react';

const TextInputField = props => {
  const handleUserInput = event => {
    props.handleOnChange(event);
  };

  return (
    <div className={`${props.width} field`}>
      <label>{props.label}</label>
      <input
        type="number"
        name={props.name}
        placeholder={props.placeholder}
        onChange={handleUserInput}
        value={props.value}
        label={props.value}
        min={0}
      />

      {/* Optional error */}
      <div>{props.children}</div>
    </div>
  );
};

export default TextInputField;

import React from 'react';

const TextInputField = props => {
  const handleUserInput = event => {
    props.handleOnChange(event);
  };

  return (
    <div className={`${props.width} field`}>
      <label className="ui top attached purple label">{props.label}</label>
      <div className="label">{props.label}</div>
      <input
        type="text"
        pattern="[0-9]*"
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

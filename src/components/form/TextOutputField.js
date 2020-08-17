import React from 'react';

const TextOutputField = props => {
  const handleUserInput = event => {
    props.handleOnChange(event);
  };

  return (
    <div className={`${props.width} field`}>
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

export default TextOutputField;

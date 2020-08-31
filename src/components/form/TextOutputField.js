import React from 'react';

const TextOutputField = props => {

  return (
    <div className={`${props.width} field`}>
      <label>{props.label}</label>
      <input
        type="text"
        name={props.name}
        placeholder={props.placeholder}
        readOnly={true}
        value={props.value}
        label={props.label}
      />

      {/* Optional error */}
      <div>{props.children}</div>
    </div>
  );
};

export default TextOutputField;

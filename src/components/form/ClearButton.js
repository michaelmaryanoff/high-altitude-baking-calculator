import React from 'react';

const ClearButton = props => {
  return (
    <button
      className="ui olive basic circular button"
      label="Clear"
      type="button"
      onClick={props.onClick}
    >
      Clear
    </button>
  );
};

export default ClearButton;

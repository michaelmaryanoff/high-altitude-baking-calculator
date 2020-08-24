import React from 'react';

const ClearButton = props => {
  return (
    <button className="ui red button" label="Clear" type="button" onClick={props.onClick}>
      Clear
    </button>
  );
};

export default ClearButton;

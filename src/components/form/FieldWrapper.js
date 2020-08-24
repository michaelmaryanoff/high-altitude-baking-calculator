import React from 'react';

const FieldWrapper = props => {
  return (
    <div className="ui row">
      <div className="ui three column centered doubling stackable center aligned grid container">
        {props.children}
      </div>
    </div>
  );
};

export default FieldWrapper;
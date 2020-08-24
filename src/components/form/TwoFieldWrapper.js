import React from 'react';

const TwoFieldWrapper = props => {
  return (
    <div className="ui row">
      <div className="ui four column centered doubling stackable center aligned grid container">
        {props.children}
      </div>
    </div>
  );
};

export default TwoFieldWrapper;

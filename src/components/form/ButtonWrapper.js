import React from 'react';

const ButtonWrapper = props => {
  return (
    <div className="centered center aligned row">
      <div className="ui six column centered grid">
        <div className="center aligned column">
          <div className="ui compact basic segment">{props.children}</div>
        </div>
      </div>
    </div>
  );
};

export default ButtonWrapper;

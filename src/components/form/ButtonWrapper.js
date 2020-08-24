import React from 'react';

const ButtonWrapper = props => {
  return (
    <div className="ui center aligned centered stackable grid">
      <div className="center aligned column">
        <div className="buttons">
          <div>{props.children}</div>
        </div>
      </div>
    </div>
  );
};

export default ButtonWrapper;

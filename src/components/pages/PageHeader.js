import React from 'react';

const PageHeader = props => {
  return (
    <div>
      <div className="ui basic center aligned segment">
        <h1 className="ui header">{props.label}</h1>
      </div>
    </div>
  );
};

export default PageHeader;

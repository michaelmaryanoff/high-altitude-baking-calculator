import React from 'react';

const PageHeader = props => {
  return (
    <div>
      <div className="ui basic center aligned segment">
        <div className="ui header">{props.label}</div>
      </div>
    </div>
  );
};

export default PageHeader;

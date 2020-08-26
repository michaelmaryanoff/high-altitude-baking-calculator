import React from 'react';

import FieldGroupLabel from './FieldGroupLabel';

const FieldColumn = props => {
  return (
    <div className="center aligned column">
      <div className="ui compact segment">
        <FieldGroupLabel>{props.fieldGroupLabel}</FieldGroupLabel>
        <div className="ui four column grid">{props.children}</div>
      </div>
    </div>
  );
};

export default FieldColumn;

import React from 'react';
import { PropTypes } from 'prop-types';

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

FieldColumn.propTypes = {
  fieldGroupLabel: PropTypes.string.isRequired
};

export default FieldColumn;

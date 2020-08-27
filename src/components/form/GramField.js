import React from 'react';
import { PropTypes } from 'prop-types';

import TextInputField from './TextInputField';
import TextOutputField from './TextOutputField';
import FieldColumn from './FieldColumn';

const GramField = props => {
  return (
    <FieldColumn fieldGroupLabel={props.label}>
      <div className="row">
        <div className="sixteen wide column">
          <TextInputField
            name={props.inputName}
            value={props.inputValue}
            handleOnChange={props.handleOnChange}
            label="Original amount"
          />
        </div>
      </div>
      <div className="row">
        <div className="sixteen wide column">
          <TextOutputField name={props.outputName} value={props.outputValue} label={`Adjusted `} />
        </div>
      </div>
    </FieldColumn>
  );
};

GramField.propTypes = {
  label: PropTypes.string.isRequired,
  inputName: PropTypes.string.isRequired,
  handleOnChange: PropTypes.any.isRequired,
  inputValue: PropTypes.any.isRequired,
  outputName: PropTypes.string.isRequired,
  outputValue: PropTypes.any.isRequired
};

export default GramField;

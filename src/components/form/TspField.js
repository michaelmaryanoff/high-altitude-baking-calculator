import React from 'react';
import PropTypes from 'prop-types';

import TeaspoonInputField from './TeaspoonInput';
import DropdownMenu from './DropdownMenu';
import TextOutputField from './TextOutputField';
import FieldColumn from './FieldColumn';

const partialTspDropDownDataSource = [
  { label: '-', value: '' },
  { label: '1/4', value: 0.25 },
  { label: '1/2', value: 0.5 },
  { label: '3/4', value: 0.75 }
];

const TspField = props => {
  return (
    <FieldColumn fieldGroupLabel={props.label}>
      <div className="row">
        <div className="eight wide column">
          <TeaspoonInputField
            name={props.tspInputName}
            value={props.tspInputValue}
            label="Tsp"
            handleOnChange={props.handleOnChange}
          />
        </div>
        <div className="eight wide column">
          <DropdownMenu
            name={props.dropdownName}
            optionDataSource={partialTspDropDownDataSource}
            value={props.dropdownMenuValue}
            handleOnChange={props.handleDropdownOnChange}
          />
        </div>
      </div>
      <div className="row">
        <div className="sixteen wide column">
          <TextOutputField
            name={props.outputName}
            value={props.output}
            onChange={props.handleOnChange}
            label="Adjusted"
          />
        </div>
      </div>
    </FieldColumn>
  );
};

TspField.propTypes = {
  label: PropTypes.any.isRequired,
  tspInputName: PropTypes.any.isRequired,
  tspInputValue: PropTypes.any.isRequired,
  dropdownName: PropTypes.any.isRequired,
  dropdownMenuValue: PropTypes.any.isRequired,
  handleDropdownOnChange: PropTypes.any.isRequired,
  outputName: PropTypes.any.isRequired,
  output: PropTypes.any.isRequired,
  handleOnChange: PropTypes.any.isRequired
};

export default TspField;

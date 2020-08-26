import React from 'react';

import TeaspoonInputField from './TeaspoonInput';
import DropdownMenu from './DropdownMenu';
import TextOutputField from './TextOutputField';
import FieldGroupLabel from './FieldGroupLabel';
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
            onChange={props.handleDropdownOnChange}
            label="Fraction"
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

export default TspField;

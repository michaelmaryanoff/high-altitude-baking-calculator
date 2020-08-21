import React from 'react';

import TeaspoonInputField from './TeaspoonInput';
import DropdownMenu from './DropdownMenu';
import TextOutputField from './TextOutputField';

const partialTspDropDownDataSource = [
  { label: '-', value: '' },
  { label: '1/4', value: 0.25 },
  { label: '1/2', value: 0.5 },
  { label: '3/4', value: 0.75 }
];

const TspField = props => {
  return (
    <div className="center aligned column">
      <div className="ui compact segment">
        <div className="ui four column grid">
          <label className="ui top attached large purple label">{props.label}</label>
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
        </div>
      </div>
    </div>
  );
};

export default TspField;

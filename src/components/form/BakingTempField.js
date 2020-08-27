import React from 'react';

import TextInputField from './TextInputField';
import TextOutputField from './TextOutputField';
import FieldColumn from './FieldColumn';

const BakingTempField = props => {
  return (
    <FieldColumn fieldGroupLabel={`Baking Temperature ${props.unitLabel}`}>
      <div className="row">
        <div className="sixteen wide column">
          <TextInputField
            name={props.name}
            value={props.inputValue}
            handleOnChange={props.handleOnChange}
            label="Original Temp"
          />
        </div>
      </div>
      <div className="row">
        <div className="sixteen wide column">
          <TextOutputField name={'ovenTempOutput'} value={props.outputValue} label={`Adjusted `} />
        </div>
      </div>
    </FieldColumn>
  );
};

export default BakingTempField;

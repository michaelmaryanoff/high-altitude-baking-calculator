import React from 'react';

import TextInputField from './TextInputField';
import TextOutputField from './TextOutputField';
import FieldColumn from './FieldColumn';

const BakingTempField = props => {
  return (
    <FieldColumn fieldGroupLabel="Baking Temperature (F)">
      <div className="row">
        <div className="sixteen wide column">
          <TextInputField
            name={'ovenTempInput'}
            value={props.inputValue}
            handleOnChange={props.handleOnChange}
            label="Original Temp"
          />
        </div>
      </div>
      <div className="row">
        <div className="sixteen wide column">
          <TextOutputField
            name={'ovenTempOutput'}
            value={props.outputValue}
            label={`Adjusted `}
            width={''}
          />
        </div>
      </div>
    </FieldColumn>
  );
};

export default BakingTempField;

import React from 'react';

import BakingHoursInput from './BakingHoursInput';
import BakingMinsInput from './BakingMinsInput';
import TextOutputField from './TextOutputField';
import FieldColumn from './FieldColumn';

// Baking Time

const BakingTimeField = props => {
  return (
    <FieldColumn fieldGroupLabel="Baking Time">
      <div className="row">
        <div className="eight wide column">
          <BakingHoursInput value={props.hoursInput} handleOnChange={props.handleOnChange} />
        </div>
        <div className="eight wide column">
          <BakingMinsInput value={props.minsInput} handleOnChange={props.handleOnChange} />
        </div>
      </div>
      <div className="row">
        <div className="sixteen wide column">
          <TextOutputField
            name={'bakingTimeOutput'}
            value={props.output}
            handleOnChange={props.handleOnChange}
            label="Adjusted"
          />
        </div>
      </div>
    </FieldColumn>
  );
};

export default BakingTimeField;

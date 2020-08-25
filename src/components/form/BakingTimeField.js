import React from 'react';

import BakingHoursInput from './BakingHoursInput';
import BakingMinsInput from './BakingMinsInput';
import TextOutputField from './TextOutputField';
import FieldGroupLabel from './FieldGroupLabel';

const BakingTimeField = props => {
  return (
    <div className="center aligned column">
      <div className="ui compact segment">
        <FieldGroupLabel>Baking Time</FieldGroupLabel>
        <div className="ui four column grid">
          <div className="row">
            <div className="eight wide column">
              <BakingHoursInput
                value={props.hoursInput}
                handleOnChange={props.handleOnChange}
                width=""
              />
            </div>
            <div className="eight wide column">
              <BakingMinsInput
                value={props.minsInput}
                handleOnChange={props.handleOnChange}
                width=""
              />
            </div>
          </div>
          <div className="row">
            <div className="sixteen wide column">
              <TextOutputField
                name={'bakingTimeOutput'}
                value={props.output}
                handleOnChange={props.handleOnChange}
                label="Adjusted"
                width={''}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BakingTimeField;

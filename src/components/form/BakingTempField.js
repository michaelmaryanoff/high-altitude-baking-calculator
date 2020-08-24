import React from 'react';

import FieldGroupLabel from './FieldGroupLabel';
import TextInputField from './TextInputField';
import TextOutputField from './TextOutputField';

const BakingTempField = props => {
  return (
    <div className="center aligned column">
      <div className="ui compact segment">
        <div className="ui four column grid">
          <FieldGroupLabel>Baking temperature</FieldGroupLabel>

          <div className="sixteen wide column">
            <TextInputField
              name={'ovenTempInput'}
              value={props.inputValue}
              handleOnChange={props.handleOnChange}
              label={`Original`}
            />
          </div>

          <div className="sixteen wide column">
            <TextOutputField
              name={'ovenTempOutput'}
              value={props.outputValue}
              label={`Adjusted `}
              width={''}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BakingTempField;

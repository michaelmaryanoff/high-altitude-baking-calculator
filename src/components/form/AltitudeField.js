import React from 'react';

import { useSelector } from 'react-redux';

import FieldGroupLabel from './FieldGroupLabel';
import TextInputField from './TextInputField';

const AltitudeField = props => {
  const { unit } = useSelector(state => state.globalState);

  const inputLabel = unit === 'metric' ? `Meters above sea level` : `Feet above sea level`;

  return (
    <div className="center aligned centered four wide column">
      <div className="ui segment">
        <FieldGroupLabel>Altitude</FieldGroupLabel>
        <div className="ui four column grid">
          <div className="row">
            <div className="sixteen wide column">
              <TextInputField
                name={props.name}
                type="number"
                value={props.altitudeInput}
                handleOnChange={props.onChange}
                label={inputLabel}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AltitudeField;

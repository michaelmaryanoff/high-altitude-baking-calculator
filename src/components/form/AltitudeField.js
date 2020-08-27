import React from 'react';
import FieldGroupLabel from './FieldGroupLabel';
import TextInputField from './TextInputField';

const AltitudeField = props => {
  return (
    <div className="ui row">
      <div className="ui eight column centered doubling center aligned grid container">
        <div className="center aligned three wide column">
          <div className="ui compact segment">
            <FieldGroupLabel>Altitude</FieldGroupLabel>
            <div className="ui four column grid">
              <div className="row">
                <div className="sixteen wide column">
                  <TextInputField
                    name={props.name}
                    type="number"
                    value={props.altitudeInput}
                    handleOnChange={props.onChange}
                    label={`Feet above sea level`}
                    width=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AltitudeField;

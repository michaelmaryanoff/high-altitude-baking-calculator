import React, { useState } from 'react';
import DropdownMenu from './DropdownMenu';
import { unitField, altitudeField } from '../form/inputTypes';

import { clearForm } from '../../actions';

import { useDispatch } from 'react-redux';
import TextInputField from './TextInputField';

const CalculatorForm = () => {
  const dispatch = useDispatch();

  const [unitFieldData, setUnitFieldData] = useState('metric');
  const [altitudeFieldData, setAltitudeFieldDate] = useState('');

  const defaults = { unitFieldDefault: 'metric', altitudeFieldDefault: '' };

  const unitDataSource = [
    { label: 'Metric', value: 'metric' },
    { label: 'Customary', value: 'customary' }
  ];

  const handleClear = event => {
    event.preventDefault();

    // Set defaults in state
    const { unitFieldDefault, altitudeFieldDefault } = defaults;
    setUnitFieldData(unitFieldDefault);
    setAltitudeFieldDate(altitudeFieldDefault);

    // Set defaults in Redux
    dispatch(clearForm());
  };

  return (
    <div className="ui basic segment">
      <div className="ui two column centered grid">
        <div className="ui segment">
          <form className="ui large form error">
            <div className="column">
              <div className="one field">
                <DropdownMenu
                  labelText="Units"
                  id={unitField}
                  value={unitFieldData}
                  optionDataSource={unitDataSource}
                  onChange={(id, value) => setUnitFieldData(value)}
                />
              </div>
              <div className="one field">
                <TextInputField
                  id={altitudeField}
                  type="number"
                  palceholder="Current altitude"
                  value={altitudeFieldData}
                  handleOnChange={event => setAltitudeFieldDate(event)}
                  label="Altitude"
                  min={0}
                />
              </div>
            </div>
            <p />
            <button className="ui primary button" onClick={handleClear}>
              Clear
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CalculatorForm;

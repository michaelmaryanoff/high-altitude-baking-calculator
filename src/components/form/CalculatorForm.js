// React
import React, { useState } from 'react';

// Constants
import { unitField, altitudeField, ovenTempField } from '../form/inputTypes';

// Redux
import { clearForm } from '../../actions';
import { useDispatch, useSelector } from 'react-redux';

// Components
import DropdownMenu from './DropdownMenu';
import TextInputField from './TextInputField';

const CalculatorForm = () => {
  // Component state
  const [unitFieldData, setUnitFieldData] = useState('metric');
  const [altitudeFieldData, setAltitudeFieldDate] = useState('');
  const [ovenTempFieldData, setOvenTempFieldDate] = useState('');

  // Defualt state
  const defaults = { unitFieldDefault: 'metric', altitudeFieldDefault: '' };

  // Redux
  const dispatch = useDispatch();
  // const units = useSelector(state => state.calculationForm);

  // Used for populating unit dropdown
  const unitDataSource = [
    { label: 'Metric', value: 'metric' },
    { label: 'Customary', value: 'customary' }
  ];

  // Setting altitude label
  const unit = useSelector(state => state.calculationForm.unit);
  const altitudeLabel = unit === 'metric' ? 'Altitude (m)' : 'Altitude (ft)';
  const ovenTempLabel = unit === 'metric' ? 'Oven temp (C)' : 'Oven temp (F)';

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
                  value={altitudeFieldData}
                  handleOnChange={event => setAltitudeFieldDate(event)}
                  label={altitudeLabel}
                  min={0}
                />
              </div>
              <div className="two fields">
                <TextInputField
                  id={ovenTempField}
                  type="number"
                  value={ovenTempFieldData}
                  handleOnChange={event => setOvenTempFieldDate(event)}
                  label={ovenTempLabel}
                  min={0}
                />
                <TextInputField
                  id={ovenTempField}
                  type="number"
                  value={ovenTempFieldData}
                  handleOnChange={event => setOvenTempFieldDate(event)}
                  label={ovenTempLabel}
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

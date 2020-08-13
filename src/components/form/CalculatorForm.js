// React
import React, { useState } from 'react';

// Constants
import { unitField, altitudeField, ovenTempField, ovenTempFieldOutput } from '../form/inputTypes';

// Redux
import { clearForm } from '../../actions';
import { useDispatch, useSelector } from 'react-redux';

// Components
import DropdownMenu from './DropdownMenu';
import TextInputField from './TextInputField';

const CalculatorForm = () => {
  // Component state
  const [unitFieldData, setUnitFieldData] = useState('metric');
  const [altitudeFieldData, setAltitudeFieldData] = useState('');
  const [ovenTempInputFieldData, setOvenTempInputFieldData] = useState('');
  const [ovenTempOutputFieldData, setOvenTempOutputFieldData] = useState('');

  // Defualt state
  const defaults = { unitFieldDefault: 'metric', emptyString: '' };

  // Redux
  const dispatch = useDispatch();

  // Used for populating unit dropdown
  const unitDataSource = [
    { label: 'Metric', value: 'metric' },
    { label: 'Customary', value: 'customary' }
  ];

  // Setting altitude label
  const unit = useSelector(state => state.calculationForm.unit);
  const altitudeUnitLabel = unit === 'metric' ? '(m)' : '(ft)';
  const ovenTempUnitLabel = unit === 'metric' ? '(C)' : '(F)';

  const handleClear = event => {
    event.preventDefault();

    // Set defaults in state
    const { unitFieldDefault, emptyString } = defaults;
    setUnitFieldData(unitFieldDefault);
    setAltitudeFieldData(emptyString);
    setOvenTempInputFieldData(emptyString);
    setOvenTempOutputFieldData(emptyString);

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
                  handleOnChange={event => setAltitudeFieldData(event)}
                  label={`Altitude ${altitudeUnitLabel}`}
                  min={0}
                />
              </div>
              <div className="two fields">
                <TextInputField
                  id={ovenTempField}
                  type="number"
                  value={ovenTempInputFieldData}
                  handleOnChange={event => setOvenTempInputFieldData(event)}
                  label={`Oven temp ${ovenTempUnitLabel}`}
                  min={0}
                />
                <TextInputField
                  id={ovenTempFieldOutput}
                  type="number"
                  value={ovenTempOutputFieldData}
                  handleOnChange={event => setOvenTempOutputFieldData(event)}
                  label={`Adjusted Oven temp ${ovenTempUnitLabel} `}
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

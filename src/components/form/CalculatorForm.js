// React
import React, { useState } from 'react';

// Constants
import {
  unitField,
  altitudeField,
  ovenTempInputField,
  ovenTempOutputField,
  liquidInputField,
  liquidOutputField,
  flourInputField,
  flourOutputField,
  sugarInputField,
  sugarOutputField,
  bakingPowderInputField,
  bakingPowderOutputField,
  yeastInputField,
  yeastOutputField,
  bakingTimeInputField,
  bakingTimeOutputField
} from '../form/inputTypes';

import { defaultUnit } from '../../constants';

// Redux
import { clearForm, calculateTemp } from '../../actions';
import { useDispatch, useSelector } from 'react-redux';

// Components
import DropdownMenu from './DropdownMenu';
import TextInputField from './TextInputField';

const CalculatorForm = () => {
  // Component state for controlling fields

  const [unitFieldData, setUnitFieldData] = useState(defaultUnit);

  const [altitudeFieldData, setAltitudeFieldData] = useState('');

  const [ovenTempInputFieldData, setOvenTempInputFieldData] = useState('');
  const [ovenTempOutputFieldData, setOvenTempOutputFieldData] = useState('');

  const [bakingTimeInputFieldData, setBakingTimeInputFieldData] = useState('');
  const [bakingTimeOutputFieldData, setBakingTimeOutputFieldData] = useState('');

  const [liquidInputFieldData, setliquidInputFieldData] = useState('');
  const [liquidOutputFieldData, setliquidOutputFieldData] = useState('');

  const [flourInputFieldData, setFlourInputFieldData] = useState('');
  const [flourOutputFieldData, setFlourOutputFieldData] = useState('');

  const [sugarInputFieldData, setSugarInputFieldData] = useState('');
  const [sugarOutputFieldData, setSugarOutputFieldData] = useState('');

  const [bakingPowderInputFieldData, setBakingPowderInputFieldData] = useState('');
  const [bakingPowderOutputFieldData, setBakingPowderOutputFieldData] = useState('');

  const [yeastInputFieldData, setYeastInputFieldData] = useState('');
  const [yeastOutputFieldData, setYeastOutputFieldData] = useState('');

  // Defualt state
  const defaults = { unitFieldDefault: defaultUnit, emptyString: '' };

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

  const handleClearPressed = event => {
    event.preventDefault();

    // Set defaults in state
    resetFieldData();

    // Set defaults in Redux
    dispatch(clearForm());
  };

  const handleCalculatePressed = event => {
    event.preventDefault();

    dispatch(calculateTemp(ovenTempInputFieldData));
  };

  const resetFieldData = () => {
    const { unitFieldDefault, emptyString } = defaults;
    setUnitFieldData(unitFieldDefault);
    setAltitudeFieldData(emptyString);
    setOvenTempInputFieldData(emptyString);
    setOvenTempOutputFieldData(emptyString);
    setliquidInputFieldData(emptyString);
    setliquidOutputFieldData(emptyString);
    setFlourInputFieldData(emptyString);
    setFlourOutputFieldData(emptyString);
    setSugarInputFieldData(emptyString);
    setSugarOutputFieldData(emptyString);
    setBakingPowderInputFieldData(emptyString);
    setBakingPowderOutputFieldData(emptyString);
    setYeastInputFieldData(emptyString);
    setYeastOutputFieldData(emptyString);
    setBakingTimeInputFieldData(emptyString);
    setBakingTimeOutputFieldData(emptyString);
  };

  return (
    <div className="ui basic segment">
      <div className="ui two column centered grid">
        <div className="ui segment">
          <form className="ui large form error">
            <div className="column">
              {/* Units */}
              <div className="one field">
                <DropdownMenu
                  labelText="Units"
                  id={unitField}
                  value={unitFieldData}
                  optionDataSource={unitDataSource}
                  onChange={(id, value) => setUnitFieldData(value)}
                />
              </div>
              {/* Altitude */}
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
              {/* Oven temp */}
              <div className="two fields">
                <TextInputField
                  id={ovenTempInputField}
                  type="number"
                  value={ovenTempInputFieldData}
                  handleOnChange={event => setOvenTempInputFieldData(event)}
                  label={`Oven temp ${ovenTempUnitLabel}`}
                  min={0}
                />
                <TextInputField
                  id={ovenTempOutputField}
                  type="number"
                  value={ovenTempOutputFieldData}
                  handleOnChange={event => setOvenTempOutputFieldData(event)}
                  label={`Adjusted Oven temp ${ovenTempUnitLabel} `}
                  min={0}
                />
              </div>
              {/* Baking time */}
              <div className="two fields">
                <TextInputField
                  id={bakingTimeInputField}
                  type="number"
                  value={bakingTimeInputFieldData}
                  handleOnChange={event => setBakingTimeInputFieldData(event)}
                  label="Baking Time"
                  min={0}
                />
                <TextInputField
                  id={bakingTimeOutputField}
                  type="number"
                  value={bakingTimeOutputFieldData}
                  handleOnChange={event => setBakingTimeOutputFieldData(event)}
                  label="Adjusted Baking Time"
                  min={0}
                />
              </div>
              {/* Liquids */}
              <div className="two fields">
                <TextInputField
                  id={liquidInputField}
                  type="number"
                  value={liquidInputFieldData}
                  handleOnChange={event => setliquidInputFieldData(event)}
                  label={`Liquids`}
                  min={0}
                />
                <TextInputField
                  id={liquidOutputField}
                  type="number"
                  value={liquidOutputFieldData}
                  handleOnChange={event => setliquidOutputFieldData(event)}
                  label={`Adjusted Liquids`}
                  min={0}
                />
              </div>
              {/* Flour */}
              <div className="two fields">
                <TextInputField
                  id={flourInputField}
                  type="number"
                  value={flourInputFieldData}
                  handleOnChange={event => setFlourInputFieldData(event)}
                  label={`Flour`}
                  min={0}
                />
                <TextInputField
                  id={flourOutputField}
                  type="number"
                  value={flourOutputFieldData}
                  handleOnChange={event => setFlourOutputFieldData(event)}
                  label={`Adjusted Flour`}
                  min={0}
                />
              </div>
              {/* Sugar */}
              <div className="two fields">
                <TextInputField
                  id={sugarInputField}
                  type="number"
                  value={sugarInputFieldData}
                  handleOnChange={event => setSugarInputFieldData(event)}
                  label={`Sugar`}
                  min={0}
                />
                <TextInputField
                  id={sugarOutputField}
                  type="number"
                  value={sugarOutputFieldData}
                  handleOnChange={event => setSugarOutputFieldData(event)}
                  label={`Adjusted Sugar`}
                  min={0}
                />
              </div>
              {/* Baking powder */}
              <div className="two fields">
                <TextInputField
                  id={bakingPowderInputField}
                  type="number"
                  value={bakingPowderInputFieldData}
                  handleOnChange={event => setBakingPowderInputFieldData(event)}
                  label={`Baking Powder`}
                  min={0}
                />
                <TextInputField
                  id={bakingPowderOutputField}
                  type="number"
                  value={bakingPowderOutputFieldData}
                  handleOnChange={event => setBakingPowderOutputFieldData(event)}
                  label={`Adjusted Baking Powder`}
                  min={0}
                />
              </div>
              {/* Yeast */}
              <div className="two fields">
                <TextInputField
                  id={yeastInputField}
                  type="number"
                  value={yeastInputFieldData}
                  handleOnChange={event => setYeastInputFieldData(event)}
                  label={`Yeast`}
                  min={0}
                />
                <TextInputField
                  id={yeastOutputField}
                  type="number"
                  value={yeastOutputFieldData}
                  handleOnChange={event => setYeastOutputFieldData(event)}
                  label={`Adjusted Yeast`}
                  min={0}
                />
              </div>
            </div>
            <p />
            <button className="ui red button" label="Clear" onClick={handleClearPressed}>
              Clear
            </button>
            <button
              className="ui primary button"
              label="Calculate"
              onClick={handleCalculatePressed}
            >
              Calculate
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CalculatorForm;

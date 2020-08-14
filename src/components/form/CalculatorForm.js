// React
// eslint-ignore
// eslint-disable-next-line
import React, { useState, useEffect, useCallback } from 'react';

import { defaultUnit } from '../../constants';

// Redux

import { clearForm } from '../../actions';
import { useDispatch, useSelector } from 'react-redux';

// Components
import DropdownMenu from './DropdownMenu';
import TextInputField from './TextInputField';
import TextOutputField from './TextOutputField';

const initialState = {
  unitInput: defaultUnit,
  altitudeInput: '',
  ovenTempInput: '',
  ovenTempOutput: '',
  bakingTimeInput: '',
  bakingTimeOutput: '',
  liquidInput: '',
  liquidOutput: '',
  flourInput: '',
  flourOutput: '',
  sugarInput: '',
  sugarOutput: '',
  bakingPowderInput: '',
  bakingPowderOutput: '',
  yeastInput: '',
  yeastOutput: ''
};

const CalculatorForm = () => {
  const dispatch = useDispatch();

  const [
    {
      unitInput,
      altitudeInput,
      ovenTempInput,
      ovenTempOutput,
      bakingTimeInput,
      bakingTimeOutput,
      liquidInput,
      liquidOutput,
      flourInput,
      flourOutput,
      sugarInput,
      sugarOutput,
      bakingPowderInput,
      bakingPowderOutput,
      yeastInput,
      yeastOutput
    },
    setState
  ] = useState(initialState);

  const clearState = () => {
    setState({ ...initialState });
  };

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
    clearState();

    // Set defaults in Redux
    dispatch(clearForm());
  };

  // Setting the temp outputLabel
  const handleCalculatePressed = event => {
    event.preventDefault();
  };

  const onChange = event => {
    const { name, value } = event.target;

    setState(prevState => {
      return { ...prevState, [name]: value };
    });
  };

  const ovenTempInputState = useSelector(state => state.calculationForm.ovenTempSet);

  useEffect(() => {
    // setState(prevState => return { ...prevState, ovenTempOutput: ovenTempInputState });
    setState(prevState => {
      return { ...prevState, ovenTempOutput: ovenTempInputState };
    });
  }, [ovenTempInputState]);

  return (
    <div className="ui basic segment">
      <div className="ui two column centered grid">
        <div className="ui segment">
          <form className="ui large form error">
            <div className="column">
              {/* Units */}
              <div className="two fields">
                <DropdownMenu
                  labelText="Units"
                  name={'unitInput'}
                  value={unitInput}
                  optionDataSource={unitDataSource}
                  onChange={onChange}
                />
                {/* Altitude */}
                <TextInputField
                  name={'altitudeInput'}
                  type="number"
                  value={altitudeInput}
                  handleOnChange={onChange}
                  label={`Altitude ${altitudeUnitLabel}`}
                  min={0}
                />
              </div>
              {/* Oven temp */}
              <div className="four fields">
                <TextInputField
                  name={'ovenTempInput'}
                  type="number"
                  value={ovenTempInput}
                  handleOnChange={onChange}
                  label={`Oven temp ${ovenTempUnitLabel}`}
                  min={0}
                />
                <TextOutputField
                  name={'ovenTempOutput'}
                  type="text"
                  value={ovenTempOutput}
                  handleOnChange={onChange}
                  label={`Adjusted Oven temp ${ovenTempUnitLabel} `}
                  min={0}
                />
                {/* Baking time */}
                <TextInputField
                  name={'bakingTimeInput'}
                  type="number"
                  value={bakingTimeInput}
                  handleOnChange={onChange}
                  label="Baking Time"
                  min={0}
                />
                <TextOutputField
                  name={'bakingTimeOutput'}
                  type="number"
                  value={bakingTimeOutput}
                  handleOnChange={onChange}
                  label="Adjusted Baking Time"
                  min={0}
                />
              </div>
              {/* Liquids */}
              <div className="four fields">
                <TextInputField
                  name={'liquidInput'}
                  type="number"
                  value={liquidInput}
                  handleOnChange={onChange}
                  label={`Liquids`}
                  min={0}
                />
                <TextOutputField
                  name={'liquidOutput'}
                  type="number"
                  value={liquidOutput}
                  handleOnChange={onChange}
                  label={`Adjusted Liquids`}
                  min={0}
                />

                {/* Flour */}

                <TextInputField
                  name={'flourInput'}
                  type="number"
                  value={flourInput}
                  handleOnChange={onChange}
                  label={`Flour`}
                  min={0}
                />
                <TextOutputField
                  name={'flourOutput'}
                  type="number"
                  value={flourOutput}
                  handleOnChange={onChange}
                  label={`Adjusted Flour`}
                  min={0}
                />
              </div>
              {/* Sugar */}
              <div className="four fields">
                <TextInputField
                  name={'sugarInput'}
                  type="number"
                  value={sugarInput}
                  handleOnChange={onChange}
                  label={`Sugar`}
                  min={0}
                />
                <TextOutputField
                  name={'sugarOutput'}
                  type="number"
                  value={sugarOutput}
                  handleOnChange={onChange}
                  label={`Adjusted Sugar`}
                  min={0}
                />

                {/* {Yeast} */}
                <TextInputField
                  name={'yeastInput'}
                  type="number"
                  value={yeastInput}
                  handleOnChange={onChange}
                  label={`Yeast`}
                  min={0}
                />
                <TextOutputField
                  name={'yeastOutput'}
                  type="number"
                  value={yeastOutput}
                  handleOnChange={onChange}
                  label={`Adjusted Yeast`}
                  min={0}
                />
              </div>
              {/* Yeast */}
              <div className="two fields">
                <TextInputField
                  name={'bakingPowderInput'}
                  type="number"
                  value={bakingPowderInput}
                  handleOnChange={onChange}
                  label={`Baking Powder`}
                  min={0}
                />
                <TextOutputField
                  name={'bakingPowderOutput'}
                  type="number"
                  value={bakingPowderOutput}
                  handleOnChange={onChange}
                  label={`Adjusted Baking Powder`}
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

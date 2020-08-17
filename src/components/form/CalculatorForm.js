/**
 * React imports
 */

// eslint-disable-next-line
import React, { useState, useEffect, useCallback } from 'react';

import { defaultUnit } from '../../constants';

/**
 * Redux imports
 */
import { clearForm, calculateOutputs } from '../../actions';
import { useDispatch, useSelector } from 'react-redux';

/**
 * Component imports
 */
import DropdownMenu from './DropdownMenu';
import TextInputField from './TextInputField';
import TextOutputField from './TextOutputField';
import BakingMinsInput from './BakingMinsInput';
import BakingHoursInput from './BakingHoursInput';

/**
 * Constants
 */

const initialState = {
  unitInput: defaultUnit,
  altitudeInput: '',
  ovenTempInput: '',
  ovenTempOutput: '',
  bakingTimeInput: '',
  bakingMinsInput: '',
  bakingHoursInput: '',
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

const unitDataSource = [
  { label: 'Metric', value: 'metric' },
  { label: 'Customary', value: 'customary' }
];

const CalculatorForm = () => {
  const dispatch = useDispatch();

  const [
    {
      unitInput,
      altitudeInput,
      ovenTempInput,
      ovenTempOutput,
      // bakingTimeInput,
      bakingHoursInput,
      bakingMinsInput,
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

  /**
   * Setting the altude label
   */
  const unit = useSelector(state => state.calculationForm.unit);
  const altitudeUnitLabel = unit === 'metric' ? '(m)' : '(ft)';
  const ovenTempUnitLabel = unit === 'metric' ? '(C)' : '(F)';

  const { displayTemp, bakingPowderCalc, yeastCalc } = useSelector(
    state => state.calculationOutput
  );
  useEffect(() => {
    setState(prevState => {
      return {
        ...prevState,
        ovenTempOutput: displayTemp || '',
        bakingPowderOutput: bakingPowderCalc || '',
        yeastOutput: yeastCalc || ''
      };
    });
  }, [displayTemp, bakingPowderCalc, yeastCalc]);

  const clearState = () => {
    setState({ ...initialState });
  };

  const handleClearPressed = event => {
    event.preventDefault();

    // Set defaults in component state
    clearState();

    // Set defaults in Redux state
    dispatch(clearForm());
  };

  /**
   * Calculating outputs
   */
  const handleCalculatePressed = event => {
    event.preventDefault();

    // dispatch(calculateTemp());
    dispatch(calculateOutputs());
  };

  /**
   * Handling input changes.
   */

  const onChange = event => {
    const { name, value } = event.target;

    setState(prevState => {
      return { ...prevState, [name]: value };
    });
  };

  return (
    <div className="ui basic segment">
      <div className="ui two column centered grid">
        <div className="ui segment">
          <form className="ui large form error">
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
              />
            </div>

            {/* Oven temp */}
            <div className="five fields">
              <TextInputField
                name={'ovenTempInput'}
                value={ovenTempInput}
                handleOnChange={onChange}
                label={`Oven temp ${ovenTempUnitLabel}`}
                width={'four wide'}
              />
              <TextOutputField
                name={'ovenTempOutput'}
                type="text"
                value={ovenTempOutput}
                handleOnChange={onChange}
                label={`Temp adjusted `}
                min={0}
                width={'four wide'}
              />
              {/* Baking time */}
              <BakingMinsInput value={bakingMinsInput} handleOnChange={onChange} />
              <BakingHoursInput value={bakingHoursInput} handleOnChange={onChange} />

              <TextOutputField
                name={'bakingTimeOutput'}
                type="number"
                value={bakingTimeOutput}
                handleOnChange={onChange}
                label="Time adjusted"
                min={0}
                width={'four wide'}
              />
            </div>

            {/* Liquids */}
            <div className="four fields">
              <TextInputField
                name={'liquidInput'}
                value={liquidInput}
                handleOnChange={onChange}
                label={`Liquids`}
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
                value={flourInput}
                handleOnChange={onChange}
                label={`Flour`}
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
                value={sugarInput}
                handleOnChange={onChange}
                label={`Sugar`}
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
                value={yeastInput}
                handleOnChange={onChange}
                label={`Yeast`}
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
            {/* Baking powder */}
            <div className="two fields">
              <TextInputField
                name={'bakingPowderInput'}
                value={bakingPowderInput}
                handleOnChange={onChange}
                label={`Baking Powder (tsp)`}
              />
              <TextOutputField
                name={'bakingPowderOutput'}
                type="number"
                value={bakingPowderOutput}
                handleOnChange={onChange}
                label={`Adjusted Baking Powder (tsp )`}
                min={0}
              />
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

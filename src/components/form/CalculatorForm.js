/**
 * React imports
 */

// eslint-disable-next-line
import React, { useState, useEffect, useCallback } from 'react';

import { defaultUnit } from '../../constants';

/**
 * Redux imports
 */
import { clearForm, calculateOutputs, handleInput } from '../../actions';
import { useDispatch, useSelector } from 'react-redux';

/**
 * Component imports
 */
import DropdownMenu from './DropdownMenu';
import TextInputField from './TextInputField';
import TextOutputField from './TextOutputField';
import BakingMinsInput from './BakingMinsInput';
import BakingHoursInput from './BakingHoursInput';
import CupsInput from './CupsInput';
import TablespoonInput from './TablespoonInput';

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
  liquidsInput: '',
  liquidsOutput: '',
  flourInput: '',
  flourCupsInput: '',
  flourTbspInput: '',
  flourPartialCupInput: '',
  flourOutput: '',
  sugarCupsInput: '',
  sugarTbspInput: '',
  sugarPartialCupInput: '',
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

const partialCupDropDownDataSource = [
  { label: '-', value: '' },
  { label: '1/4', value: 0.25 },
  { label: '1/3', value: 0.33333 },
  { label: '1/2', value: 0.5 },
  { label: '2/3', value: 0.66666 }
];

const CalculatorForm = () => {
  const dispatch = useDispatch();

  const [
    {
      unitInput,
      altitudeInput,
      ovenTempInput,
      ovenTempOutput,
      bakingHoursInput,
      bakingMinsInput,
      bakingTimeOutput,
      liquidsInput,
      liquidsOutput,
      flourCupsInput,
      flourTbspInput,
      flourPartialCupInput,
      flourOutput,
      sugarCupsInput,
      sugarTbspInput,
      sugarPartialCupInput,
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

  /**
   * Displaying outputs.
   * First, we destructure our state in order to use the values to populate our output fields
   * Next, we take those values and use them to populate our component state's output fields
   */

  // Destructure displays state objects
  const {
    displayTemp,
    bakingPowderCalc,
    yeastCalc,
    displayTime,
    displayFlour,
    displayLiquids,
    displaySugar
  } = useSelector(state => state.calculationOutput);

  // Populate output fields.
  useEffect(() => {
    setState(prevState => {
      return {
        ...prevState,
        ovenTempOutput: displayTemp || '',
        bakingPowderOutput: bakingPowderCalc || '',
        yeastOutput: yeastCalc || '',
        bakingTimeOutput: displayTime || '',
        flourOutput: displayFlour || '',
        liquidsOutput: displayLiquids || '',
        sugarOutput: displaySugar || ''
      };
    });
  }, [
    displayTemp,
    bakingPowderCalc,
    yeastCalc,
    displayTime,
    displayFlour,
    displayLiquids,
    displaySugar
  ]);

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

    let safeValue = value ? value : 0;

    dispatch(handleInput(name, safeValue));
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
              <BakingHoursInput value={bakingHoursInput} handleOnChange={onChange} />
              <BakingMinsInput value={bakingMinsInput} handleOnChange={onChange} />

              <TextOutputField
                name={'bakingTimeOutput'}
                type="text"
                value={bakingTimeOutput}
                handleOnChange={onChange}
                label="Time adjusted"
                min={0}
                width={'four wide'}
              />
            </div>

            {/* Flour */}
            <div className="four fields">
              <CupsInput
                label={'Flour (C)'}
                name="flourCupsInput"
                value={flourCupsInput}
                handleOnChange={onChange}
              />

              <DropdownMenu
                labelText="Fraction"
                name="flourPartialCupInput"
                value={flourPartialCupInput}
                optionDataSource={partialCupDropDownDataSource}
                onChange={onChange}
              />
              <TablespoonInput
                label={'Flour (T)'}
                name="flourTbspInput"
                value={flourTbspInput}
                handleOnChange={onChange}
              />

              <TextOutputField
                name={'flourOutput'}
                type="text"
                value={flourOutput}
                handleOnChange={onChange}
                label={`Flour to add`}
                min={0}
              />

              {/* Liquids */}
              <TextInputField
                name={'liquidsInput'}
                value={liquidsInput}
                handleOnChange={onChange}
                label={`Liquids`}
              />
              <TextOutputField
                name={'liquidsOutput'}
                type="text"
                value={liquidsOutput}
                handleOnChange={onChange}
                label={`Liquids to add`}
                min={0}
              />
            </div>
            {/* Baking Powder */}

            <div className="four fields">
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
                label={`Baking Powder (total)`}
                min={0}
              />

              {/* Yeast */}
              <TextInputField
                name={'yeastInput'}
                value={yeastInput}
                handleOnChange={onChange}
                label={`Yeast (tsp)`}
              />
              <TextOutputField
                name={'yeastOutput'}
                type="number"
                value={yeastOutput}
                handleOnChange={onChange}
                label={`Adjusted Yeast (tsp)`}
                min={0}
              />
            </div>
            {/* Sugar */}
            <div className="six fields">
              <CupsInput
                label={'Sugar (C)'}
                name="sugarCupsInput"
                value={sugarCupsInput}
                handleOnChange={onChange}
              />

              <DropdownMenu
                labelText="Fraction"
                name="sugarPartialCupInput"
                value={sugarPartialCupInput}
                optionDataSource={partialCupDropDownDataSource}
                onChange={onChange}
              />

              <TablespoonInput
                label={'Sugar (T)'}
                name="sugarTbspInput"
                value={sugarTbspInput}
                handleOnChange={onChange}
              />

              <TextOutputField
                name={'sugarOutput'}
                type="text"
                value={sugarOutput}
                handleOnChange={onChange}
                label={`Adjusted Sugar`}
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

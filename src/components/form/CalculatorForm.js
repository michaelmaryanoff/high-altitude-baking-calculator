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
import TeaspoonInputField from './TeaspoonInput';

/**
 * Constants
 */

const initialState = {
  unitFieldEnabled: false,
  unitInput: defaultUnit,
  altitudeInput: '',
  ovenTempInput: '',
  ovenTempOutput: '',
  bakingTimeInput: '',
  bakingMinsInput: '',
  bakingHoursInput: '',
  bakingTimeOutput: '',
  liquidCupsInput: '',
  liquidPartialCupInput: '',
  liquidTbspInput: '',
  liquidOutput: '',
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
  bakingPowderTspInput: '',
  bakingPowderPartialTspInput: '',
  bakingPowderOutput: '',
  yeastInput: '',
  yeastTspInput: '',
  yeastPartialTspInput: '',
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

const partialTspDropDownDataSource = [
  { label: '-', value: '' },
  { label: '1/4', value: 0.25 },
  { label: '1/2', value: 0.5 },
  { label: '3/4', value: 0.75 }
];

const CalculatorForm = () => {
  const dispatch = useDispatch();

  const [
    {
      // Unit field is temporarily disabled until we create a method for caclulating metric units.
      // This is a bool that will determine whether to show or hide the units.
      unitFieldEnabled,
      unitInput,
      altitudeInput,
      ovenTempInput,
      ovenTempOutput,
      bakingHoursInput,
      bakingMinsInput,
      bakingTimeOutput,
      liquidCupsInput,
      liquidPartialCupInput,
      liquidTbspInput,
      liquidOutput,
      flourCupsInput,
      flourTbspInput,
      flourPartialCupInput,
      flourOutput,
      sugarCupsInput,
      sugarTbspInput,
      sugarPartialCupInput,
      sugarOutput,
      bakingPowderTspInput,
      bakingPowderPartialTspInput,
      bakingPowderOutput,
      yeastTspInput,
      yeastPartialTspInput,
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
    displayLiquid,
    displayYeast,
    displaySugar,
    displayBakingPowder
  } = useSelector(state => state.calculationOutput);

  // Populate output fields.
  useEffect(() => {
    setState(prevState => {
      return {
        ...prevState,
        ovenTempOutput: displayTemp || '',
        bakingPowderOutput: displayBakingPowder || '',
        yeastOutput: displayYeast || '',
        bakingTimeOutput: displayTime || '',
        flourOutput: displayFlour || '',
        liquidOutput: displayLiquid || '',
        sugarOutput: displaySugar || ''
      };
    });
  }, [
    displayTemp,
    bakingPowderCalc,
    yeastCalc,
    displayTime,
    displayFlour,
    displayLiquid,
    displaySugar,
    displayYeast,
    displayBakingPowder
  ]);

  const clearState = () => {
    console.log('initialState: ', initialState);
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
   * Handling input changes.
   */

  const onChange = event => {
    const regexp = /^[0-9\b]+$/;
    const { name, value } = event.target;

    let safeValue = value ? value : 0;

    if (safeValue === '' || regexp.test(safeValue)) {
      dispatch(handleInput(name, safeValue));
      setState(prevState => {
        return { ...prevState, [name]: value };
      });
    }
  };
  const dropdownOnChange = event => {
    const { name, value } = event.target;

    let safeValue = value ? value : 0;

    dispatch(handleInput(name, safeValue));
    setState(prevState => {
      return { ...prevState, [name]: value };
    });
  };

  /**
   * Calculating outputs
   */
  const handleOnSubmit = event => {
    event.preventDefault();

    dispatch(calculateOutputs());
  };

  return (
    <div className="ui basic segment">
      <div className="ui two column centered grid">
        <div className="ui segment">
          <form className="ui large form error" id="caulculation-form" onSubmit={handleOnSubmit}>
            {/* Units */}
            {unitFieldEnabled ? (
              <DropdownMenu
                label="Units"
                name={'unitInput'}
                value={unitInput}
                optionDataSource={unitDataSource}
                onChange={onChange}
              />
            ) : null}
            {/* Altitude */}
            <TextInputField
              name={'altitudeInput'}
              type="number"
              value={altitudeInput}
              handleOnChange={onChange}
              label={`Altitude ${altitudeUnitLabel}`}
            />

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
                value={ovenTempOutput}
                handleOnChange={onChange}
                label={`Temp adjusted `}
                width={'four wide'}
              />
              {/* Baking time */}
              <BakingHoursInput value={bakingHoursInput} handleOnChange={onChange} />
              <BakingMinsInput value={bakingMinsInput} handleOnChange={onChange} />

              <TextOutputField
                name={'bakingTimeOutput'}
                value={bakingTimeOutput}
                handleOnChange={onChange}
                label="Time adjusted"
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
                label="Fraction"
                name="flourPartialCupInput"
                value={flourPartialCupInput}
                optionDataSource={partialCupDropDownDataSource}
                onChange={dropdownOnChange}
              />
              <TablespoonInput
                label={'Flour (T)'}
                name="flourTbspInput"
                value={flourTbspInput}
                handleOnChange={onChange}
              />

              <TextOutputField
                name={'flourOutput'}
                value={flourOutput}
                handleOnChange={onChange}
                label={`Flour Adjusted`}
              />

              {/* Liquid */}
              <CupsInput
                label={'Liquids (C)'}
                name="liquidCupsInput"
                value={liquidCupsInput}
                handleOnChange={onChange}
              />

              <DropdownMenu
                label={'Fraction'}
                name="liquidPartialCupInput"
                value={liquidPartialCupInput}
                optionDataSource={partialCupDropDownDataSource}
                onChange={dropdownOnChange}
              />

              <TablespoonInput
                label={'Liquids (T)'}
                name="liquidTbspInput"
                value={liquidTbspInput}
                handleOnChange={onChange}
              />

              <TextOutputField
                name={'liquidOutput'}
                value={liquidOutput}
                handleOnChange={onChange}
                label={`Liquids to add`}
              />
            </div>
            {/* Baking Powder */}

            <div className="four fields">
              <TeaspoonInputField
                label={`Baking Powder (tsp)`}
                name="bakingPowderTspInput"
                value={bakingPowderTspInput}
                handleOnChange={onChange}
              />
              <DropdownMenu
                label="Fraction"
                name="bakingPowderPartialTspInput"
                value={bakingPowderPartialTspInput}
                optionDataSource={partialTspDropDownDataSource}
                onChange={dropdownOnChange}
              />
              <TextOutputField
                name={'bakingPowderOutput'}
                value={bakingPowderOutput}
                handleOnChange={onChange}
                label={`Baking Powder (total)`}
              />

              {/* Yeast */}
              <TeaspoonInputField
                label={`Yeast (tsp)`}
                name="yeastTspInput"
                value={yeastTspInput}
                handleOnChange={onChange}
              />

              <DropdownMenu
                label="Fraction"
                name="yeastPartialTspInput"
                value={yeastPartialTspInput}
                optionDataSource={partialTspDropDownDataSource}
                onChange={dropdownOnChange}
              />
              <TextOutputField
                name={'yeastOutput'}
                value={yeastOutput}
                handleOnChange={onChange}
                label={`Adjusted Yeast (tsp)`}
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
                label="Fraction"
                name="sugarPartialCupInput"
                value={sugarPartialCupInput}
                optionDataSource={partialCupDropDownDataSource}
                onChange={dropdownOnChange}
              />
              <TablespoonInput
                label={'Sugar (T)'}
                name="sugarTbspInput"
                value={sugarTbspInput}
                handleOnChange={onChange}
              />
              <TextOutputField
                name={'sugarOutput'}
                value={sugarOutput}
                handleOnChange={onChange}
                label={`Adjusted Sugar`}
              />
            </div>

            <p />
            <button
              className="ui red button"
              label="Clear"
              type="button"
              onClick={handleClearPressed}
            >
              Clear
            </button>
            <button className="ui primary button" label="Calculate" type="submit">
              Calculate
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CalculatorForm;

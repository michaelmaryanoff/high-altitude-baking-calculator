/**
 * React imports
 */

import React, { useState, useEffect } from 'react';

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
import CupsInput from './CupsInput';
import TablespoonInput from './TablespoonInput';
import TeaspoonInputField from './TeaspoonInput';
import BakingTempField from './BakingTempField';
import BakingTimeField from './BakingTimeField';
import CupsAndTbspField from './CupsAndTbspField';

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
        <div className="centered center aligned row">
          <div className="ui six column centered grid">
            <div className="center aligned column">
              <div className="ui compact segment">
                <label className="ui top attached large purple label">Altitude</label>
                <TextInputField
                  name={'altitudeInput'}
                  type="number"
                  value={altitudeInput}
                  handleOnChange={onChange}
                  label={`Feet above sea level`}
                  width="four"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="center aligned row">
          <div className="ui five column centered grid">
            <BakingTempField
              inputValue={ovenTempInput}
              outputValue={ovenTempOutput}
              handleOnChange={onChange}
            />
            <BakingTimeField
              hoursInput={bakingHoursInput}
              minsInput={bakingMinsInput}
              output={bakingTimeOutput}
              handleOnChange={onChange}
            />

            {/* Flour */}
            <CupsAndTbspField
              cupsInputValue={flourCupsInput}
              partialCupsInputValue={flourPartialCupInput}
              tablespoonInputValue={flourTbspInput}
              outputValue={flourOutput}
              cupsFieldLabel="Cups"
              dropdownFieldLabel="Fraction"
              cupsFieldName="flourCupsInput"
              dropdownFieldName="flourPartialCupInput"
              tablespoonFieldLabel="Tbsp"
              tablespoonFieldName="flourTbspInput"
              outputFieldLabel="Adjusted"
              ouputFieldName="flourOutput"
              handleOnChange={onChange}
              handleDropdownOnChange={dropdownOnChange}
              fieldGroupLabel={'Flour'}
            />

            <CupsAndTbspField
              cupsInputValue={liquidCupsInput}
              partialCupsInputValue={liquidPartialCupInput}
              tablespoonInputValue={liquidTbspInput}
              outputValue={liquidOutput}
              cupsFieldLabel="Cups"
              dropdownFieldLabel="Fraction"
              cupsFieldName="liquidCupsInput"
              dropdownFieldName="liquidPartialCupInput"
              tablespoonFieldLabel="Tbsp"
              tablespoonFieldName="liquidTbspInput"
              outputFieldLabel="Adjusted"
              ouputFieldName="liquidOutput"
              handleOnChange={onChange}
              handleDropdownOnChange={dropdownOnChange}
              fieldGroupLabel={'Liquid'}
            />
          </div>

          {/* Liquid */}

          <CupsInput
            label={'Liquids (C)'}
            name="liquidCupsInput"
            value={liquidCupsInput}
            handleOnChange={onChange}
            width="two wide"
          />

          <DropdownMenu
            label={'Fraction'}
            name="liquidPartialCupInput"
            value={liquidPartialCupInput}
            optionDataSource={partialCupDropDownDataSource}
            onChange={dropdownOnChange}
            width="two wide"
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
        <button className="ui red button" label="Clear" type="button" onClick={handleClearPressed}>
          Clear
        </button>
        <button className="ui primary button" label="Calculate" type="submit">
          Calculate
        </button>
      </form>
    </div>
  );
};

export default CalculatorForm;

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
        <div className="centered aligned row">
          <div className="ui five column centered grid">
            <div className="center aligned column">
              <div className="ui compact segment">
                <label className="ui top attached purple label">Altitude (ft)</label>
                <TextInputField
                  name={'altitudeInput'}
                  type="number"
                  value={altitudeInput}
                  handleOnChange={onChange}
                  label={`Altitude ${altitudeUnitLabel}`}
                  width="four"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Oven temp */}
        <div classname="center aligned row">
          <div className="ui five column centered grid">
            {/* Oven temp JSX */}
            <div className="center aligned column">
              <div className="ui compact segment">
                <div className="ui four column grid">
                  <label className="ui top attached purple label">Oven temp</label>
                  <div className="row">
                    <div className="sixteen wide column">
                      <TextInputField
                        name={'ovenTempInput'}
                        value={ovenTempInput}
                        handleOnChange={onChange}
                        label={`Original`}
                        width={''}
                      />
                    </div>
                  </div>
                  <div className="sixteen wide column">
                    <div className="row">
                      <TextOutputField
                        name={'ovenTempOutput'}
                        value={ovenTempOutput}
                        handleOnChange={onChange}
                        label={`Adjusted `}
                        width={''}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Baking time */}
            <div className="center aligned column">
              <div className="ui compact segment">
                <div className="ui four column grid">
                  <label className="ui top attached purple label">Baking time</label>
                  <div className="row">
                    <div className="eight wide column">
                      <BakingHoursInput
                        value={bakingHoursInput}
                        handleOnChange={onChange}
                        width=""
                      />
                    </div>
                    <div className="eight wide column">
                      <BakingMinsInput value={bakingMinsInput} handleOnChange={onChange} width="" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="sixteen wide column">
                      <TextOutputField
                        name={'bakingTimeOutput'}
                        value={bakingTimeOutput}
                        handleOnChange={onChange}
                        label="Adjusted time"
                        width={''}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Flour */}
        <div className="four fields">
          <CupsInput
            label={'Flour (C)'}
            name="flourCupsInput"
            value={flourCupsInput}
            handleOnChange={onChange}
            width="two wide"
          />

          <DropdownMenu
            label="Fraction"
            name="flourPartialCupInput"
            value={flourPartialCupInput}
            optionDataSource={partialCupDropDownDataSource}
            onChange={dropdownOnChange}
            width="two wide"
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

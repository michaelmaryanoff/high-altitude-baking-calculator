/**
 * React imports
 */
import React, { useState, useEffect } from 'react';

/**
 * Redux imports
 */
import { clearForm, calculateOutputs, handleCustomaryInput } from '../../actions';
import { useDispatch, useSelector } from 'react-redux';

/**
 * Component imports
 */
import BakingTempField from './BakingTempField';
import BakingTimeField from './BakingTimeField';
import CupsAndTbspField from './CupsAndTbspField';
import TspField from './TspField';
import FieldRow from './FieldRow';
import ClearButton from './ClearButton';
import CalculateButton from './CalculateButton';
import ButtonWrapper from './ButtonWrapper';
import AltitudeField from './AltitudeField';

/**
 * Constants
 */

const initialState = {
  altitudeInputCustomary: '',
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

  yeastTspInput: '',
  yeastPartialTspInput: '',
  yeastOutput: ''
};

const CustomaryCalcForm = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearForm());
  }, [dispatch]);

  const [
    {
      // Unit field is temporarily disabled until we create a method for caclulating metric units.
      // This is a bool that will determine whether to show or hide the units.
      altitudeInputCustomary,
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
      dispatch(handleCustomaryInput(name, safeValue));
      setState(prevState => {
        return { ...prevState, [name]: value };
      });
    }
  };
  const dropdownOnChange = event => {
    const { name, value } = event.target;

    let safeValue = value ? value : 0;

    dispatch(handleCustomaryInput(name, safeValue));
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
    <div>
      <div className="ui basic segment">
        <form
          className="ui large form error"
          id="customary-caulculation-form"
          onSubmit={handleOnSubmit}
        >
          <AltitudeField
            altitudeInput={altitudeInputCustomary}
            onChange={onChange}
            name="altitudeInputCustomary"
          />
          <FieldRow>
            <BakingTempField
              inputValue={ovenTempInput}
              outputValue={ovenTempOutput}
              handleOnChange={onChange}
              unitLabel="(F)"
              name="ovenTempInput"
            />

            <BakingTimeField
              hoursInput={bakingHoursInput}
              minsInput={bakingMinsInput}
              output={bakingTimeOutput}
              handleOnChange={onChange}
            />
          </FieldRow>
          <FieldRow>
            <CupsAndTbspField
              cupsInputValue={flourCupsInput}
              partialCupsInputValue={flourPartialCupInput}
              tablespoonInputValue={flourTbspInput}
              outputValue={flourOutput}
              cupsFieldName="flourCupsInput"
              dropdownFieldName="flourPartialCupInput"
              tablespoonFieldName="flourTbspInput"
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
              cupsFieldName="liquidCupsInput"
              dropdownFieldName="liquidPartialCupInput"
              tablespoonFieldName="liquidTbspInput"
              ouputFieldName="liquidOutput"
              handleOnChange={onChange}
              handleDropdownOnChange={dropdownOnChange}
              fieldGroupLabel={'Liquid'}
            />
          </FieldRow>

          <FieldRow>
            <CupsAndTbspField
              cupsInputValue={sugarCupsInput}
              partialCupsInputValue={sugarPartialCupInput}
              tablespoonInputValue={sugarTbspInput}
              outputValue={sugarOutput}
              cupsFieldName="sugarCupsInput"
              dropdownFieldName="sugarPartialCupInput"
              tablespoonFieldName="sugarTbspInput"
              ouputFieldName="sugarOutput"
              handleOnChange={onChange}
              handleDropdownOnChange={dropdownOnChange}
              fieldGroupLabel={'Sugar'}
            />
            <TspField
              label="Baking Powder / Soda"
              tspInputValue={bakingPowderTspInput}
              dropdownMenuValue={bakingPowderPartialTspInput}
              tspInputName="bakingPowderTspInput"
              outputName="bakingPowderOutput"
              dropdownName="bakingPowderPartialTspInput"
              output={bakingPowderOutput}
              handleOnChange={onChange}
              handleDropdownOnChange={dropdownOnChange}
            />
          </FieldRow>
          <FieldRow>
            <TspField
              label="Yeast"
              tspInputValue={yeastTspInput}
              dropdownMenuValue={yeastPartialTspInput}
              tspInputName="yeastTspInput"
              outputName="yeastOutput"
              dropdownName="yeastPartialTspInput"
              output={yeastOutput}
              handleOnChange={onChange}
              handleDropdownOnChange={dropdownOnChange}
            />
          </FieldRow>

          <ButtonWrapper>
            <ClearButton onClick={handleClearPressed} />
            <CalculateButton />
          </ButtonWrapper>
        </form>
      </div>
    </div>
  );
};

export default CustomaryCalcForm;

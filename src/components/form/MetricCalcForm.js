import React, { useState, useEffect } from 'react';
import AltitudeField from './AltitudeField';

import { useDispatch, useSelector } from 'react-redux';

import { handleMetricInput, clearForm } from '../../actions';

import BakingTempField from './BakingTempField';
import FieldRow from '../form/FieldRow';
import BakingTimeField from './BakingTimeField';
import ButtonWrapper from './ButtonWrapper';
import ClearButton from './ClearButton';
import CalculateButton from './CalculateButton';
import GramField from './GramField';

const initialState = {
  altitudeInputMetric: '',
  ovenTempInputCelcius: '',
  bakingTimeInput: '',
  bakingMinsInput: '',
  bakingHoursInput: '',
  liquidInputGrams: '',
  flourInputGrams: '',
  sugarInputGrams: '',
  bakingPowderInputGrams: '',
  yeastInputGrams: '',
  bakingTimeOutput: '',
  liquidOutputGrams: '',
  flourOutputGrams: '',
  sugarOutputGrams: '',
  bakingPowderOutputGrams: '',
  yeastOutputGrams: '',
  ovenTempOutputCelsius: ''
};

const MetricCalcForm = () => {
  const dispatch = useDispatch();

  const [
    {
      altitudeInputMetric,
      ovenTempInputCelcius,
      bakingTimeInput,
      bakingMinsInput,
      bakingHoursInput,
      liquidInputGrams,
      flourInputGrams,
      sugarInputGrams,
      bakingPowderInputGrams,
      yeastInputGrams,
      bakingTimeOutput,
      liquidOutputGrams,
      flourOutputGrams,
      sugarOutputGrams,
      bakingPowderOutputGrams,
      yeastOutputGrams
    },
    setState
  ] = useState(initialState);

  /**
   * Displaying outputs.
   * First, we destructure our state in order to use the values to populate our output fields
   * Next, we take those values and use them to populate our component state's output fields
   */
  const {
    displayTempCelsius,
    displayFlourGrams,
    displaySugarGrams,
    displayYeastGrams,
    displayTime,
    displayBakingPowderGrams,
    displayLiquidGrams
  } = useSelector(state => state.calculationOutputMetric);

  useEffect(() => {
    setState(prevState => {
      return {
        ...prevState,
        bakingTimeOutput: displayTime || '',
        liquidOutputGrams: displayLiquidGrams || '',
        flourOutputGrams: displayFlourGrams || '',
        sugarOutputGrams: displaySugarGrams || '',
        bakingPowderOutputGrams: displayBakingPowderGrams || '',
        yeastOutputGrams: displayYeastGrams || '',
        ovenTempOutputCelsius: displayTempCelsius || ''
      };
    });
  }, [
    displayTempCelsius,
    displayFlourGrams,
    displaySugarGrams,
    displayYeastGrams,
    displayTime,
    displayBakingPowderGrams,
    displayLiquidGrams
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

  const onChange = event => {
    const regexp = /^[0-9\b]+$/;
    const { name, value } = event.target;

    let safeValue = value ? value : 0;

    if (safeValue === '' || regexp.test(safeValue)) {
      dispatch(handleMetricInput(name, safeValue));
      setState(prevState => {
        return { ...prevState, [name]: value };
      });
    }
  };

  const handleOnSubmit = event => {
    event.preventDefault();
  };

  return (
    <form className="ui large form error" id="metric-calculation-form" onSubmit={handleOnSubmit}>
      <div className="ui basic segment">
        <AltitudeField
          altitudeInput={altitudeInputMetric}
          onChange={onChange}
          name="altitudeInputMetric"
        />
        <FieldRow>
          <BakingTempField
            unitLabel="(C)"
            inputValue={ovenTempInputCelcius}
            handleOnChange={onChange}
            name="ovenTempInputCelcius"
          />
          <BakingTimeField
            hoursInput={bakingHoursInput}
            minsInput={bakingMinsInput}
            outputValue={bakingTimeOutput}
            handleOnChange={onChange}
          />
        </FieldRow>
        <FieldRow>
          <GramField
            label="Four (grams)"
            inputName="flourInputGrams"
            inputValue={flourInputGrams}
            outputName="flourOutputGrams"
            handleOnChange={onChange}
            outputValue={flourOutputGrams}
          />
        </FieldRow>
      </div>
      <ButtonWrapper>
        <ClearButton onClick={handleClearPressed} />
        <CalculateButton />
      </ButtonWrapper>
    </form>
  );
};

export default MetricCalcForm;

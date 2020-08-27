import React, { useState, useEffect } from 'react';
import AltitudeField from './AltitudeField';

import { useDispatch, useSelector } from 'react-redux';

import { handleMetricInput } from '../../actions';

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
    <div className="ui large form error">
      <div className="ui basic segment" id="metric-calculation-form" onSubmit={handleOnSubmit}>
        <AltitudeField
          altitudeInput={altitudeInputMetric}
          onChange={onChange}
          name="altitudeInputMetric"
        />
      </div>
    </div>
  );
};

export default MetricCalcForm;

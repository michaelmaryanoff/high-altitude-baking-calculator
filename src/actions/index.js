import {
  SELECT_UNIT,
  CLEAR_FORM,
  SET_ALTITUDE,
  SET_OVEN_TEMP,
  SET_LIQUIDS,
  SET_FLOUR,
  SET_SUGAR,
  SET_BAKING_POWDER,
  SET_YEAST,
  SET_BAKING_TIME,
  CALCULATE_MIN_OVEN_TEMP,
  CALCULATE_MAX_OVEN_TEMP,
  SET_DISPLAY_TEMP
} from './types';

// Output actions
export const ovenTempForDisplay = () => (dispatch, getState) => {
  const state = getState();

  const { minOvenTempCalc, maxOvenTempCalc } = state.calculationOutput;

  const ovenTempForDisplay = `${minOvenTempCalc} - ${maxOvenTempCalc}`;

  dispatch({ type: SET_DISPLAY_TEMP, payload: ovenTempForDisplay });
};

export const calculateTemp = inputTemp => dispatch => {
  dispatch(calculateMinTemp(inputTemp));
  dispatch(calculateMaxTemp(inputTemp));
  dispatch(ovenTempForDisplay());
};

export const calculateMaxTemp = input => (dispatch, getState) => {
  const state = getState();

  const tempToAddCustomary = 25;
  const tempToAddMetric = 14;

  const { unit } = state.calculationForm;
  const { ovenTempSet } = state.calculationForm;

  if (unit === 'customary') {
    let maxTemp = parseInt(ovenTempSet) + tempToAddCustomary;
    dispatch({ type: CALCULATE_MAX_OVEN_TEMP, payload: maxTemp });
  } else if (unit === 'metric') {
    let maxTemp = parseInt(ovenTempSet) + tempToAddMetric;
    dispatch({ type: CALCULATE_MAX_OVEN_TEMP, payload: maxTemp });
  }
};

export const calculateMinTemp = input => (dispatch, getState) => {
  const state = getState();

  const tempToAddCustomary = 15;
  const tempToAddMetric = 8;

  const { unit } = state.calculationForm;
  const { ovenTempSet } = state.calculationForm;

  if (unit === 'customary') {
    let minTemp = parseInt(ovenTempSet) + tempToAddCustomary;
    dispatch({ type: CALCULATE_MIN_OVEN_TEMP, payload: minTemp });
  } else if (unit === 'metric') {
    let minTemp = parseInt(ovenTempSet) + tempToAddMetric;
    dispatch({ type: CALCULATE_MIN_OVEN_TEMP, payload: minTemp });
  }
};

export const handleInput = (inputId, inputValue) => dispatch => {
  const functionNames = {
    unitInput,
    altitudeInput,
    ovenTempInput,
    bakingTimeInput,
    liquidsInput,
    flourInput,
    sugarInput,
    bakingPowderInput,
    yeastInput
  };

  dispatch(functionNames[inputId](inputValue));
};

export const unitInput = selectedUnit => {
  return { type: SELECT_UNIT, payload: selectedUnit };
};

export const altitudeInput = altitude => {
  return { type: SET_ALTITUDE, payload: altitude };
};

export const ovenTempInput = ovenTemp => {
  return { type: SET_OVEN_TEMP, payload: ovenTemp };
};

export const bakingTimeInput = bakingTime => {
  return { type: SET_BAKING_TIME, payload: bakingTime };
};

export const liquidsInput = liquidAmount => {
  return { type: SET_LIQUIDS, payload: liquidAmount };
};
export const flourInput = flourAmount => {
  return { type: SET_FLOUR, payload: flourAmount };
};

export const sugarInput = sugarAmount => {
  return { type: SET_SUGAR, payload: sugarAmount };
};

export const bakingPowderInput = bakingPowderAmount => {
  return { type: SET_BAKING_POWDER, payload: bakingPowderAmount };
};

export const yeastInput = yeastAmount => {
  return { type: SET_YEAST, payload: yeastAmount };
};

// Form actions
export const clearForm = () => {
  return { type: CLEAR_FORM };
};

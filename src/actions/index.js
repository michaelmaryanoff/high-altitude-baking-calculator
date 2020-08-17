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
  SET_BAKING_MINS,
  SET_BAKING_HOURS,
  CALCULATE_MIN_OVEN_TEMP,
  CALCULATE_MAX_OVEN_TEMP,
  CALCULATE_MIN_TIME,
  CALCULATE_MAX_TIME,
  CALCULATE_BAKING_POWDER,
  SET_DISPLAY_TEMP,
  CALCULATE_YEAST,
  SET_DISPLAY_TIME
} from './types';

/**
 * @summary
 * This group of functions calculates our outputs to the user
 */

export const calculateOutputs = () => dispatch => {
  dispatch(calculateBakingPowder());
  dispatch(calculateTemp());
  dispatch(calculateBakingPowder());
  dispatch(calculateMinTemp());
  dispatch(calculateYeast());
  dispatch(createBakingTimeLabel());
};

export const createBakingTimeLabel = () => (dispatch, getState) => {
  dispatch(calculateBakingTime());

  const state = getState();

  const { minTimeCalc, maxTimeCalc } = state.calculationOutput;

  if (minTimeCalc && maxTimeCalc) {
    let maxHours = Math.floor(maxTimeCalc / 60);
    let maxMinutes = Math.floor(maxTimeCalc % 60);
    let maxTimeForDisplay = `${maxHours} hr ${maxMinutes} mins`;

    let minHours = Math.floor(minTimeCalc / 60);
    let minMinutes = Math.floor(minTimeCalc % 60);
    let minTimeForDisplay = `${minHours} hr ${minMinutes} mins`;

    let finalTimeForDisplay = `${minTimeForDisplay} - ${maxTimeForDisplay}`;

    dispatch({ type: SET_DISPLAY_TIME, payload: finalTimeForDisplay });
  }
};

export const calculateBakingTime = () => (dispatch, getState) => {
  const state = getState();
  const { bakingMinsSet, bakingHoursSet, altitude } = state.calculationForm;

  let bakingMinsToInt = bakingMinsSet ? parseInt(bakingMinsSet) : 0;
  let bakingHoursToInt = bakingHoursSet ? parseInt(bakingHoursSet) : 0;

  console.log('bakingMinsToInt', bakingMinsToInt);

  const hoursToMins = bakingHoursToInt * 60;
  const totalBakingTimeInput = hoursToMins + bakingMinsToInt;

  let lowerRangeBakingTime = totalBakingTimeInput * 0.7;
  let upperRangeBakingTime = totalBakingTimeInput * 0.8;

  if (altitude >= 3500) {
    dispatch({ type: CALCULATE_MIN_TIME, payload: lowerRangeBakingTime });
    dispatch({ type: CALCULATE_MAX_TIME, payload: upperRangeBakingTime });
  } else {
    dispatch({ type: CALCULATE_MIN_TIME, payload: totalBakingTimeInput });
    dispatch({ type: CALCULATE_MAX_TIME, payload: totalBakingTimeInput });
  }
};

export const calculateYeast = () => (dispatch, getState) => {
  const state = getState();
  const { yeastSet, altitude } = state.calculationForm;

  if (altitude < 3500) {
    dispatch({ type: CALCULATE_YEAST, payload: yeastSet });
  } else {
    dispatch({ type: CALCULATE_YEAST, payload: yeastSet * 0.75 });
  }
};

export const calculateBakingPowder = () => (dispatch, getState) => {
  const state = getState();
  const { bakingPowderSet, altitude } = state.calculationForm;

  if (altitude < 3500) {
    dispatch({ type: CALCULATE_BAKING_POWDER, payload: bakingPowderSet });
  } else if (altitude >= 3500 && altitude < 5000) {
    return dispatch({ type: CALCULATE_BAKING_POWDER, payload: bakingPowderSet * 0.8 });
  } else if (altitude >= 5000 && altitude < 6500) {
    return dispatch({ type: CALCULATE_BAKING_POWDER, payload: bakingPowderSet * 0.5 });
  } else if (altitude >= 6500) {
    return dispatch({ type: CALCULATE_BAKING_POWDER, payload: bakingPowderSet * 0.25 });
  }
};

export const ovenTempForDisplay = () => (dispatch, getState) => {
  const state = getState();

  const { ovenTempSet } = state.calculationForm;

  const { minOvenTempCalc, maxOvenTempCalc } = state.calculationOutput;

  const ovenTempForDisplay = `${minOvenTempCalc} - ${maxOvenTempCalc}`;

  if (ovenTempSet > 0) {
    dispatch({ type: SET_DISPLAY_TEMP, payload: ovenTempForDisplay });
  }
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

/**
 * @summary
 * This group of functions handles our inputs and adds them to our redux state.
 *
 */
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
    yeastInput,
    bakingMinsInput,
    bakingHoursInput
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

export const bakingMinsInput = bakingMins => {
  return { type: SET_BAKING_MINS, payload: bakingMins };
};

export const bakingHoursInput = bakingHours => {
  return { type: SET_BAKING_HOURS, payload: bakingHours };
};

/**
 * @summary
 * These actions are used to deal with non-input form functions
 */
export const clearForm = () => {
  return { type: CLEAR_FORM };
};

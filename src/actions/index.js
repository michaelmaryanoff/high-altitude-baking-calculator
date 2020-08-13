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
  CALCULATE_MAX_OVEN_TEMP
} from './types';

import {
  unitField,
  altitudeField,
  ovenTempInputField,
  liquidInputField,
  flourInputField,
  sugarInputField,
  bakingPowderInputField,
  yeastInputField,
  bakingTimeInputField
} from '../components/form/inputTypes';

// Output actions
export const calculateTemp = inputTemp => dispatch => {
  dispatch(calculateMinTemp(inputTemp));
  dispatch(calculateMaxTemp(inputTemp));
};

export const calculateMaxTemp = inputTemp => (dispatch, getState) => {
  const state = getState();

  const { unit } = state.calculationForm;
  const { ovenTempInput } = state.calculationForm;

  if (unit === 'customary') {
    let maxTemp = parseInt(ovenTempInput) + 25;
    dispatch({ type: CALCULATE_MAX_OVEN_TEMP, payload: maxTemp });
  } else if (unit === 'metric') {
    let maxTemp = parseInt(ovenTempInput) + 14;
    dispatch({ type: CALCULATE_MAX_OVEN_TEMP, payload: maxTemp });
  }
};

export const calculateMinTemp = inputTemp => (dispatch, getState) => {
  const state = getState();

  const { unit } = state.calculationForm;
  const { ovenTempInput } = state.calculationForm;

  if (unit === 'customary') {
    let minTemp = parseInt(ovenTempInput) + 15;
    dispatch({ type: CALCULATE_MIN_OVEN_TEMP, payload: minTemp });
  } else if (unit === 'metric') {
    let minTemp = parseInt(inputTemp) + 8;
    dispatch({ type: CALCULATE_MIN_OVEN_TEMP, payload: minTemp });
  }
};

// Input actions
export const handleDropDownInput = (inputId, inputValue) => dispatch => {
  switch (inputId) {
    case unitField:
      return dispatch(selectUnit(inputValue));
    case altitudeField:
      return dispatch(modifyAltitude(inputValue));
    case ovenTempInputField:
      return dispatch(modifyOvenTemp(inputValue));
    case bakingTimeInputField:
      return dispatch(modifyBakingTime(inputValue));
    case liquidInputField:
      return dispatch(modifyLiquids(inputValue));
    case flourInputField:
      return dispatch(modifyFlour(inputValue));
    case sugarInputField:
      return dispatch(modifySugar(inputValue));
    case bakingPowderInputField:
      return dispatch(modifyBakingPowder(inputValue));
    case yeastInputField:
      return dispatch(modifyYeast(inputValue));
    default:
      return;
  }
};

export const selectUnit = selectedUnit => {
  return { type: SELECT_UNIT, payload: selectedUnit };
};

export const modifyAltitude = altitude => {
  return { type: SET_ALTITUDE, payload: altitude };
};

export const modifyOvenTemp = ovenTemp => {
  return { type: SET_OVEN_TEMP, payload: ovenTemp };
};

export const modifyBakingTime = bakingTime => {
  return { type: SET_BAKING_TIME, payload: bakingTime };
};

export const modifyLiquids = liquidAmount => {
  return { type: SET_LIQUIDS, payload: liquidAmount };
};
export const modifyFlour = flourAmount => {
  return { type: SET_FLOUR, payload: flourAmount };
};

export const modifySugar = sugarAmount => {
  return { type: SET_SUGAR, payload: sugarAmount };
};

export const modifyBakingPowder = bakingPowderAmount => {
  return { type: SET_BAKING_POWDER, payload: bakingPowderAmount };
};

export const modifyYeast = yeastAmount => {
  return { type: SET_YEAST, payload: yeastAmount };
};

// Form actions
export const clearForm = () => {
  return { type: CLEAR_FORM };
};

import {
  SELECT_UNIT,
  CLEAR_FORM,
  SET_ALTITUDE,
  SET_OVEN_TEMP,
  SET_LIQUIDS,
  SET_FLOUR,
  SET_SUGAR,
  SET_BAKING_POWDER
  SET_YEAST
} from './types';
import {
  unitField,
  altitudeField,
  ovenTempField,
  liquidInputField,
  flourInputField,
  sugarInputField,
  bakingPowderInputField,
  yeastInputField
} from '../components/form/inputTypes';

export const handleDropDownInput = (inputId, inputValue) => dispatch => {
  switch (inputId) {
    case unitField:
      return dispatch(selectUnit(inputValue));
    case altitudeField:
      return dispatch(modifyAltitude(inputValue));
    case ovenTempField:
      return dispatch(modifyOvenTemp(inputValue));
    case liquidInputField:
      return dispatch(modifyLiquids(inputValue));
    case flourInputField:
      return dispatch(modifyFlour(inputValue));
    case sugarInputField:
      return dispatch(modifySugar(inputValue));
    case bakingPowderInputField:
      return dispatch(modifyBakingPowder(inputValue));
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

export const clearForm = () => {
  return { type: CLEAR_FORM };
};

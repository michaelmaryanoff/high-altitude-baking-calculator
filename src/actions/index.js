import {
  SELECT_UNIT,
  CLEAR_FORM,
  SET_ALTITUDE,
  SET_OVEN_TEMP,
  SET_LIQUIDS,
  SET_FLOUR
} from './types';
import {
  unitField,
  altitudeField,
  ovenTempField,
  liquidInputField,
  flourInputField
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
  return { type: SET_LIQUIDS, payload: flourAmount };
};

export const clearForm = () => {
  return { type: CLEAR_FORM };
};

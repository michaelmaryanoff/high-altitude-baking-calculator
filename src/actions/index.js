import { SELECT_UNIT, CLEAR_FORM, SET_ALTITUDE, SET_OVEN_TEMP } from './types';
import { unitField, altitudeField, ovenTempField } from '../components/form/inputTypes';

export const handleDropDownInput = (inputId, inputValue) => dispatch => {
  if (inputId === unitField) {
    dispatch(selectUnit(inputValue));
  }
  if (inputId === altitudeField) {
    dispatch(modifyAltitude(inputValue));
  }
  if (inputId === ovenTempField) {
    dispatch(modifyOvenTemp(inputValue));
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

export const clearForm = () => {
  return { type: CLEAR_FORM };
};

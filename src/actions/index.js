import { SELECT_UNIT, CLEAR_FORM, SET_ALTITUDE } from './types';
import { unitField, altitudeField } from '../components/form/inputTypes';

export const handleDropDownInput = (inputId, inputValue) => dispatch => {
  if (inputId === unitField) {
    dispatch(selectUnit(inputValue));
  }
  if (inputId === altitudeField) {
    dispatch(modifyAltitude(inputValue));
  }
};

export const selectUnit = selectedUnit => {
  return { type: SELECT_UNIT, payload: selectedUnit };
};

export const modifyAltitude = altitude => {
  return { type: SET_ALTITUDE, payload: altitude };
};

export const clearForm = () => {
  return { type: CLEAR_FORM };
};

import { SELECT_UNIT, CLEAR_FORM } from './types';
import { unitField } from '../components/form/inputTypes';

export const handleDropDownInput = (inputId, inputValue) => dispatch => {
  if (inputId === unitField) {
    dispatch(selectUnit(inputValue));
  }
};

export const selectUnit = selectedUnit => {
  return { type: SELECT_UNIT, payload: selectedUnit };
};

export const clearForm = () => {
  return { type: CLEAR_FORM };
};

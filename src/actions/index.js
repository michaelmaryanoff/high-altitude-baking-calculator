import { SELECT_UNIT } from './types';

export const handleDropDownInput = (inputId, inputValue) => dispatch => {
  if (inputId === 'units') {
    dispatch(selectUnit(inputValue));
  }
};

export const selectUnit = selectedUnit => {
  return { type: SELECT_UNIT, payload: selectedUnit };
};

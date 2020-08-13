import {
  RESULTS,
  SELECT_UNIT,
  CLEAR_FORM,
  SET_ALTITUDE,
  SET_OVEN_TEMP,
  SET_LIQUIDS,
  SET_FLOUR,
  SET_SUGAR,
  SET_BAKING_POWDER
} from '../actions/types';

const INITIAL_STATE = { results: null, unit: 'metric', altitude: 0 };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SELECT_UNIT:
      return { ...state, unit: action.payload };
    case SET_ALTITUDE:
      return { ...state, altitude: action.payload };
    case SET_OVEN_TEMP:
      return { ...state, ovenTempInput: action.payload };
    case SET_LIQUIDS:
      return { ...state, liquidsInput: action.payload };
    case SET_FLOUR:
      return { ...state, flourInput: action.payload };
    case SET_SUGAR:
      return { ...state, sugarInput: action.payload };
    case SET_BAKING_POWDER:
      return { ...state, bakingPowderInput: action.payload };
    
    case CLEAR_FORM:
      return { ...state, ...INITIAL_STATE };
    case RESULTS:
      return { ...state, results: action.payload };
    default:
      return state;
  }
};

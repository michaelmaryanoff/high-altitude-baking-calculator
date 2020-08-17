import {
  CALCULATE_MIN_OVEN_TEMP,
  CALCULATE_MAX_OVEN_TEMP,
  CALCULATE_BAKING_POWDER,
  CLEAR_FORM,
  CALCULATE_YEAST,
  SET_DISPLAY_TEMP
} from '../actions/types';

const INITIAL_STATE = {
  results: null,
  yeastCalc: 0,
  bakingPowderCalc: 0,
  maxOvenTempCalc: 0,
  minOvenTempCalc: 0,
  displayTemp: ''
};

// These are calculate i.e. the high altitude version of our different ingredients, temps, etc.
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CALCULATE_MIN_OVEN_TEMP:
      return { ...state, minOvenTempCalc: action.payload };
    case CALCULATE_MAX_OVEN_TEMP:
      return { ...state, maxOvenTempCalc: action.payload };
    case CALCULATE_BAKING_POWDER:
      return { ...state, bakingPowderCalc: action.payload };
    case CALCULATE_YEAST:
      return { ...state, yeastCalc: action.payload };
    case SET_DISPLAY_TEMP:
      return { ...state, displayTemp: action.payload };
    case CLEAR_FORM:
      return { ...state, ...INITIAL_STATE };
    default:
      return state;
  }
};

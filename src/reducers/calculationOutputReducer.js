import { CALCULATE_MIN_OVEN_TEMP, CALCULATE_MAX_OVEN_TEMP } from '../actions/types';

const INITIAL_STATE = { results: null };

// These are calculate i.e. the high altitude version of our different ingredients, temps, etc.
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CALCULATE_MIN_OVEN_TEMP:
      return { ...state, minOvenTempCalc: action.payload };
    case CALCULATE_MAX_OVEN_TEMP:
      return { ...state, maxOvenTempCalc: action.payload };
    default:
      return state;
  }
};

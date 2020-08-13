import { CALCULATE_MIN_OVEN_TEMP, CALCULATE_MAX_OVEN_TEMP } from '../actions/types';

const INITIAL_STATE = { results: null };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CALCULATE_MIN_OVEN_TEMP:
      return { ...state, minOvenTempOutput: action.payload };
    case CALCULATE_MAX_OVEN_TEMP:
      return { ...state, maxOvenTempOutput: action.payload };
    default:
      return state;
  }
};

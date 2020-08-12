import { RESULTS, SELECT_UNIT, CLEAR_FORM, SET_ALTITUDE } from '../actions/types';

const INITIAL_STATE = { results: null, unit: 'metric', altitude: 0 };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SELECT_UNIT:
      return { ...state, unit: action.payload };
    case SET_ALTITUDE:
      return { ...state, altitude: action.payload };
    case CLEAR_FORM:
      return { ...state, ...INITIAL_STATE };
    case RESULTS:
      return { ...state, results: action.payload };
    default:
      return state;
  }
};

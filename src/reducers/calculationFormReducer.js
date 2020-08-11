import { RESULTS, SELECT_UNIT } from '../actions/types';

const INITIAL_STATE = { results: null, unit: 'metric' };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SELECT_UNIT:
      return { ...state, unit: action.payload };
    case RESULTS:
      return { ...state, results: action.payload };
    default:
      return state;
  }
};

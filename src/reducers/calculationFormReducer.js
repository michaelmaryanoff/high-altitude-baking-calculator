import { RESULTS } from '../actions/types';

const INITIAL_STATE = { results: null };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RESULTS:
      return { ...state, results: action.payload };
    default:
      return state;
  }
};

import { SELECT_UNIT } from '../actions/types';

import { defaultUnit } from '../constants';

const INITIAL_STATE = {
  unit: defaultUnit
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SELECT_UNIT:
      return { ...state, unit: action.payload };
    default:
      return state;
  }
};

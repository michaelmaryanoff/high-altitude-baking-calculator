import { SET_ALTITUDE_METERS, SET_OVEN_TEMP_C, CLEAR_FORM } from '../actions/metricTypes';

const INTIAL_STATE = {
  altitude: 0
};

export default (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case SET_ALTITUDE_METERS:
      return { ...state, altitude: action.payload };
    case CLEAR_FORM:
      return { ...state, ...INTIAL_STATE };
    default:
      return state;
  }
};

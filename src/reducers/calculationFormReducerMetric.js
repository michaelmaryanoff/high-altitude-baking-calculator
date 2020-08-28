import {
  SET_ALTITUDE_METERS,
  SET_OVEN_TEMP_C,
  SET_BAKING_TIME,
  SET_BAKING_MINS_METRIC,
  SET_BAKING_HOURS_METRIC,
  SET_LIQUID_GRAMS,
  SET_FLOUR_GRAMS,
  SET_SUGAR_GRAMS,
  SET_BAKING_POWDER_GRAMS,
  SET_YEAST_GRAMS,
  CLEAR_FORM
} from '../actions/metricTypes';

const INTIAL_STATE = {
  altitude: 0,
  ovenTempCelciusSet: 0,
  bakingTimeSet: 0,
  bakingMinsSet: 0,
  bakingHoursSet: 0,
  liquidGramsSet: 0,
  flourGramsSet: 0,
  sugarGramsSet: 0,
  bakingPowderGramsSet: 0,
  yeastGramsSet: 0
};

export default (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case SET_ALTITUDE_METERS:
      return { ...state, altitude: action.payload };
    case SET_OVEN_TEMP_C:
      return { ...state, ovenTempCelciusSet: action.payload };
    case SET_BAKING_TIME:
      return { ...state, bakingTimeSet: action.payload };
    case SET_BAKING_MINS_METRIC:
      return { ...state, bakingMinsSet: action.payload };
    case SET_BAKING_HOURS_METRIC:
      return { ...state, bakingHoursSet: action.payload };
    case SET_LIQUID_GRAMS:
      return { ...state, liquidGramsSet: action.payload };
    case SET_FLOUR_GRAMS:
      return { ...state, flourGramsSet: action.payload };
    case SET_SUGAR_GRAMS:
      return { ...state, sugarGramsSet: action.payload };
    case SET_BAKING_POWDER_GRAMS:
      return { ...state, bakingPowderGramsSet: action.payload };
    case SET_YEAST_GRAMS:
      return { ...state, yeastGramsSet: action.payload };
    case CLEAR_FORM:
      return { ...state, ...INTIAL_STATE };
    default:
      return state;
  }
};

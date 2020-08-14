import {
  SELECT_UNIT,
  CLEAR_FORM,
  SET_ALTITUDE,
  SET_OVEN_TEMP,
  SET_LIQUIDS,
  SET_FLOUR,
  SET_SUGAR,
  SET_BAKING_POWDER,
  SET_YEAST,
  SET_BAKING_TIME
} from '../actions/types';

import { defaultUnit } from '../constants';

// Any varible that contains "Set" is set by the user
const INITIAL_STATE = { results: null, unit: defaultUnit, altitude: 0, ovenTempSet: 0 };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SELECT_UNIT:
      return { ...state, unit: action.payload };
    case SET_ALTITUDE:
      return { ...state, altitude: action.payload };
    case SET_OVEN_TEMP:
      return { ...state, ovenTempSet: action.payload };
    case SET_BAKING_TIME:
      return { ...state, bakingTimeSet: action.payload };
    case SET_LIQUIDS:
      return { ...state, liquidsSet: action.payload };
    case SET_FLOUR:
      return { ...state, flourSet: action.payload };
    case SET_SUGAR:
      return { ...state, sugarSet: action.payload };
    case SET_BAKING_POWDER:
      return { ...state, bakingPowderSet: action.payload };
    case SET_YEAST:
      return { ...state, yeastSet: action.payload };
    case CLEAR_FORM:
      return { ...state, ...INITIAL_STATE };
    default:
      return state;
  }
};

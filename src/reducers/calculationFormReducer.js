import {
  SELECT_UNIT,
  CLEAR_FORM,
  SET_ALTITUDE,
  SET_OVEN_TEMP,
  SET_LIQUIDS,
  SET_FLOUR,
  SET_BAKING_POWDER,
  SET_YEAST,
  SET_BAKING_TIME,
  SET_BAKING_MINS,
  SET_BAKING_HOURS,
  SET_FLOUR_CUPS,
  SET_FLOUR_TBSP,
  SET_SUGAR_CUPS,
  SET_SUGAR_TBSP,
  SET_SUGAR_PARTIAL_CUP,
  SET_SUGAR_TOTAL
} from '../actions/types';

import { defaultUnit } from '../constants';

// Any varible that contains "Set" is set by the user
const INITIAL_STATE = {
  results: null,
  unit: defaultUnit,
  altitude: 0,
  ovenTempSet: 0,
  displayTemp: 0,
  bakingTimeSet: 0,
  bakingMinsSet: 0,
  bakingHoursSet: 0,
  liquidsSet: 0,
  flourSet: 0,
  flourCupsSet: 0,
  flourTbspSet: 0,
  sugarCupsSet: 0,
  sugarTbspSet: 0,
  sugarPartialCupSet: '',
  sugarTotalSet: 0,
  sugarSet: 0,
  bakingPowderSet: 0,
  yeastSet: 0
};

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
    case SET_BAKING_MINS:
      return { ...state, bakingMinsSet: action.payload };
    case SET_BAKING_HOURS:
      return { ...state, bakingHoursSet: action.payload };
    case SET_LIQUIDS:
      return { ...state, liquidsSet: action.payload };
    case SET_FLOUR:
      return { ...state, flourSet: action.payload };
    case SET_FLOUR_CUPS:
      return { ...state, flourCupsSet: action.payload };
    case SET_FLOUR_TBSP:
      return { ...state, flourTbspSet: action.payload };
    case SET_SUGAR_CUPS:
      return { ...state, sugarCupsSet: action.payload };
    case SET_SUGAR_TBSP:
      return { ...state, sugarTbspSet: action.payload };
    case SET_SUGAR_PARTIAL_CUP:
      return { ...state, sugarPartialCupSet: action.payload };
    case SET_SUGAR_TOTAL:
      return { ...state, sugarTotalSet: action.payload };
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

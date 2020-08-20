import {
  SELECT_UNIT,
  CLEAR_FORM,
  SET_ALTITUDE,
  SET_OVEN_TEMP,
  SET_FLOUR,
  SET_BAKING_POWDER,
  SET_YEAST,
  SET_BAKING_TIME,
  SET_BAKING_MINS,
  SET_BAKING_HOURS,
  SET_FLOUR_CUPS,
  SET_FLOUR_TBSP,
  SET_FLOUR_PARTIAL_CUP,
  SET_FLOUR_TOTAL,
  SET_SUGAR_CUPS,
  SET_SUGAR_TBSP,
  SET_SUGAR_PARTIAL_CUP,
  SET_SUGAR_TOTAL,
  SET_LIQUID_PARTIAL_CUP,
  SET_LIQUID_CUPS,
  SET_LIQUID_TBSP,
  SET_LIQUID_TOTAL,
  SET_BAKING_POWDER_TSP,
  SET_BAKING_POWDER_PARTIAL_TSP,
  SET_YEAST_TSP,
  SET_YEAST_PARTIAL_TSP
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
  liquidCupsSet: 0,
  liquidPartialCupSet: 0,
  liquidTbspSet: 0,
  liquidTotalSet: 0,
  flourSet: 0,
  flourCupsSet: 0,
  flourTbspSet: 0,
  flourPartialCupSet: '',
  flourTotalSet: 0,
  sugarCupsSet: 0,
  sugarTbspSet: 0,
  sugarPartialCupSet: '',
  sugarTotalSet: 0,
  sugarSet: 0,
  bakingPowderSet: 0,
  bakingPowderTspSet: 0,
  bakingPowderPartialTspSet: 0,
  yeastSet: 0,
  yeastTspSet: 0,
  yeastPartialTspSet: 0
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
    case SET_LIQUID_CUPS:
      return { ...state, liquidCupsSet: action.payload };
    case SET_LIQUID_PARTIAL_CUP:
      return { ...state, liquidPartialCupSet: action.payload };
    case SET_LIQUID_TBSP:
      return { ...state, liquidTbspSet: action.payload };
    case SET_LIQUID_TOTAL:
      return { ...state, liquidTotalSet: action.payload };
    case SET_FLOUR:
      return { ...state, flourSet: action.payload };
    case SET_FLOUR_CUPS:
      return { ...state, flourCupsSet: action.payload };
    case SET_FLOUR_TBSP:
      return { ...state, flourTbspSet: action.payload };
    case SET_FLOUR_PARTIAL_CUP:
      return { ...state, flourPartialCupSet: action.payload };
    case SET_FLOUR_TOTAL:
      return { ...state, flourTotalSet: action.payload };
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
    case SET_BAKING_POWDER_TSP:
      return { ...state, bakingPowderTspSet: action.payload };
    case SET_BAKING_POWDER_PARTIAL_TSP:
      return { ...state, bakingPowderPartialTspSet: action.payload };
    case SET_YEAST:
      return { ...state, yeastSet: action.payload };
    case SET_YEAST_TSP:
      return { ...state, yeastTspSet: action.payload };
    case SET_YEAST_PARTIAL_TSP:
      return { ...state, yeastPartialTspSet: action.payload };

    case CLEAR_FORM:
      return { ...state, ...INITIAL_STATE };
    default:
      return state;
  }
};

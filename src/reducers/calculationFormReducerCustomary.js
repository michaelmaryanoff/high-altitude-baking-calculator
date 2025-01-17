import {
  CLEAR_FORM,
  SET_ALTITUDE_FEET,
  SET_OVEN_TEMP_F,
  SET_BAKING_MINS_CUST,
  SET_BAKING_HOURS_CUST,
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
  SET_BAKING_POWDER_TOTAL,
  SET_BAKING_SODA_TSP,
  SET_BAKING_SODA_PARTIAL_TSP,
  SET_BAKING_SODA_TOTAL,
  SET_YEAST_TSP,
  SET_YEAST_PARTIAL_TSP,
  SET_YEAST_TOTAL
} from '../actions/types';

// Any varible that contains "Set" is set by the user
const INITIAL_STATE = {
  altitude: 0,
  ovenTempFarenSet: 0,
  bakingMinsSetCust: 0,
  bakingHoursSetCust: 0,
  liquidCupsSet: 0,
  liquidPartialCupSet: 0,
  liquidTbspSet: 0,
  liquidTotalSetCust: 0,
  flourCupsSet: 0,
  flourTbspSet: 0,
  flourPartialCupSet: '',
  flourTotalSetCust: 0,
  sugarCupsSet: 0,
  sugarTbspSet: 0,
  sugarPartialCupSet: '',
  sugarTotalSetCust: 0,
  bakingPowderTspSet: 0,
  bakingPowderPartialTspSet: 0,
  bakingSodaTspSet: 0,
  bakingSodaPartialTspSet: 0,
  yeastTspSet: 0,
  yeastPartialTspSet: 0,
  bakingPowderTotalSetCust: 0,
  yeastTotalSetCust: 0,
  bakingSodaTotalSetCust: 0
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_ALTITUDE_FEET:
      return { ...state, altitude: action.payload };
    case SET_OVEN_TEMP_F:
      return { ...state, ovenTempFarenSet: action.payload };
    case SET_BAKING_MINS_CUST:
      return { ...state, bakingMinsSetCust: action.payload };
    case SET_BAKING_HOURS_CUST:
      return { ...state, bakingHoursSetCust: action.payload };
    case SET_LIQUID_CUPS:
      return { ...state, liquidCupsSet: action.payload };
    case SET_LIQUID_PARTIAL_CUP:
      return { ...state, liquidPartialCupSet: action.payload };
    case SET_LIQUID_TBSP:
      return { ...state, liquidTbspSet: action.payload };
    case SET_LIQUID_TOTAL:
      return { ...state, liquidTotalSetCust: action.payload };
    case SET_FLOUR_CUPS:
      return { ...state, flourCupsSet: action.payload };
    case SET_FLOUR_TBSP:
      return { ...state, flourTbspSet: action.payload };
    case SET_FLOUR_PARTIAL_CUP:
      return { ...state, flourPartialCupSet: action.payload };
    case SET_FLOUR_TOTAL:
      return { ...state, flourTotalSetCust: action.payload };
    case SET_SUGAR_CUPS:
      return { ...state, sugarCupsSet: action.payload };
    case SET_SUGAR_TBSP:
      return { ...state, sugarTbspSet: action.payload };
    case SET_SUGAR_PARTIAL_CUP:
      return { ...state, sugarPartialCupSet: action.payload };
    case SET_SUGAR_TOTAL:
      return { ...state, sugarTotalSetCust: action.payload };
    case SET_BAKING_POWDER_TSP:
      return { ...state, bakingPowderTspSet: action.payload };
    case SET_BAKING_POWDER_PARTIAL_TSP:
      return { ...state, bakingPowderPartialTspSet: action.payload };
    case SET_BAKING_POWDER_TOTAL:
      return { ...state, bakingPowderTotalSetCust: action.payload };
    case SET_BAKING_SODA_TSP:
      return { ...state, bakingSodaTspSet: action.payload };
    case SET_BAKING_SODA_PARTIAL_TSP:
      return { ...state, bakingSodaPartialTspSet: action.payload };
    case SET_BAKING_SODA_TOTAL:
      return { ...state, bakingSodaTotalSetCust: action.payload };
    case SET_YEAST_TSP:
      return { ...state, yeastTspSet: action.payload };
    case SET_YEAST_PARTIAL_TSP:
      return { ...state, yeastPartialTspSet: action.payload };
    case SET_YEAST_TOTAL:
      return { ...state, yeastTotalSetCust: action.payload };
    case CLEAR_FORM:
      return { ...state, ...INITIAL_STATE };
    default:
      return state;
  }
};

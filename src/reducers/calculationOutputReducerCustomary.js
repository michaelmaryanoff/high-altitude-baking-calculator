import {
  CALCULATE_MIN_OVEN_TEMP_CUST,
  CALCULATE_MAX_OVEN_TEMP_CUST,
  CALCULATE_MIN_TIME_CUST,
  CALCULATE_MAX_TIME_CUST,
  CALCULATE_BAKING_POWDER_CUST,
  CALCULATE_BAKING_SODA_CUST,
  CALCULATE_YEAST_CUST,
  CALCULATE_FLOUR_CUST,
  CALCULATE_MIN_LIQUID_CUST,
  CALCULATE_MAX_LIQUID_CUST,
  CALCULATE_SUGAR_CUST,
  SET_DISPLAY_TEMP_CUST,
  SET_DISPLAY_TIME_CUST,
  SET_DISPLAY_FLOUR_CUST,
  SET_DISPLAY_LIQUID_CUST,
  SET_DISPLAY_SUGAR_CUST,
  SET_DISPLAY_YEAST_CUST,
  SET_DISPLAY_BAKING_POWDER_CUST,
  SET_DISPLAY_BAKING_SODA_CUST,
  CLEAR_FORM
} from '../actions/types';

const INITIAL_STATE = {
  yeastCalc: 0,
  bakingPowderCalc: 0,
  bakingSodaCalc: 0,
  maxOvenTempCalc: 0,
  minOvenTempCalc: 0,
  minTimeCalc: 0,
  maxTimeCalc: 0,
  flourCalc: 0,
  minLiquidCalc: 0,
  maxLiquidCalc: 0,
  sugarCalc: 0,
  displayLiquid: '',
  displayTemp: '',
  displayFlour: '',
  displaySugar: '',
  displayYeast: '',
  displayTime: '',
  displayBakingPowder: '',
  displayBakingSoda: ''
};

// These are the calculated ingredients i.e. the high altitude version of our different ingredients, temps, etc.
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CALCULATE_MIN_OVEN_TEMP_CUST:
      return { ...state, minOvenTempCalc: action.payload };
    case CALCULATE_MAX_OVEN_TEMP_CUST:
      return { ...state, maxOvenTempCalc: action.payload };
    case CALCULATE_BAKING_POWDER_CUST:
      return { ...state, bakingPowderCalc: action.payload };
    case CALCULATE_BAKING_SODA_CUST:
      return { ...state, bakingSodaCalc: action.payload };
    case CALCULATE_YEAST_CUST:
      return { ...state, yeastCalc: action.payload };
    case CALCULATE_MIN_TIME_CUST:
      return { ...state, minTimeCalc: action.payload };
    case CALCULATE_MAX_TIME_CUST:
      return { ...state, maxTimeCalc: action.payload };
    case CALCULATE_FLOUR_CUST:
      return { ...state, flourCalc: action.payload };
    case CALCULATE_MIN_LIQUID_CUST:
      return { ...state, minLiquidCalc: action.payload };
    case CALCULATE_MAX_LIQUID_CUST:
      return { ...state, maxLiquidCalc: action.payload };
    case CALCULATE_SUGAR_CUST:
      return { ...state, sugarCalc: action.payload };
    case SET_DISPLAY_LIQUID_CUST:
      return { ...state, displayLiquid: action.payload };
    case SET_DISPLAY_FLOUR_CUST:
      return { ...state, displayFlour: action.payload };
    case SET_DISPLAY_TEMP_CUST:
      return { ...state, displayTemp: action.payload };
    case SET_DISPLAY_TIME_CUST:
      return { ...state, displayTime: action.payload };
    case SET_DISPLAY_SUGAR_CUST:
      return { ...state, displaySugar: action.payload };
    case SET_DISPLAY_YEAST_CUST:
      return { ...state, displayYeast: action.payload };
    case SET_DISPLAY_BAKING_POWDER_CUST:
      return { ...state, displayBakingPowder: action.payload };
    case SET_DISPLAY_BAKING_SODA_CUST:
      return { ...state, displayBakingSoda: action.payload };
    case CLEAR_FORM:
      return { ...state, ...INITIAL_STATE };
    default:
      return state;
  }
};

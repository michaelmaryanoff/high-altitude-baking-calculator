import {
  CALCULATE_MIN_OVEN_TEMP,
  CALCULATE_MAX_OVEN_TEMP,
  CALCULATE_BAKING_POWDER,
  CALCULATE_YEAST,
  CALCULATE_MAX_TIME,
  CALCULATE_MIN_TIME,
  CALCULATE_FLOUR,
  CALCULATE_MIN_LIQUID,
  CALCULATE_MAX_LIQUID,
  CALCULATE_SUGAR,
  SET_DISPLAY_TEMP,
  SET_DISPLAY_TIME,
  SET_DISPLAY_FLOUR,
  SET_DISPLAY_LIQUID,
  SET_DISPLAY_SUGAR,
  CLEAR_FORM,
  SET_DISPLAY_YEAST,
  SET_DISPLAY_BAKING_POWDER
} from '../actions/types';

const INITIAL_STATE = {
  results: null,
  yeastCalc: 0,
  bakingPowderCalc: 0,
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
  displayBakingPowder: ''
};

// These are calculate i.e. the high altitude version of our different ingredients, temps, etc.
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CALCULATE_MIN_OVEN_TEMP:
      return { ...state, minOvenTempCalc: action.payload };
    case CALCULATE_MAX_OVEN_TEMP:
      return { ...state, maxOvenTempCalc: action.payload };
    case CALCULATE_BAKING_POWDER:
      return { ...state, bakingPowderCalc: action.payload };
    case CALCULATE_YEAST:
      return { ...state, yeastCalc: action.payload };
    case CALCULATE_MIN_TIME:
      return { ...state, minTimeCalc: action.payload };
    case CALCULATE_MAX_TIME:
      return { ...state, maxTimeCalc: action.payload };
    case CALCULATE_FLOUR:
      return { ...state, flourCalc: action.payload };
    case CALCULATE_MIN_LIQUID:
      return { ...state, minLiquidCalc: action.payload };
    case CALCULATE_MAX_LIQUID:
      return { ...state, maxLiquidCalc: action.payload };
    case CALCULATE_SUGAR:
      return { ...state, sugarCalc: action.payload };
    case SET_DISPLAY_LIQUID:
      return { ...state, displayLiquid: action.payload };
    case SET_DISPLAY_FLOUR:
      return { ...state, displayFlour: action.payload };
    case SET_DISPLAY_TEMP:
      return { ...state, displayTemp: action.payload };
    case SET_DISPLAY_TIME:
      return { ...state, displayTime: action.payload };
    case SET_DISPLAY_SUGAR:
      return { ...state, displaySugar: action.payload };
    case SET_DISPLAY_YEAST:
      return { ...state, displayYeast: action.payload };
    case SET_DISPLAY_BAKING_POWDER:
      return { ...state, displayBakingPowder: action.payload };
    case CLEAR_FORM:
      return { ...state, ...INITIAL_STATE };
    default:
      return state;
  }
};

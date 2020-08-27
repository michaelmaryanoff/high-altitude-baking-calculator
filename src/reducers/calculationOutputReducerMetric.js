import {
  CALCULATE_MIN_OVEN_TEMP,
  CALCULATE_MAX_OVEN_TEMP,
  CALCULATE_MIN_TIME,
  CALCULATE_MAX_TIME,
  CALCULATE_BAKING_POWDER_GRAMS,
  CALCULATE_YEAST_GRAMS,
  CALCULATE_FLOUR_GRAMS,
  CALCULATE_MIN_LIQUID_GRAMS,
  CALCULATE_MAX_LIQUID_GRAMS,
  CALCULATE_SUGAR_GRAMS,
  SET_DISPLAY_TEMP_C,
  SET_DISPLAY_TIME,
  SET_DISPLAY_FLOUR_GRAMS,
  SET_DISPLAY_LIQUID_GRAMS,
  SET_DISPLAY_SUGAR_GRAMS,
  SET_DISPLAY_YEAST_GRAMS,
  SET_DISPLAY_BAKING_POWDER_GRAMS,
  CLEAR_FORM
} from '../actions/metricTypes';

const INITIAL_STATE = {
  results: null,
  minOvenTempCalc: 0,
  maxOvenTempCalc: 0,
  minTimeCalc: 0,
  maxTimeCalc: 0,
  bakingPowderGramsCalc: 0,
  yeastGramsCalc: 0,
  flourGramsCalc: 0,
  minLiquidGramsCalc: 0,
  macLiquidGramsCalc: 0,
  sugarGramsCalc: 0,
  displayTempCelsiusCalc: 0,
  displayTime: '',
  displayFlourGrams: '',
  displayLiquidGrams: '',
  displaySugarGrams: '',
  displayYeastGrams: '',
  diplayBakingPowderGrams: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CALCULATE_MIN_OVEN_TEMP:
      return { ...state, minOvenTempCalc: action.payload };
    case CALCULATE_MAX_OVEN_TEMP:
      return { ...state, maxOvenTempCalc: action.payload };
    case CALCULATE_MIN_TIME:
      return { ...state, minTimeCalc: action.payload };
    case CALCULATE_MAX_TIME:
      return { ...state, maxTimeCalc: action.payload };
    case CALCULATE_BAKING_POWDER_GRAMS:
      return { ...state, bakingPowderGramsCalc: action.payload };
    case CALCULATE_YEAST_GRAMS:
      return { ...state, yeastGramsCalc: action.payload };
    case CALCULATE_FLOUR_GRAMS:
      return { ...state, flourGramsCalc: action.payload };
    case CALCULATE_MIN_LIQUID_GRAMS:
      return { ...state, minLiquidGramsCalc: action.payload };
    case CALCULATE_MAX_LIQUID_GRAMS:
      return { ...state, macLiquidGramsCalc: action.payload };
    case CALCULATE_SUGAR_GRAMS:
      return { ...state, sugarGramsCalc: action.payload };
    case SET_DISPLAY_TEMP_C:
      return { ...state, displayTempCelsius: action.payload };
    case SET_DISPLAY_TIME:
      return { ...state, displayTime: action.payload };
    case SET_DISPLAY_FLOUR_GRAMS:
      return { ...state, displayFlourGrams: action.payload };
    case SET_DISPLAY_LIQUID_GRAMS:
      return { ...state, displayLiquidGrams: action.payload };
    case SET_DISPLAY_SUGAR_GRAMS:
      return { ...state, displaySugarGrams: action.payload };
    case SET_DISPLAY_YEAST_GRAMS:
      return { ...state, displayYeastGrams: action.payload };
    case SET_DISPLAY_BAKING_POWDER_GRAMS:
      return { ...state, diplayBakingPowderGrams: action.payload };
    case CLEAR_FORM:
      return { ...state, ...INITIAL_STATE };
    default:
      return state;
  }
};

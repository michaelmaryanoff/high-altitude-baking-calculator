import {
  SET_OVEN_TEMP_C,
  SET_ALTITUDE_METERS,
  SET_BAKING_TIME,
  SET_BAKING_MINS,
  SET_BAKING_HOURS,
  SET_LIQUID_GRAMS,
  SET_FLOUR_GRAMS,
  SET_SUGAR_GRAMS,
  SET_BAKING_POWDER_GRAMS,
  SET_YEAST_GRAMS,
  CLEAR_FORM
} from './metricTypes';

export const handleMetricInput = (inputId, inputValue) => dispatch => {
  const functionNames = {
    ovenTempInputCelcius,
    altitudeInputMetric,
    bakingTimeInput,
    bakingMinsInput,
    bakingHoursInput,
    liquidInputGrams,
    flourInputGrams,
    sugarInputGrams,
    bakingPowderInputGrams,
    yeastInputGrams
  };

  dispatch(functionNames[inputId](inputValue));
};

export const ovenTempInputCelcius = ovenTemp => {
  return { type: SET_OVEN_TEMP_C, payload: ovenTemp };
};

export const altitudeInputMetric = altitude => {
  return { type: SET_ALTITUDE_METERS, payload: altitude };
};

export const bakingTimeInput = input => {
  return { type: SET_BAKING_TIME, payload: input };
};
export const bakingMinsInput = input => {
  return { type: SET_BAKING_MINS, payload: input };
};
export const bakingHoursInput = input => {
  return { type: SET_BAKING_HOURS, payload: input };
};
export const liquidInputGrams = input => {
  return { type: SET_LIQUID_GRAMS, payload: input };
};
export const flourInputGrams = input => {
  return { type: SET_FLOUR_GRAMS, payload: input };
};
export const sugarInputGrams = input => {
  return { type: SET_SUGAR_GRAMS, payload: input };
};
export const bakingPowderInputGrams = input => {
  return { type: SET_BAKING_POWDER_GRAMS, payload: input };
};
export const yeastInputGrams = input => {
  return { type: SET_YEAST_GRAMS, payload: input };
};

export const clearForm = () => {
  return { type: CLEAR_FORM };
};

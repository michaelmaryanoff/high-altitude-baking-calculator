import {
  SET_OVEN_TEMP_C,
  SET_ALTITUDE_METERS,
  SET_BAKING_TIME,
  SET_BAKING_MINS_METRIC,
  SET_BAKING_HOURS_METRIC,
  SET_LIQUID_GRAMS,
  SET_FLOUR_GRAMS,
  SET_SUGAR_GRAMS,
  SET_BAKING_POWDER_GRAMS,
  SET_YEAST_GRAMS,
  CLEAR_FORM,
  CALCULATE_MIN_TIME_METRIC,
  CALCULATE_MAX_TIME_METRIC,
  SET_DISPLAY_TIME_METRIC,
  SET_DISPLAY_TEMP_C
} from './metricTypes';

import { calculateAdjustedBakingTime, createStringFromBakingTime } from './calculationHelpers';

import { calculateTempMetric } from './calculationHelpersMetric';

export const calculateOutputsMetric = () => dispatch => {
  dispatch(calculateBakingTimeMetric());
  dispatch(calculateOvenTempMetric());
};

export const calculateOvenTempMetric = () => (dispatch, getState) => {
  const state = getState();

  const { ovenTempCelciusSet } = state.calculationFormMetric;
  const { altitude } = state.calculationFormMetric;

  const { minTempMetric, maxTempMetric } = calculateTempMetric(ovenTempCelciusSet);

  if (altitude > 1000) {
    dispatch({ type: CALCULATE_MIN_TIME_METRIC, payload: minTempMetric });
    dispatch({ type: CALCULATE_MAX_TIME_METRIC, payload: maxTempMetric });

    const ovenTempForDisplay = `${minTempMetric} - ${maxTempMetric}`;
    if (ovenTempCelciusSet > 0) {
      dispatch({ type: SET_DISPLAY_TEMP_C, payload: ovenTempForDisplay });
    }
  } else {
    dispatch({ type: CALCULATE_MIN_TIME_METRIC, payload: ovenTempCelciusSet });
    dispatch({ type: CALCULATE_MAX_TIME_METRIC, payload: ovenTempCelciusSet });

    const ovenTempForDisplay = `${ovenTempCelciusSet}`;
    if (ovenTempCelciusSet > 0) {
      dispatch({ type: SET_DISPLAY_TEMP_C, payload: ovenTempForDisplay });
    }
  }
};

export const calculateBakingTimeMetric = () => (dispatch, getState) => {
  const state = getState();

  const { bakingHoursSetMetric, bakingMinsSetMetric, altitude } = state.calculationFormMetric;

  if (bakingMinsSetMetric || bakingHoursSetMetric) {
    const adjustedbakingTime = calculateAdjustedBakingTime(
      bakingHoursSetMetric,
      bakingMinsSetMetric,
      altitude
    );
    const { lowerRangeBakingTime, upperRangeBakingTime } = adjustedbakingTime;
    dispatch({ type: CALCULATE_MIN_TIME_METRIC, payload: lowerRangeBakingTime });
    dispatch({ type: CALCULATE_MAX_TIME_METRIC, payload: upperRangeBakingTime });

    const outputString = createStringFromBakingTime(lowerRangeBakingTime, upperRangeBakingTime);
    dispatch({ type: SET_DISPLAY_TIME_METRIC, payload: outputString });
  }
};

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
  return { type: SET_BAKING_MINS_METRIC, payload: input };
};
export const bakingHoursInput = input => {
  return { type: SET_BAKING_HOURS_METRIC, payload: input };
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

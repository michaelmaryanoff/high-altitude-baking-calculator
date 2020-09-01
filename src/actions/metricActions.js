import {
  SET_OVEN_TEMP_C,
  SET_ALTITUDE_METERS,
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
  SET_DISPLAY_TEMP_C,
  CALCULATE_FLOUR_GRAMS,
  SET_DISPLAY_FLOUR_GRAMS,
  CALCULATE_MAX_LIQUID_GRAMS,
  CALCULATE_MIN_LIQUID_GRAMS,
  SET_DISPLAY_LIQUID_GRAMS,
  CALCULATE_SUGAR_GRAMS,
  SET_DISPLAY_SUGAR_GRAMS,
  SET_BAKING_SODA_GRAMS,
  CALCULATE_BAKING_POWDER_GRAMS,
  SET_DISPLAY_BAKING_POWDER_GRAMS,
  CALCULATE_BAKING_SODA_GRAMS,
  SET_DISPLAY_BAKING_SODA_GRAMS,
  CALCULATE_YEAST_GRAMS,
  SET_DISPLAY_YEAST_GRAMS,
  CALCULATE_MIN_OVEN_TEMP_METRIC,
  CALCULATE_MAX_OVEN_TEMP_METRIC
} from './metricTypes';

// Since time is universal between metric and customary, there is no need
// To make a different calculation when units are set to metric
import { calculateAdjustedBakingTime, createStringFromBakingTime } from './calculationHelpers';

import {
  calculateTempMetric,
  calculateAdjustedFlourMetric,
  createStringFromLiquidMetric,
  calculateAdjustedSugarMetric,
  calculateAdjustedLiquidMetric,
  calculateAdjustedBakingPowderSodaMetric,
  calculateAdjustedYeastMetric,
  createStringFromGrams
} from './calculationHelpersMetric';

export const calculateOutputsMetric = () => dispatch => {
  dispatch(calculateBakingTimeMetric());
  dispatch(calculateOvenTempMetric());
  dispatch(calculateFlourMetric());
  dispatch(calculateLiquidMetric());
  dispatch(calculateSugarMetric());
  dispatch(calculateBakingPowderMetric());
  dispatch(calculateBakingSodaMetric());
  dispatch(calculateYeastMetric());
};

export const calculateYeastMetric = () => (dispatch, getState) => {
  const state = getState();

  const { yeastGramsSet, altitude } = state.calculationFormMetric;

  if (yeastGramsSet) {
    const adjustedYeastGrams = calculateAdjustedYeastMetric(yeastGramsSet, altitude);
    dispatch({ type: CALCULATE_YEAST_GRAMS, payload: adjustedYeastGrams });

    const outputString = createStringFromGrams(adjustedYeastGrams);
    dispatch({ type: SET_DISPLAY_YEAST_GRAMS, payload: outputString });
  }
};

export const calculateBakingSodaMetric = () => (dispatch, getState) => {
  const state = getState();

  const { bakingSodaGramsSet, altitude } = state.calculationFormMetric;

  if (bakingSodaGramsSet) {
    const adjustedBakingSodaGrams = calculateAdjustedBakingPowderSodaMetric(
      bakingSodaGramsSet,
      altitude
    );
    dispatch({ type: CALCULATE_BAKING_SODA_GRAMS, payload: adjustedBakingSodaGrams });

    const outputString = createStringFromGrams(adjustedBakingSodaGrams);
    dispatch({ type: SET_DISPLAY_BAKING_SODA_GRAMS, payload: outputString });
  }
};

export const calculateBakingPowderMetric = () => (dispatch, getState) => {
  const state = getState();

  const { bakingPowderGramsSet, altitude } = state.calculationFormMetric;

  if (bakingPowderGramsSet) {
    const adjustedBakingPowderGrams = calculateAdjustedBakingPowderSodaMetric(
      bakingPowderGramsSet,
      altitude
    );
    dispatch({ type: CALCULATE_BAKING_POWDER_GRAMS, payload: adjustedBakingPowderGrams });

    const outputString = createStringFromGrams(adjustedBakingPowderGrams);
    dispatch({ type: SET_DISPLAY_BAKING_POWDER_GRAMS, payload: outputString });
  }
};

export const calculateSugarMetric = () => (dispatch, getState) => {
  const state = getState();

  const { sugarGramsSet, altitude } = state.calculationFormMetric;

  if (sugarGramsSet) {
    const adjustedSugarGrams = calculateAdjustedSugarMetric(sugarGramsSet, altitude);
    dispatch({ type: CALCULATE_SUGAR_GRAMS, payload: adjustedSugarGrams });

    const outputString = createStringFromGrams(adjustedSugarGrams);
    dispatch({ type: SET_DISPLAY_SUGAR_GRAMS, payload: outputString });
  }
};

export const calculateLiquidMetric = () => (dispatch, getState) => {
  const state = getState();

  const { liquidGramsSet, altitude } = state.calculationFormMetric;

  if (liquidGramsSet) {
    const adjustedLiquidGrams = calculateAdjustedLiquidMetric(liquidGramsSet, altitude);
    dispatch({ type: CALCULATE_MIN_LIQUID_GRAMS, payload: adjustedLiquidGrams.minLiquid });
    dispatch({ type: CALCULATE_MAX_LIQUID_GRAMS, payload: adjustedLiquidGrams.maxLiquid });

    const outputString = createStringFromLiquidMetric(
      adjustedLiquidGrams.minLiquid,
      adjustedLiquidGrams.maxLiquid
    );
    dispatch({ type: SET_DISPLAY_LIQUID_GRAMS, payload: outputString });
  }
};

export const calculateFlourMetric = () => (dispatch, getState) => {
  const state = getState();

  const { flourGramsSet, altitude } = state.calculationFormMetric;

  if (flourGramsSet) {
    const adjustedFlourGrams = calculateAdjustedFlourMetric(flourGramsSet, altitude);
    dispatch({ type: CALCULATE_FLOUR_GRAMS, payload: adjustedFlourGrams });

    const outputString = createStringFromGrams(adjustedFlourGrams);
    dispatch({ type: SET_DISPLAY_FLOUR_GRAMS, payload: outputString });
  }
};

export const calculateOvenTempMetric = () => (dispatch, getState) => {
  const state = getState();

  const { ovenTempCelciusSet, altitude } = state.calculationFormMetric;

  const { minTempMetric, maxTempMetric } = calculateTempMetric(ovenTempCelciusSet);

  if (altitude > 1000) {
    dispatch({ type: CALCULATE_MIN_OVEN_TEMP_METRIC, payload: minTempMetric });
    dispatch({ type: CALCULATE_MAX_OVEN_TEMP_METRIC, payload: maxTempMetric });

    const ovenTempForDisplay = `${minTempMetric} - ${maxTempMetric}`;
    if (ovenTempCelciusSet > 0) {
      dispatch({ type: SET_DISPLAY_TEMP_C, payload: ovenTempForDisplay });
    }
  } else {
    dispatch({ type: CALCULATE_MIN_OVEN_TEMP_METRIC, payload: ovenTempCelciusSet });
    dispatch({ type: CALCULATE_MAX_OVEN_TEMP_METRIC, payload: ovenTempCelciusSet });

    const ovenTempForDisplay = `${ovenTempCelciusSet}`;
    if (ovenTempCelciusSet > 0) {
      dispatch({ type: SET_DISPLAY_TEMP_C, payload: ovenTempForDisplay });
    }
  }
};

export const calculateBakingTimeMetric = () => (dispatch, getState) => {
  const state = getState();

  const { bakingHoursSetMetric, bakingMinsSetMetric, altitude } = state.calculationFormMetric;
  const { unit } = state.globalState;

  if (bakingMinsSetMetric || bakingHoursSetMetric) {
    const adjustedbakingTime = calculateAdjustedBakingTime(
      bakingHoursSetMetric,
      bakingMinsSetMetric,
      altitude,
      unit
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
    bakingMinsInput,
    bakingHoursInput,
    liquidInputGrams,
    flourInputGrams,
    sugarInputGrams,
    bakingPowderInputGrams,
    yeastInputGrams,
    bakingSodaInputGrams
  };

  dispatch(functionNames[inputId](inputValue));
};

export const bakingSodaInputGrams = input => {
  return { type: SET_BAKING_SODA_GRAMS, payload: input };
};

export const ovenTempInputCelcius = ovenTemp => {
  return { type: SET_OVEN_TEMP_C, payload: ovenTemp };
};

export const altitudeInputMetric = altitude => {
  return { type: SET_ALTITUDE_METERS, payload: altitude };
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

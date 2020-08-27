import { SET_OVEN_TEMP_C, SET_ALTITUDE_METERS } from './metricTypes';

export const handleMetricInput = (inputId, inputValue) => dispatch => {
  const functionNames = {
    ovenTempInputCelcius,
    altitudeInputMetric
  };

  dispatch(functionNames[inputId](inputValue));
};

export const ovenTempInputCelcius = ovenTemp => {
  return { type: SET_OVEN_TEMP_C, payload: ovenTemp };
};

export const altitudeInputMetric = altitude => {
  return { type: SET_ALTITUDE_METERS, payload: altitude };
};

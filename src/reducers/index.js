import { combineReducers } from 'redux';

import calculationFormReducer from './calculationFormReducer';
import calculationOutputReducer from './calculationOutputReducer';
import calculationFormReducerMetric from './calculationFormReducerMetric';
import calculationOutputReducerMetric from './calculationOutputReducerMetric';

export default combineReducers({
  calculationForm: calculationFormReducer,
  calculationOutput: calculationOutputReducer,
  calculationFormMetric: calculationFormReducerMetric,
  calculationOutputMetric: calculationOutputReducerMetric
});

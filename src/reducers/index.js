import { combineReducers } from 'redux';

import calculationFormReducer from './calculationFormReducer';
import calculationOutputReducer from './calculationOutputReducer';
import calculationFormReducerMetric from './calculationFormReducerMetric';
import calculationOutputReducerMetric from './calculationOutputReducerMetric';
import globalStateReducer from './globalStateReducer';

export default combineReducers({
  globalState: globalStateReducer,
  calculationForm: calculationFormReducer,
  calculationFormMetric: calculationFormReducerMetric,
  calculationOutput: calculationOutputReducer,
  calculationOutputMetric: calculationOutputReducerMetric
});

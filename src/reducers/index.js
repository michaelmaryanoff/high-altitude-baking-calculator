import { combineReducers } from 'redux';

import calculationFormReducerCustomary from './calculationFormReducerCustomary';
import calculationOutputReducerCustomary from './calculationOutputReducerCustomary';
import calculationFormReducerMetric from './calculationFormReducerMetric';
import calculationOutputReducerMetric from './calculationOutputReducerMetric';
import globalStateReducer from './globalStateReducer';

export default combineReducers({
  globalState: globalStateReducer,
  calculationFormCustomary: calculationFormReducerCustomary,
  calculationOutput: calculationOutputReducerCustomary,
  calculationFormMetric: calculationFormReducerMetric,
  calculationOutputMetric: calculationOutputReducerMetric
});

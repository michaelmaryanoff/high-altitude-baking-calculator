import { combineReducers } from 'redux';

import calculationFormReducer from './calculationFormReducer'
import calculationOutputReducer from './calculationOutputReducer'

export default combineReducers({ calculationForm: calculationFormReducer, calculationOutput: calculationOutputReducer });

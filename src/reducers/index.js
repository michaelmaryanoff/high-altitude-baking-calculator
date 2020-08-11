import { combineReducers } from 'redux';

import calculationFormReducer from './calculationFormReducer'

export default combineReducers({ calculationForm: calculationFormReducer });

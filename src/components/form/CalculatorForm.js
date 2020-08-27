/**
 * React imports
 */

import React, { useState, useEffect } from 'react';

import { defaultUnit } from '../../constants';

/**
 * Redux imports
 */
import { clearForm, calculateOutputs, handleCustomaryInput } from '../../actions';
import { useDispatch, useSelector } from 'react-redux';

/**
 * Component imports
 */
import BakingTempField from './BakingTempField';
import BakingTimeField from './BakingTimeField';
import CupsAndTbspField from './CupsAndTbspField';
import TspField from './TspField';
import FieldRow from './FieldWrapper';
import ClearButton from './ClearButton';
import CalculateButton from './CalculateButton';
import ButtonWrapper from './ButtonWrapper';
import AltitudeField from './AltitudeField';

import CustomaryCalcForm from './CustomaryCalcForm';
import MetricCalcForm from './MetricCalcForm'

/**
 * Constants
 */

const initialState = {
  unitFieldEnabled: false,
  unitInput: defaultUnit,
  altitudeInput: '',
  ovenTempInput: '',
  ovenTempOutput: '',
  bakingTimeInput: '',
  bakingMinsInput: '',
  bakingHoursInput: '',
  bakingTimeOutput: '',
  liquidCupsInput: '',
  liquidPartialCupInput: '',
  liquidTbspInput: '',
  liquidOutput: '',
  flourCupsInput: '',
  flourTbspInput: '',
  flourPartialCupInput: '',
  flourOutput: '',
  sugarCupsInput: '',
  sugarTbspInput: '',
  sugarPartialCupInput: '',
  sugarOutput: '',
  bakingPowderInput: '',
  bakingPowderTspInput: '',
  bakingPowderPartialTspInput: '',
  bakingPowderOutput: '',

  yeastTspInput: '',
  yeastPartialTspInput: '',
  yeastOutput: ''
};

const CalculatorForm = () => {
  const { unit } = useSelector(state => state.calculationForm);
  return unit === 'customary' ? <CustomaryCalcForm /> : <MetricCalcForm />;
};

export default CalculatorForm;

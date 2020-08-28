/**
 * React imports
 */

import React from 'react';

/**
 * Redux imports
 */
import { useSelector } from 'react-redux';

/**
 * Component imports
 */

import CustomaryCalcForm from './CustomaryCalcForm';
import MetricCalcForm from './MetricCalcForm';

/**
 * Base calculation compoent that will render the approprate calculation form
 * depending on which units are selected by the user
 */
const CalculatorForm = () => {
  const { unit } = useSelector(state => state.globalState);
  return unit === 'customary' ? <CustomaryCalcForm /> : <MetricCalcForm />;
};

export default CalculatorForm;

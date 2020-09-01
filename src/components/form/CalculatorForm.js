import React from 'react';

import { useSelector } from 'react-redux';

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

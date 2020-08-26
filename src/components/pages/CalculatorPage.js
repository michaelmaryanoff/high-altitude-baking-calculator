import React from 'react';
import PageHeader from './PageHeader';
import CalculatorForm from '../form/CalculatorForm';

const CalculatorPage = () => {
  return (
    <div className="ui container">
      <PageHeader label="HIGH ALTITUDE BAKING CALCULATOR" />
      <CalculatorForm />
    </div>
  );
};

export default CalculatorPage;

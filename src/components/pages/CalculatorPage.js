import React from 'react';
import PageHeader from './PageHeader';
import CalculatorForm from '../form/CalculatorForm';

const CalculatorPage = () => {
  return (
    <div className="ui container">
      <PageHeader label="Welcome to the High Altitude Baking Calculator!" />
      <CalculatorForm />
    </div>
  );
};

export default CalculatorPage;

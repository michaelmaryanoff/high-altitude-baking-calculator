import React from 'react';
import PageHeader from './PageHeader';
import CalculatorForm from '../form/CalculatorForm';

const CalculatorPage = () => {
  return (
    // <div className="ui middle aligned center aligned four column grid">
    <div className="ui grid">
      <PageHeader label="Welcome to the High Altitude Baking Calculator!" />
      <CalculatorForm />
    </div>
  );
};

export default CalculatorPage;

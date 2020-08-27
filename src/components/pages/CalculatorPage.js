import React from 'react';
import PageHeader from './PageHeader';
import CalculatorForm from '../form/CalculatorForm';

import UnitForm from '../form/UnitForm';

const CalculatorPage = () => {
  return (
    <div className="ui container">
      <PageHeader label="HIGH ALTITUDE BAKING CALCULATOR" />
      <div className="ui basic segment">
        <UnitForm />
      </div>
      <CalculatorForm />
    </div>
  );
};

export default CalculatorPage;

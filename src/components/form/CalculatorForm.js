import React from 'react';
import DropdownMenu from './DropdownMenu';

const CalculatorForm = () => {
  const unitDataSource = [
    { label: 'Metric', value: 'metric' },
    { label: 'Customary', value: 'customary' }
  ];
  return (
    <div className="ui basic segment">
      <div className="ui two column centered grid">
        <div className="ui segment">
          <form className="ui large form error">
            <div className="column">
              <div className="fields">
                <DropdownMenu labelText="Units" id="units" optionDataSource={unitDataSource} />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CalculatorForm;

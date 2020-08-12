import React, { useState } from 'react';
import DropdownMenu from './DropdownMenu';
import { unitField } from '../form/inputTypes';

import { clearForm } from '../../actions';

import { useDispatch } from 'react-redux';

const CalculatorForm = () => {
  const dispatch = useDispatch();

  const [unitFieldData, setUnitFieldData] = useState('metric');

  const defaults = { unitFieldDefault: 'metric' };

  const unitDataSource = [
    { label: 'Metric', value: 'metric' },
    { label: 'Customary', value: 'customary' }
  ];

  const handleClear = event => {
    event.preventDefault();

    // Set defaults in state
    const { unitFieldDefault } = defaults;
    setUnitFieldData(unitFieldDefault);

    // Set defaults in Redux
    dispatch(clearForm());
  };

  return (
    <div className="ui basic segment">
      <div className="ui two column centered grid">
        <div className="ui segment">
          <form className="ui large form error">
            <div className="column">
              <div className="fields">
                <DropdownMenu
                  labelText="Units"
                  id={unitField}
                  value={unitFieldData}
                  optionDataSource={unitDataSource}
                  onChange={(id, value) => setUnitFieldData(value)}
                />
              </div>
            </div>
            <button className="ui primary button" onClick={handleClear}>
              Clear
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CalculatorForm;

import React, { useState } from 'react';

import FieldGroupLabel from './FieldGroupLabel';
import UnitDropdown from './UnitDropdown';

import { handleCustomaryInput } from '../../actions';

import { useDispatch } from 'react-redux';

const unitDropdownDataSource = [
  { label: 'Metric', value: 'metric' },
  { label: 'Customary', value: 'customary' }
];

const UnitField = props => {
  const dispatch = useDispatch();

  const [unitInput, setUnitInput] = useState('');

  const onDropdownChange = event => {
    const { name, value } = event.target;

    setUnitInput(value);
    dispatch(handleCustomaryInput(name, value));
  };

  return (
    <div className="ui basic segment">
      <div className="ui three column centered doubling stackable center aligned grid container">
        <div className="ui row">
          <div className="ui three column centered center aligned grid">
            <div className="center aligned ten wide column">
              <div className="ui segment">
                <FieldGroupLabel>Units</FieldGroupLabel>
                <div className="ui four column grid">
                  <div className="row">
                    <div className="sixteen wide column">
                      <UnitDropdown
                        label="Units"
                        name="unitInput"
                        optionDataSource={unitDropdownDataSource}
                        handleOnChange={onDropdownChange}
                        value={unitInput}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnitField;

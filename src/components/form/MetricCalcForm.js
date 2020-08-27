import React, { useState, useEffect } from 'react';
import AltitudeField from './AltitudeField';

import { useDispatch } from 'react-redux';

import { handleMetricInput } from '../../actions';

const initialState = {
  altitudeInputMetric: ''
};

const MetricCalcForm = () => {
  const dispatch = useDispatch();

  const [{ altitudeInputMetric }, setState] = useState(initialState);

  const onChange = event => {
    const regexp = /^[0-9\b]+$/;
    const { name, value } = event.target;

    let safeValue = value ? value : 0;

    if (safeValue === '' || regexp.test(safeValue)) {
      dispatch(handleMetricInput(name, safeValue));
      setState(prevState => {
        return { ...prevState, [name]: value };
      });
    }
  };

  const handleOnSubmit = event => {
    event.preventDefault();
  };

  return (
    <div className="ui large form error">
      <div className="ui basic segment" id="metric-calculation-form" onSubmit={handleOnSubmit}>
        <AltitudeField
          altitudeInput={altitudeInputMetric}
          onChange={onChange}
          name="altitudeInputMetric"
        />
      </div>
    </div>
  );
};

export default MetricCalcForm;

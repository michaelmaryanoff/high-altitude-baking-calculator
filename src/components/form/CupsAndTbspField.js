import React from 'react';
import { PropTypes } from 'prop-types';

import CupsInput from './CupsInput';
import DropdownMenu from './DropdownMenu';
import TablespoonInput from './TablespoonInput';
import TextOutputField from './TextOutputField';
import FieldColumn from './FieldColumn';

const partialCupDropDownDataSource = [
  { label: '-', value: '' },
  { label: '1/4', value: 0.25 },
  { label: '1/3', value: 0.33333 },
  { label: '1/2', value: 0.5 },
  { label: '2/3', value: 0.66666 }
];

const CupsAndTbspField = props => {
  return (
    <FieldColumn fieldGroupLabel={props.fieldGroupLabel}>
      <div className="transparent inverted  row">
        <div className="five wide column">
          <CupsInput
            label="Cups"
            name={props.cupsFieldName}
            value={props.cupsInputValue}
            handleOnChange={props.handleOnChange}
          />
        </div>
        <div className="six wide column">
          <DropdownMenu
            label="Fraction"
            name={props.dropdownFieldName}
            value={props.partialCupsInputValue}
            optionDataSource={partialCupDropDownDataSource}
            onChange={props.handleDropdownOnChange}
          />
        </div>
        <div className="five wide column">
          <TablespoonInput
            label="Tbsp"
            name={props.tablespoonFieldName}
            value={props.tablespoonInputValue}
            handleOnChange={props.handleOnChange}
          />
        </div>
      </div>
      <div className="row">
        <div className="sixteen wide column">
          <TextOutputField
            name={props.ouputFieldName}
            value={props.outputValue}
            handleOnChange={props.HandleOnChange}
            label={'Adjusted'}
          />
        </div>
      </div>
    </FieldColumn>
  );
};

CupsAndTbspField.propTypes = {
  cupsInputValue: PropTypes.any.isRequired,
  partialCupsInputValue: PropTypes.any.isRequired,
  tablespoonInputValue: PropTypes.any.isRequired,
  outputValue: PropTypes.any.isRequired,
  cupsFieldName: PropTypes.any.isRequired,
  dropdownFieldName: PropTypes.any.isRequired,
  tablespoonFieldName: PropTypes.any.isRequired,
  ouputFieldName: PropTypes.any.isRequired,
  handleOnChange: PropTypes.any.isRequired,
  handleDropdownOnChange: PropTypes.any.isRequired,
  fieldGroupLabel: PropTypes.any.isRequired
};

export default CupsAndTbspField;

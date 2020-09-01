import React from 'react';
import PropTypes from 'prop-types';

const ClearButton = props => {
  return (
    <button
      className="ui olive basic circular button"
      label="Clear"
      type="button"
      onClick={props.onClick}
    >
      Clear
    </button>
  );
};

ClearButton.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default ClearButton;

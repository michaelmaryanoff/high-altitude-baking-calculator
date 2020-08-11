import React from 'react';

import { connect } from 'react-redux';

import MenuItem from './MenuItem';
import RightMenuItem from './RightMenuItem';

import { withRouter } from 'react-router';

const MainMenu = props => {
  return (
    <div className="ui secondary pointing menu">
      <div className="ui container">
        <MenuItem route="/calculate" label="Calculate" />
        <MenuItem route="/about" label="About" />
        <RightMenuItem route="/contact" label="Contact" />
      </div>
    </div>
  );
};

export default withRouter(connect(null, {})(MainMenu));

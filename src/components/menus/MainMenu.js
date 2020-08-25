import React, { useEffect } from 'react';

import { connect } from 'react-redux';

import MenuItem from './MenuItem';
import RightMenuItem from './RightMenuItem';

import { withRouter } from 'react-router';

const MainMenu = props => {
  useEffect(() => {
    console.log('props.location.pathName: ', props.location.pathname);
  }, [props.location.pathname]);
  return (
    <div className="ui secondary pointing purple inverted menu">
      <div className="ui container">
        <MenuItem route="/calculate" label="Calculate" pathName={props.location.pathname} />
        <MenuItem route="/about" label="About" pathName={props.location.pathname} />
        <RightMenuItem route="/contact" label="Contact" pathName={props.location.pathname} />
      </div>
    </div>
  );
};

export default withRouter(connect(null, {})(MainMenu));

// React
import React from 'react';

//Router
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

// Redux
import { connect } from 'react-redux';

const MenuItem = props => {
  let activeClass = props.location.pathname === props.route ? 'active' : '';
  return (
    <div>
      <Link to={props.route} className={`${activeClass} header item`}>
        {props.label}
      </Link>
    </div>
  );
};

export default withRouter(connect(null, {})(MenuItem));

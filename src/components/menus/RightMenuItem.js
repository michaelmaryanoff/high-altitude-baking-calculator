// React
import React from 'react';

//Router
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

// Redux
import { connect } from 'react-redux';

const RightMenuItem = props => {
  let activeClass = props.pathName === props.route ? 'active' : '';

  return (
    <div className="right menu">
      <Link to={props.route} className={`${activeClass} header item`}>
        {props.label}
      </Link>
    </div>
  );
};

export default withRouter(RightMenuItem);

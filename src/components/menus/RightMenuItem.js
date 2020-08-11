import React from 'react';
import { Link } from 'react-router-dom';

const RightMenuItem = props => {
  return (
    <div className="right menu">
      <Link to={props.route} className="header item">
        {props.label}
      </Link>
    </div>
  );
};

export default RightMenuItem;

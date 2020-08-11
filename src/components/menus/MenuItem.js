import React from 'react';
import { Link } from 'react-router-dom';

const MenuItem = props => {
  return <div><Link to={props.route} className="header item">{props.label}</Link></div>;
};

export default MenuItem;

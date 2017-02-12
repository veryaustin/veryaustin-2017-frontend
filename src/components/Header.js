import React from 'react';
import {Link} from 'react-router';

const Header = () => {
  return(
    <header id="top_header" className="clearfix">
      <div className="wrapper">
        <Link to="/" className="logo">Austin Lauritsen</Link>
      </div> 
    </header>
  );
};

export default Header;
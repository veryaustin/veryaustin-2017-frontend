import React, {Component} from 'react';

// Footer Component
const Footer = () => {
  return(
   <footer>
     <h5>&copy; {new Date().getFullYear()} Austin Lauritsen  | Built in Nashville.
       Powered by <img src={require('../images/react_color.svg')}/> React + <img src={require('../images/redux_color.svg')}/> Redux</h5>
    </footer>
  );
};

export default Footer;
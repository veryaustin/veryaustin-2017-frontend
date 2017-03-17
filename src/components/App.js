import React, {Component, PropTypes} from 'react';
import Navigation from './Navigation';
import Footer from './Footer';

class App extends Component {
  render() {
    return(
      <div>
        <Navigation />
          {this.props.children}
        <Footer />
      </div>
    );
  }
}

//  App Prop Validation
App.propTypes = {
  children: PropTypes.object
};

export default App;
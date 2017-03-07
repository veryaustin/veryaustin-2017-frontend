import React, {Component, PropTypes} from 'react';
import Header from './Header';
import Footer from './Footer';

class App extends Component {
  render() {
    return(
      <div>
        <Header />
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
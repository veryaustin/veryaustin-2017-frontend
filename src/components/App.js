import React, {Component, PropTypes} from 'react';
import Header from './Header';

class App extends Component {
  render() {
    return(
      <div className="application">
        <Header />
        {this.props.children}
      </div>
    );
  }
}

//  App Prop Validation
App.propTypes = {
  children: PropTypes.object
};

export default App;
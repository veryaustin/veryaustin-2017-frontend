import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchHome} from '../actions/homeActions';

class Home extends Component {
 // Ajax call to get API data before the component mounts
 componentWillMount() {
   this.props.fetchHome("home");
 }

  render() {
    return(
      <div id="home">This is the New Home Component</div>
    );
  }
}

// Bind actions and dispatch them
function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchHome}, dispatch);
}

//  Home Props Validation
Home.propTypes = {
  fetchHome: PropTypes.func,
  home: PropTypes.object
};

export default connect(null, mapDispatchToProps)(Home);
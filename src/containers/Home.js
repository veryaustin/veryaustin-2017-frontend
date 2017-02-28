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
    const {name, slogan, image_url} = this.props.home;
    return(
      <div id="home">
       <h1>{name}</h1>
       <h3>{slogan}</h3>
       <img src={image_url} />
      </div>
    );
  }
}

// Map State To Props 
function mapStateToProps({home}) {
  return {home};
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
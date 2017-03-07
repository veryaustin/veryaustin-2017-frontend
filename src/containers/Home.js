import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchData} from '../actions/dataActions';
import Banner from '../components/Banner';

class Home extends Component {
  // Ajax call to get API data before the component mounts
  componentWillMount() {
    this.props.fetchHome(this.props.route.path);
  }
  render() {
    // Destructure the home object
    const {name, slogan, image_url} = this.props.home;
    return(
      <Banner name={name} slogan={slogan} image_url={image_url} right ></Banner>
    );
  }
}

// Map State To Props 
function mapStateToProps({home},) {
  return {home};
}

// Bind actions and dispatch them
function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchHome: fetchData}, dispatch);
}

//  Home Props Validation
Home.propTypes = {
  fetchHome: PropTypes.func,
  home: PropTypes.object,
  route: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
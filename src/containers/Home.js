import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchHome} from '../actions/homeActions';
import Banner from '../components/Banner';

class Home extends Component {
  // Ajax call to get API data before the component mounts
  componentWillMount() {
    this.props.fetchHome(this.props.route.path);
  }
  render() {
    // Destructure the home object
    const {title, caption, banner_url} = this.props.home;
    return(
      <Banner title={title} caption={caption} featured_image={banner_url} right/>
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
  home: PropTypes.object,
  route: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
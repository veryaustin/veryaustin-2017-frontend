import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchAbout} from '../actions/aboutActions';

class About extends Component {
  // Ajax call to get API data when the component mounts
  componentWillMount() {
    this.props.fetchAbout('about');
  }
  
  render() {
    // Destructure the about object
    const {title, intro, photo} = this.props.about;
    return (
      <div id="about">
        <h1>{title}</h1>
        <h3>{intro}</h3>
        <img src={photo} />
      </div>
    ); 
  }
}

// Map State To Props
function mapStateToProps({about}) {
  return {about};
}

// Bind the actions and dispatch them
function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchAbout}, dispatch);
}

// About Props Validation
About.propTypes = {
  fetchAbout: PropTypes.func,
  about: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(About);
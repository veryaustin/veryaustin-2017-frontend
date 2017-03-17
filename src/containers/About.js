import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchAbout} from '../actions/aboutActions';
import Banner from '../components/Banner';
import Section from '../components/Section';

class About extends Component {
  // Ajax call to get API data before the component mounts
  componentWillMount() {
    this.props.fetchAbout(this.props.route.path);
  }
  
  render() {
    // Destructure the about object
    const {title, caption, image_url, banner_url, content, resume_site_url, resume_download_url, tools } = this.props.about;
    return (
      <div>
        <Banner title={title} caption={caption} featured_image={banner_url} dark />
        <Section description={content} image_url={image_url} items={tools} primary_site_url={resume_site_url} secondary_site_url={resume_download_url} label={"Tools Of The Trade:"} primary_button={"View Resume Site"} secondary_button={"Download Resume"}/>
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
  about: PropTypes.object,
  route: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(About);
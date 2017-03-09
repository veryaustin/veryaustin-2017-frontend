import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWork} from '../actions/workActions';
import {Link} from 'react-router';
import Banner from '../components/Banner';
import Section from '../components/Section';

class Work extends Component {
  // Ajax call to get API data before the component mounts
  componentWillMount() {
    this.props.fetchWork(this.props.route.path);
  }

  // Helper function to render the various sections
  renderWork(workData) {
    const {key, title, summary, description, site_url, repo_url, image_url, tools} = workData;
    return (
      <Section key={key} title={title} summary={summary} description={description} image_url={image_url} site_url={site_url} repo_url={repo_url} tools={tools} dark/>
    );
  }

  // Map over the returned data from the action creator and format it on the page
  render() {
    // Destructure the work object
    const {title, caption, banner_url, projects} = this.props.work;
    if (!projects) {
      return (
        <div>Loading</div>
      );
    }
    return (
      <div key={title} id="work">
        <Banner title={title} banner_url = {banner_url} caption={caption} />
        {projects.map(this.renderWork)}
      </div>
    );
  }
}

// Map State To Props 
function mapStateToProps({work}) {
  return {work};
}

// Bind the actions and dispatch them
function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchWork}, dispatch);
}

// Work Props Validation
Work.propTypes = {
  fetchWork: PropTypes.func,
  work: PropTypes.object,
  route: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(Work);

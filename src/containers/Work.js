import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWork} from '../actions/workActions';
import Banner from '../components/Banner';
import Section from '../components/Section';

class Work extends Component {
  // Ajax call to get API data before the component mounts
  componentWillMount() {
    this.props.fetchWork(this.props.route.path);
  }

  // Helper function to render the various sections
  renderWork(workData) {
    const {title, summary, description, site_url, repo_url, image_url, tools} = workData;
    return (
      <Section key={title} title={title} summary={summary} description={description} image_url={image_url} site_url={site_url} repo_url={repo_url} items={tools}/>
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
      <div id="work">
        <Banner title={title} featured_image={banner_url} caption={caption} />
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
  work: React.PropTypes.shape({
    title: PropTypes.string,
    banner_url: PropTypes.string,
    caption: PropTypes.string,
    projects: PropTypes.array
  }),
  projects: PropTypes.shape({
    title: PropTypes.string, 
    summary: PropTypes.string, 
    description: PropTypes.string,
    site_url: PropTypes.string,
    repo_url: PropTypes.string, 
    image_url: PropTypes.string, 
    tools: PropTypes.array
  }),
  route: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(Work);

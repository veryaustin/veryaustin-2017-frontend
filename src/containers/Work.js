import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchData} from '../actions/dataActions';
import {Link} from 'react-router';

class Work extends Component {
  // Ajax call to get API data before the component mounts
  componentWillMount() {
    this.props.fetchWork(this.props.route.path);
  }

  // Helper function to render the various sections
  renderWork(workData) {
    const {title, summary, description, site_url, repo_url, image_url} = workData;
    return (
      <div key={title}>
        <h1><Link to={site_url}>{title}</Link></h1>
        <h3>{summary}</h3>
        <p>{description}</p>
        <img src={image_url}/>
        <button><Link to={site_url}>Visit Site</Link></button>
        <button><Link to={repo_url}>Visit Repo</Link></button>
     </div>
    );
  }

  // Map over the returned data from the action creator and format it on the page
  render() {
    // Destructure the work object
    const {title, slogan, projects} = this.props.work;
    if (!projects) {
      return (
        <div>Loading</div>
      );
    }
    return (
      <div id="work">
        <h1>{title}</h1>
        <h3>{slogan}</h3>
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
  return bindActionCreators({fetchWork: fetchData}, dispatch);
}

// Work Props Validation
Work.propTypes = {
  fetchWork: PropTypes.func,
  work: PropTypes.object,
  route: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(Work);

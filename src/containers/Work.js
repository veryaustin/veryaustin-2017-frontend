import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchPage } from "../actions/fetchActions";
import Banner from "../components/Banner";
import Section from "../components/Section";
import Loading from "../components/Loading";

class Work extends Component {
  componentDidMount() {
    this.props.fetchPage(this.props.route.path);
  }

  // Helper function to render the various sections
  renderProjects(projectData, index) {
    const {
      title,
      summary,
      description,
      site_url,
      repo_url,
      image_url,
      tools
    } = projectData;

    if (index === 0 || index % 2 === 0) {
      return (
        <Section
          key={index}
          title={title}
          caption={summary}
          description={description}
          image_url={image_url}
          primary_site_url={site_url}
          secondary_site_url={repo_url}
          items={tools}
          dark
        />
      );
    } else {
      return (
        <Section
          key={index}
          title={title}
          caption={summary}
          description={description}
          image_url={image_url}
          primary_site_url={site_url}
          secondary_site_url={repo_url}
          items={tools}
        />
      );
    }
  }

  // Map over the returned data from the action creator and format it on the page
  render() {
    // Destructure the work object & loading/error props
    const {
      work: { title, caption, banner_url, projects = [] },
      isLoading,
      hasErrored
    } = this.props;
    return (
      <div>
        {isLoading ? (
          <Loading />
        ) : (
          <div id="work">
            <Banner
              title={title}
              featured_image={banner_url}
              caption={caption}
            />
            {projects.map(this.renderProjects)}
          </div>
        )}
      </div>
    );
  }
}

// Map State To Props
const mapStateToProps = ({
  pages: { work },
  fetching: { isLoading, error }
}) => {
  return {
    work,
    isLoading,
    hasErrored: error
  };
};

// Bind the actions and dispatch them
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPage }, dispatch);
}

// Work Props Validation
Work.propTypes = {
  fetchPage: PropTypes.func,
  isLoading: PropTypes.bool,
  hasErrored: PropTypes.string,
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
    primary_url: PropTypes.string,
    secondary_url: PropTypes.string,
    image_url: PropTypes.string,
    tools: PropTypes.array
  }),
  route: PropTypes.object
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Work);

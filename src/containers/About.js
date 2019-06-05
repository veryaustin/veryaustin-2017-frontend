import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchPage } from "../actions/fetchActions";
import Banner from "../components/Banner";
import Section from "../components/Section";
import Loading from "../components/Loading";

class About extends Component {
  componentDidMount() {
    this.props.fetchPage(this.props.route.path);
  }

  render() {
    // Destructure the about object & loading/error props
    const {
      about: {
        title,
        caption,
        image_url,
        banner_url,
        content,
        resume_site_url,
        resume_download_url,
        tools
      },
      isLoading,
      hasErrored
    } = this.props;

    return (
      <div>
        {isLoading ? (
          <Loading />
        ) : (
          <div>
            <Banner
              title={title}
              caption={caption}
              featured_image={banner_url}
              dark
            />
            <Section
              description={content}
              image_url={image_url}
              items={tools}
              primary_site_url={resume_site_url}
              secondary_site_url={resume_download_url}
              label={"Tools Of The Trade:"}
              primary_site_button={"View Resume Site"}
              secondary_site_button={"Download Resume"}
            />
          </div>
        )}
      </div>
    );
  }
}

// Map State To Props
const mapStateToProps = ({
  pages: { about },
  fetching: { isLoading, error }
}) => {
  return {
    about,
    isLoading,
    hasErrored: error
  };
};

// Bind the actions and dispatch them
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchPage }, dispatch);
};

// About Props Validation
About.propTypes = {
  fetchPage: PropTypes.func,
  isLoading: PropTypes.bool,
  hasErrored: PropTypes.string,
  about: PropTypes.object,
  route: PropTypes.object
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(About);

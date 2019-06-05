import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchPage } from "../actions/fetchActions";
import Banner from "../components/Banner";
import Loading from "../components/Loading";

class Home extends Component {
  componentDidMount() {
    // this.props.getHome(this.props.route.path);
    this.props.fetchPage(this.props.route.path);
    // console.log(this.props.route.path);
  }

  render() {
    // Destructure the home object & loading/error props
    const {
      home: { title, caption, banner_url },
      isLoading,
      hasErrored
    } = this.props;

    return (
      <div>
        {this.props.isLoading ? (
          <Loading />
        ) : (
          <Banner
            title={title}
            caption={caption}
            featured_image={banner_url}
            right
          />
        )}
      </div>
    );
  }
}

// Map State To Props
const mapStateToProps = ({
  pages: { home },
  fetching: { isLoading, error }
}) => {
  return {
    home,
    isLoading,
    hasErrored: error
  };
};

// Bind actions and dispatch them
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPage }, dispatch);
}

//  Home Props Validation
Home.propTypes = {
  fetchPage: PropTypes.func,
  isLoading: PropTypes.bool,
  hasErrored: PropTypes.string,
  home: PropTypes.object,
  route: PropTypes.object
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

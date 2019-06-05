import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchPage } from "../actions/fetchActions";
import Banner from "../components/Banner";
import Grid from "../components/Grid";
import Loading from "../components/Loading";

class Contact extends Component {
  componentDidMount() {
    this.props.fetchPage(this.props.route.path);
  }

  render() {
    // Destructure the contact object
    const {
      contact: { title, caption, contactInfo },
      isLoading,
      hasErrored
    } = this.props;
    return (
      <div>
        {isLoading ? (
          <Loading />
        ) : (
          <div id="contact">
            <Banner title={title} caption={caption} />
            <Grid gridItems={contactInfo} />
          </div>
        )}
      </div>
    );
  }
}

// Map State To Props
const mapStateToProps = ({
  pages: { contact },
  fetching: { isLoading, error }
}) => {
  return {
    contact,
    isLoading,
    hasErrored: error
  };
};

// Bind the actions and dispatch them
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPage }, dispatch);
}

// Contact Props Validation
Contact.propTypes = {
  fetchPage: PropTypes.func,
  isLoading: PropTypes.bool,
  hasErrored: PropTypes.string,
  contact: PropTypes.object,
  route: PropTypes.object
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Contact);

import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchContact} from '../actions/contactActions';
import Banner from '../components/Banner';
import Grid from '../components/Grid';
import Loading from '../components/Loading';
import styled from 'styled-components';

class Contact extends Component {
  // Ajax call to get API data before the component mounts
  componentWillMount() {
    this.props.fetchContact(this.props.route.path);
  }
  
  render() {
    // Destructure the contact object
    const {title, caption, contactInfo} = this.props.contact;
    if (!contactInfo) {
      return (
        <Loading />
      );
    }
    return (
      <div id="contact">
        <Banner title={title} caption={caption} />
        <Grid gridItems={contactInfo} />
      </div>
    );
  }
}

// Map State To Props
function mapStateToProps({contact}) {
  return {contact};
}

// Bind the actions and dispatch them
function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchContact}, dispatch);
}

// Contact Props Validation
Contact.propTypes = {
  fetchContact: PropTypes.func,
  contact: PropTypes.object,
  route: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
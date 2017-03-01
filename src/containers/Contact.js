import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchContact} from '../actions/contactActions';

class Contact extends Component {
  // Ajax call to get API data before the component mounts
  componentWillMount() {
    this.props.fetchContact("contact");
  }
  
  // Helper function to render the various ways to contact
  renderContacts(contactInfoData) {
    // Destructure the contactInfo array
    const {icon_url, site_url} = contactInfoData;
    return (
      <div key={icon_url}>
        <h5>{icon_url}</h5>
        <h5>{site_url}</h5>
      </div>
    );
  }

  render() {
    // Destructure the contact object
    const {title, slogan, contactInfo} = this.props.contact;
    if (!contactInfo) {
      return (
        <div>Loading</div>
      );
    }
    return(
      <div id="contact">
        <h1>{title}</h1>
        <h3>{slogan}</h3>
        {contactInfo.map(this.renderContacts)}
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
  contact: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
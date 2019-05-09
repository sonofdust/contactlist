import React, { Component } from "react";
import PropTypes from "prop-types";

class Contact extends Component {
  state = { showContactInfo: true };
  onShowClick = () => {
    this.setState({ showContactInfo: !this.state.showContactInfo });
  };
  render() {
    const { name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;
    return (
      <div className="card card-body mb-3">
        <h4>
          {name}
          <i
            onClick={this.onShowClick}
            className={
              this.state.showContactInfo ? "fas fa-sort-down" : "fas fa-sort-up"
            }
          />
        </h4>
        {showContactInfo ? (
          <ul className="list-group">
            <li className="list-group-item">Email: {email}</li>
            <li className="list-group-item">Phone: {phone}</li>
          </ul>
        ) : null}
      </div>
    );
  }
}
Contact.propTypes = {
  contact: PropTypes.object.isRequired
};

export default Contact;

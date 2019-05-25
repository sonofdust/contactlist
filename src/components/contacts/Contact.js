import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../../context";
import axios from "axios";
import Loading from "../pages/Loading";

class Contact extends Component {
  state = { showContactInfo: true, isLoading: false };
  onShowClick = () => {
    this.setState({ showContactInfo: !this.state.showContactInfo });
  };

  onDeleteClick = async (id, dispatch) => {
    this.setState({ isLoading: true });
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      dispatch({ type: "DELETE_CONTACT", payload: id });
    } catch (e) {
      dispatch({ type: "DELETE_CONTACT", payload: id });
    }
    // dispatch({ type: "DELETE_CONTACT", payload: id });
    this.setState({ isLoading: false });
  };

  render() {
    const { id, name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;
    if (!this.state.isLoading)
      return (
        <Consumer>
          {value => {
            const { dispatch } = value;
            return (
              <div className="card card-body mb-3">
                <h4>
                  {name}
                  <i
                    onClick={this.onShowClick}
                    className={
                      this.state.showContactInfo
                        ? "fas fa-sort-down"
                        : "fas fa-sort-up"
                    }
                    style={{ cursor: "pointer" }}
                  />
                  <i
                    className="fas fa-times"
                    style={{ cursor: "pointer", float: "right", color: "red" }}
                    onClick={this.onDeleteClick.bind(this, id, dispatch)}
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
          }}
        </Consumer>
      );
    else
      return (
        <div>
          <Loading type="spokes" color="black" />
        </div>
      );
  }
}
Contact.propTypes = {
  contact: PropTypes.object.isRequired
};

export default Contact;

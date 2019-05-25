import React, { Component } from "react";
import { Consumer } from "../../context";
import TextinputGroup from "../layout/TextinputGroup";
import uuid from "uuid";
import axios from "axios";

class AddContact extends Component {
  state = { name: "", email: "", phone: "", errors: {} };
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (dispatch, e) => {
    e.preventDefault();
    const { name, email, phone } = this.state;
    const newContact = { name, email, phone };
    if (name.trim() === "") {
      this.setState({ errors: { name: "Name is required." } });
      return;
    }
    if (email.trim() === "") {
      this.setState({ errors: { email: "Email is required." } });
      return;
    }
    if (phone.trim() === "") {
      this.setState({ errors: { name: "Phone is required." } });
      return;
    }

    axios
      .post("https://jsonplaceholder.typicode.com/users", newContact)
      .then(res => {
        dispatch({
          type: "ADD_CONTACT",
          payload: { id: uuid(), name, email, phone }
        });
        this.setState({ name: "", email: "", phone: "", errors: {} });
        this.props.history.push("/");
      })
      .catch(error => {
        console.log(error);
      });
    // dispatch({
    //   type: "ADD_CONTACT",
    //   payload: { name, email, phone }
    // });

    // this.setState({ name: "", email: "", phone: "", errors: {} });
    // this.props.history.push("/");
  };

  render() {
    const { name, email, phone, errors } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Add Contact</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <TextinputGroup
                    label="Name:"
                    name="name"
                    placeholder="Enter Name..."
                    onChange={this.onChange}
                    value={name}
                    error={errors.name}
                  />
                  <TextinputGroup
                    label="Email:"
                    name="email"
                    type="email"
                    placeholder="Enter Email..."
                    onChange={this.onChange}
                    value={email}
                    error={errors.email}
                  />
                  <TextinputGroup
                    label="Phone:"
                    name="phone"
                    placeholder="Enter Phone..."
                    onChange={this.onChange}
                    value={phone}
                    error={errors.phone}
                  />
                  <input
                    type="submit"
                    value="Add Contact"
                    className="btn btn-light btn-block"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default AddContact;

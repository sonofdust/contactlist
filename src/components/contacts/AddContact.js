import React, { Component } from "react";
import { Consumer } from "../../context";
import TextinputGroup from "../layout/TextinputGroup";
import uuid from "uuid";
class AddContact extends Component {
  state = { name: "", email: "", phone: "" };
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (dispatch, e) => {
    const { name, email, phone } = this.state;
    dispatch({
      type: "ADD_CONTACT",
      payload: { id: uuid(), name, email, phone }
    });
    this.setState({ name: "", email: "", phone: "" });
    e.preventDefault();
  };

  render() {
    const { name, email, phone } = this.state;
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
                  />
                  <TextinputGroup
                    label="Email:"
                    name="email"
                    type="email"
                    placeholder="Enter Email..."
                    onChange={this.onChange}
                    value={email}
                  />
                  <TextinputGroup
                    label="Phone:"
                    name="phone"
                    placeholder="Enter Phone..."
                    onChange={this.onChange}
                    value={phone}
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

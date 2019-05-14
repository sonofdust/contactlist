import React, { Component } from "react";
import { Consumer } from "../../context";
class AddContact extends Component {
  state = { name: "", email: "", phone: "" };
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (dispatch, e) => {
    dispatch({ type: "ADD_CONTACT", payload: this.state });

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
                  <div className="form-grouup">
                    <label htmlFor="name">Name:</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control form-control-lg"
                      placeholder="Enter Name..."
                      value={name}
                      onChange={this.onChange.bind(this)}
                    />
                  </div>
                  <div className="form-grouup">
                    <label htmlFor="email">Email:</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control form-control-lg"
                      placeholder="Enter Email..."
                      value={email}
                      onChange={this.onChange.bind(this)}
                    />
                  </div>
                  <div className="form-grouup">
                    <label htmlFor="phone">Phone:</label>
                    <input
                      type="text"
                      name="phone"
                      className="form-control form-control-lg"
                      placeholder="Enter Phone..."
                      value={phone}
                      onChange={this.onChange.bind(this)}
                    />
                  </div>
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

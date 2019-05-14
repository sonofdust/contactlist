import React, { Component } from "react";
import { Consumer } from "../../context";

class AddContact extends Component {
  constructor(props) {
    super(props);
    this.nameInput = React.createRef();
    this.emailInput = React.createRef();
    this.phoneInput = React.createRef();
  }
  onSubmit = (dispatch, e) => {
    const id = new Date();

    const contact = {
      id: id,
      name: this.nameInput.current.value,
      email: this.emailInput.current.value,
      phone: this.phoneInput.current.value
    };
    dispatch({ type: "ADD_CONTACT", payload: contact });
    e.preventDefault();
  };
  static defaultProps = {
    name: "Fred Smith",
    email: "fred@gmail.com",
    phone: "123-333-4444"
  };
  render() {
    const { name, email, phone } = this.props;
    //    const { dispatch } = value;
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
                      defaultValue={name}
                      ref={this.nameInput}
                    />
                  </div>
                  <div className="form-grouup">
                    <label htmlFor="email">Email:</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control form-control-lg"
                      placeholder="Enter Email..."
                      defaultValue={email}
                      ref={this.emailInput}
                    />
                  </div>
                  <div className="form-grouup">
                    <label htmlFor="phone">Phone:</label>
                    <input
                      type="text"
                      name="phone"
                      className="form-control form-control-lg"
                      placeholder="Enter Phone..."
                      defaultValue={phone}
                      ref={this.phoneInput}
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

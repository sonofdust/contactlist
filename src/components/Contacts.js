import React, { Component } from "react";
import Contact from "./Contact";

class Contacts extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "John Doe",
        email: "jdoe@gmail.com",
        phone: "555-555-5555"
      },
      {
        id: 2,
        name: "Heather Roman",
        email: "Heather@gmail.com",
        phone: "123-321-9876"
      },
      {
        id: 3,
        name: "Nick Roman",
        email: "Nick@gmail.com",
        phone: "888-888-8888"
      }
    ]
  };

  deleteContact = id => {
    const { contacts } = this.state;
    this.setState({
      contacts: contacts.filter(contact => contact.id !== id)
    });
  };
  render() {
    const { contacts } = this.state;
    return (
      <React.Fragment>
        {contacts.map(contact => (
          <Contact
            key={contact.id}
            deleteContact={this.deleteContact.bind(this, contact.id)}
            contact={contact}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Contacts;

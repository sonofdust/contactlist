import React, { Component } from "react";
const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
      break;
      //   case "ADD_CONTACT":
      //   return {
      //     ...state.contacts,
      //     {
      //         id: 1,
      //         name: "John Doe",
      //         email: "jdoe@gmail.com",
      //         phone: "555-555-5555"
      //       }
      //   };
      //   break;
      defalut: return state;
  }
};

export class Provider extends Component {
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
    ],
    dispatch: action => {
      this.setState(state => reducer(state, action));
    }
  };
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}
export const Consumer = Context.Consumer;

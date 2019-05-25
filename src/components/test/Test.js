import React, { Component } from "react";
import ReactLoading from "react-loading";
class Test extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [], loading: false };
  }
  componentDidMount() {
    this.setState({ loading: true });
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => {
        this.setState({ items: data, loading: false });
      });
  }
  //   componentWillMount() {
  //     console.log("componentWillMount()");
  //   }
  loading = ({ type, color }) => (
    <ReactLoading type={type} color={color} height={20} width={20} />
  );

  render() {
    return (
      <div>
        <h1>Test Component</h1>

        {!this.state.loading &&
          this.state.items.map(item => <div key={item.id}>{item.name}</div>)}

        {this.state.loading && (
          <ReactLoading
            type={"spokes"}
            color={"black"}
            height={100}
            width={100}
          />
        )}
      </div>
    );
  }
}

export default Test;

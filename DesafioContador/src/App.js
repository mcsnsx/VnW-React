import React, { Component } from "react";

//DESAFIO
// Use o link abaixo como exemplo
//Desenvolva um contador que tenha as seguintes funcionalidades:
//1 - O contador não pode chegar abaixo de 0
//2 - O contador não pode chegar acima de 10

class App extends Component {
  state = {
    count: 0
  };

  add = () => {
    if (this.state.count < 10) {
      this.setState({
        count: this.state.count + 1
      });
    }
  };

  remove = () => {
    if (this.state.count > 0) {
      this.setState({
        count: this.state.count - 1
      });
    }
  };

  render() {
    return (
      <div>
        <button onClick={this.add}>+</button>
        <p>{this.state.count}</p>
        <button onClick={this.remove}>-</button>
      </div>
    );
  }
}

export default App;
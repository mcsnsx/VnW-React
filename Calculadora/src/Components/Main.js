import React, { Component } from "react";
import "../styles.css";

export class App extends Component {
  state = {
    n1: "",
    n2: "",
    result: ""
  };

  handleChange1 = (event) => {
    this.setState({
      n1: event.target.value
    });
  };

  handleChange2 = (event) => {
    this.setState({
      n2: event.target.value
    });
  };

  limpar = () => {
    const { n1, n2 } = this.state;
    this.setState({
      result: ""
    });
  };

  soma = () => {
    const { n1, n2 } = this.state;
    this.setState({
      result: Number(n1) + Number(n2),
      n1: "",
      n2: ""
    });
  };

  subtracao = () => {
    const { n1, n2 } = this.state;
    this.setState({
      result: Number(n1) - Number(n2),
      n1: "",
      n2: ""
    });
  };

  multiplicacao = () => {
    const { n1, n2 } = this.state;
    this.setState({
      result: Number(n1) * Number(n2),
      n1: "",
      n2: ""
    });
  };

  divisao = () => {
    const { n1, n2 } = this.state;
    this.setState({
      result: Number(n1) / Number(n2),
      n1: "",
      n2: ""
    });
  };

  render() {
    return (
      <div class="fundo">
        <div class="calculadora">
          <h1>Calculadora</h1>
          <input
            value={this.state.n1}
            type="number"
            onChange={this.handleChange1}
          />
          <input
            value={this.state.n2}
            type="number"
            onChange={this.handleChange2}
          />
          <p class="resultado">{this.state.result}</p>
          <table>
            <tr>
              <button onClick={this.limpar}>C</button>
              <button onClick={this.soma}>+</button>
              <button onClick={this.subtracao}>-</button>
              <button onClick={this.multiplicacao}>*</button>
              <button onClick={this.divisao}>/</button>
            </tr>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
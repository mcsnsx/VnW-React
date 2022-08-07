import { Component } from "react";

//DESAFIO
//Crie um component de class
// Crie uma arrow function que receba uma mensagem e exiba na tela
// Crie uma arrow function que retorne o dobro de um número e exiba na tela

export default class Maria extends Component {
  Eu = () => <h1>Criatividade está em falta no dia de hoje!</h1>;

  Dobro = (x) => x * 2;

  render() {
    return (
      <div>
        {this.Eu()}
        {this.Dobro(3)}
      </div>
    );
  }
}

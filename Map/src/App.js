import React, { Component } from "react";

//DESAFIO
//Crie um component de class
//Crie um array de objetos no STATE com pelo menos 6 objetos
//Faça um map do seu state e exiba os dados na tela

export default class Music extends Component {
  state = {
    humanos: [
      { nome: "Maria", idade: 27, cidade: "São Paulo" },
      { nome: "Carolina", idade: 18, cidade: "Rio de Janeiro" },
      { nome: "Mac", idade: 25, cidade: "Espirito Santo" },
      { nome: "Nascimento", idade: 22, cidade: "Sergipe" },
      { nome: "Xavier", idade: 20, cidade: "Recife" },
      { nome: "M", idade: 16, cidade: "Curitiba" }
    ]
  };

  render() {
    return (
      <section>
        {this.state.humanos.map((rastreador) => (
          <p>
            Meu nome é {rastreador.nome} e sou de {rastreador.cidade}
          </p>
        ))}
      </section>
    );
  }
}

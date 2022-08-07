import React, { Component } from "react";
import Header from "./Components/Header.js";
import Main from "./Components/Main.js";

//DESAFIO
//Entre no link abaixo e continue a desenvolver a nossa calculadora
//Você deve criar as funções de cada button para disparar a operação no click
//Sua calculadora deve ter um button para limpar o resultado da tela e limpar os inputs
//Você deve buscar a solução para a operação de soma ("+" deve somar e não concatenar)
//Aproveite para praticar o styled-component no desafio!!

export default class Calculadora extends Component {
  render() {
    return (
      <>
        <Header />
        <Main />
      </>
    );
  }
}
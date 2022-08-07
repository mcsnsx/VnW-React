import React, { Component } from "react";
import Main from "./Components/Main.js";
import Header from "./Components/Header.js";
import "./styles.css";

//DESAFIO
//Complete as funções do ToDo
//Ao adicionar uma tarefa o seu input deve ser limpo
//Seu ToDo deve ter uma função para adicionar tarefa
//Seu ToDo deve ter uma função para remover tarefa
//Seu ToDo deve adicionar tarefas com o click no button e também com a tecla ENTER

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
      </div>
    );
  }
}

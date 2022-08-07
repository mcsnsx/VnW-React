import logo from './logo.svg';
import './App.css';
import React from "react";
import {Component} from 'react';
import banana from './assets/banana.jpg';

 /*
function oi() {
  return (<h1>Olá mundo</h1>
  );
}
*/

class Pessoa extends Component{

  //state que será renderizado
  state ={
    pessoa:[{
    nome: 'Gabriel',
    idade: 44,
    comida: 'ovo',
    musica: ['eletronica', 'funk', 'sertaneja']
    }]};

    render(){
      return(
        <div>
          <h1>{this.state.pessoa[0].nome}</h1>
          <h2>{this.state.pessoa[0].idade}</h2>
          <h3>{this.state.pessoa[0].comida}</h3>
          <ul>
            <li>{this.state.pessoa[0].musica[0]}</li>
            <li>{this.state.pessoa[0].musica[1]}</li>
            <li>{this.state.pessoa[0].musica[2]}</li>
          </ul>
          <img src={banana}/>
        </div>
        
      )
    }
}



export default Pessoa;
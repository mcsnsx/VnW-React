import React, { Component } from "react";
import "../styles.css";

export default class App extends Component {
  state = {
    movie: "",
    movieList: []
  };
  handleChange = (event) => {
    this.setState({
      movie: event.target.value
    });
  };

  send = () => {
    if (this.state.movie !== "") {
      this.setState({
        movieList: this.state.movieList.concat({
          movie: this.state.movie,
          id: Date.now()
        }),
        movie: ""
      });
    }
  };

  remove = (id) => {
    this.setState({
      movieList: this.state.movieList.filter((item) => item.id !== id)
    });
  };
  removeall = (id) => {
    this.setState({
      movieList: this.state.movieList.filter((item) => item.movieList)
    });
  };

  render() {
    return (
      
      <div className="fundo">
        <h1>Incluir Tarefa</h1>
        <form onSubmit={(event) => event.preventDefault()}>
          <input onChange={this.handleChange} value={this.state.movie} />
          <button className="botao" onClick={this.send}>Adicionar</button>
          <button className="botao" onClick={() => this.removeall()}>Apagar Lista</button>
          {this.state.movieList.map((item) => (
            <div className="fundoTarefas">    
              <ul className="lista">
                <li >{item.movie}</li>
              </ul>
              <button className="botaoX" onClick={() => this.remove(item.id)}>X</button>
            </div> 
          ))}
        </form>
      </div>
      
    );
  }
}
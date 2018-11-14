import React from 'react';
import ReactDOM from 'react-dom';





class App extends React.Component{
  constructor(){
    super()
    this.state = {
      hyva: 0,
      neutraali: 0,
      huono: 0
    }
  }
  render(){
    return(
    <div>
      <div>
        <h1>Anna palautetta</h1>
      </div>
      <div>
        <button onClick={() => this.setState({hyva: this.state.hyva + 1})}>Hyvä</button>
        <button onClick={() => this.setState({neutraali: this.state.neutraali + 1})}>Neutraali</button>
        <button onClick={() => this.setState({huono: this.state.huono + 1})}>Huono</button>
      </div>
      <div>
        <h2>Statistiikka</h2>
        <p>hyvä: {this.state.hyva}</p>
        <p>neutraali: {this.state.neutraali}</p>
        <p>huono: {this.state.huono}</p>
      </div>
    </div>
    )
  }
}  

ReactDOM.render(
  <App />,
  document.getElementById('root')
)


  





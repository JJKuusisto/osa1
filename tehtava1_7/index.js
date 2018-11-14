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
        <Keskiarvo hyva={this.state.hyva} neutraali={this.state.neutraali} huono={this.state.huono} />
        <Positiiviset hyva={this.state.hyva} neutraali={this.state.neutraali} huono={this.state.huono} />
      </div>
    </div>
    )
  }
}  

const Keskiarvo = ({hyva, neutraali, huono}) =>{
  var ka = 0;
  if(hyva + huono > 0) {
  var hyvat = hyva * 1;
  var huonot = huono * -1;
  ka = (hyvat + huonot) / (hyva + huono + neutraali);
  var muotoiltu_ka = ka.toFixed(1);
  console.log(muotoiltu_ka);
  }
  return (
    <p>keskiarvo: {muotoiltu_ka}</p>
  )
}

const Positiiviset = ({hyva, neutraali, huono}) =>{
  var prosentti = 0;
  if(hyva > 0){
    prosentti = (hyva / (hyva+huono+neutraali)) * 100;
    var muotoiltu_prosentti = prosentti.toFixed(1);
    console.log(muotoiltu_prosentti);
  }
  return (
    <p>positiiviset: {muotoiltu_prosentti} %</p>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)


  





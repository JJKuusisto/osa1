import React from 'react';
import ReactDOM from 'react-dom';






class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      hyva: 0,
      neutraali: 0,
      huono: 0,
     
    
    }
  }

  AsetaKeskiarvo(){
    var ka = 0
    var muotoiltu_ka = 0
    
    var hyvat = this.state.hyva * 1
    var huonot = this.state.huono * -1
    ka = (hyvat + huonot) / (this.state.hyva + this.state.huono + this.state.neutraali)
    muotoiltu_ka = ka.toFixed(1)
    return(
      muotoiltu_ka
    )
  }

  AsetaPositiiviset(){
    var prosentti = 0;
    var muotoiltu_prosentti = 0;
    
      prosentti = (this.state.hyva / (this.state.hyva+this.state.huono+this.state.neutraali)) * 100;
      muotoiltu_prosentti = prosentti.toFixed(1);
    return(
      muotoiltu_prosentti
    )
  }

  AsetaArvoHyva = (arvo) => {
    return () => {
      
      this.setState({ hyva: arvo})
      this.AsetaKeskiarvo()
      this.AsetaPositiiviset()
    }
  }

  AsetaArvoNeutraali = (arvo) => {
   
    return () => {
      
      this.setState({ neutraali: arvo})
      this.AsetaKeskiarvo()
      this.AsetaPositiiviset()
    }
  }

  AsetaArvoHuono = (arvo) => {
 
    return () => {
      
      this.setState({ huono: arvo})
      this.AsetaKeskiarvo()
      this.AsetaPositiiviset()
    }
  }


  render(){
    const Statistics = () => {
      if(this.state.hyva + this.state.neutraali + this.state.huono > 0){
        return (
        
          <div>
            <h2>Statistiikka</h2>
            <Statistic teksti="hyvä" tilasto={this.state.hyva} />
            <Statistic teksti="neutraali" tilasto={this.state.neutraali} />
            <Statistic teksti="huono" tilasto={this.state.huono} />
            <Statistic teksti="keskiarvo" tilasto={this.AsetaKeskiarvo()}/>
            <Statistic teksti="positiiviset" tilasto={this.AsetaPositiiviset()}  yksikko={"%"}/>
          </div>
        )
      }else{
        return (
        <div>
        <p>ei yhtään palautetta annettu</p>
        </div>
        )
      }
      
    }
    return(
    <div>
      <div>
        <h1>Anna palautetta</h1>
      </div>
      <div>
        <Button handleClick={this.AsetaArvoHyva(this.state.hyva + 1 )} text="Hyvä" />
        <Button handleClick={this.AsetaArvoNeutraali(this.state.neutraali + 1 )} text="Neutraali"/>
        <Button handleClick={this.AsetaArvoHuono(this.state.huono + 1 )} text="Huono"/>
      </div>
        <Statistics />

    </div>
    )
  }
  
} 

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>{text}</button>
)

const Statistic = ({teksti, tilasto, yksikko}) => {
  return (
    <p>{teksti} {tilasto} {yksikko}</p>
  )
}







ReactDOM.render(
  <App />,
  document.getElementById('root')
)


  





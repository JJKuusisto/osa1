import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: 0,
      pisteet: [0,0,0,0,0,0],
      suosituin: 0
    }
  }

  etsiSuosituin(){
    var suurin = -1
    var indeksi
    for(let i = 0; i<this.state.pisteet.length; i++){
      if(this.state.pisteet[i] > suurin){
          suurin = this.state.pisteet[i]
          indeksi = i
      }
    }
    return (indeksi)

}

  arvoLuku(){
    const luku = Math.floor(Math.random() * 6)
    console.log(luku)
    return (
      luku
    )
  }

  klikkaus = () => {
    return () =>{
      const arvottu = this.arvoLuku()
      this.setState({ selected: arvottu })
    }
  }

  aanesta = (valittu) => {
    return () =>{
      const kopio = this.state.pisteet
      kopio[valittu] += 1
      this.setState({pisteet :kopio})
      var paras = this.etsiSuosituin()
      this.setState({suosituin:paras})
      console.log(this.state.pisteet)
      console.log(this.state.suosituin)
    }
  }

  render() {
    return (
      <div>
        <p>{this.props.anecdotes[this.state.selected]}</p>
        <p>has {this.state.pisteet[this.state.selected]} votes</p>
        <div>
          <button onClick={this.aanesta(this.state.selected)}>vote</button>
          <button onClick={this.klikkaus()}>next anecdote</button>
        </div>
        <h4>anecdote with most votes:</h4>

        <p>{this.props.anecdotes[this.state.suosituin]}</p>
        <p>has {this.state.pisteet[this.state.suosituin]} votes</p>
      </div>
    )
  }
}





const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)

  





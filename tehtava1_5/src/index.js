import React from 'react';
import ReactDOM from 'react-dom';





const App = () => {
  const kurssi = {
    nimi: 'Half Stack -sovelluskehitys',
    osat: [
      {
        nimi: 'Reactin perusteet',
        tehtavia: 10
      },
      {
        nimi: 'Tiedonvälitys propseilla',
        tehtavia: 7
      },
      {
        nimi: 'Komponenttien tila',
        tehtavia: 14
      }
    ]
  }

    const Otsikko = (props) => {
      return(
          <div>
              <h1>{props.kurssi}</h1>
          </div>
      )
    }

    
    const Sisalto = (props) => {
      return(
          <div>
            <p>{props.kurssi.osat[0].nimi} {props.kurssi.osat[0].tehtavia}</p>
            <p>{props.kurssi.osat[1].nimi} {props.kurssi.osat[1].tehtavia}</p>
            <p>{props.kurssi.osat[2].nimi} {props.kurssi.osat[2].tehtavia}</p>
          </div>
      )
    }
    
    const Yhteensa = (props) => {
      return(
          <div>
              <p>yhteensä {props.kurssi.osat[0].tehtavia+props.kurssi.osat[1].tehtavia+props.kurssi.osat[2].tehtavia} tehtävää</p>
          </div>
      )
    }
  
    return (
      <div>
        <Otsikko kurssi={kurssi.nimi} />
        <Sisalto kurssi={kurssi}/>
        <Yhteensa kurssi={kurssi} />
      </div>
    )
  }

ReactDOM.render(<App />, document.getElementById('root'));



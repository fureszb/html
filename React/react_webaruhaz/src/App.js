import logo from './logo.svg';
import { termekek } from './adat';
import Termek from './Komponensek/Termek';
import './App.css';

function App() {
  const kosarList=[{
   
  }]
  function kattintas(cim, src, leiras, ar){
    //console.log(props.index)
    //props.kattintas(props.index);
    kosarList.push({
      cim: cim,
      src: src,
      leiras: leiras,
      ar: ar,
    });

  };

  return (
    <div className="App container-fluid">
      <header className="App-header">
        <h1>Könyvek</h1>
      </header>
      <div className='kozos'>
      <article>
        {termekek.map((elem, index) => {
          return (
            <Termek cim={elem.cim} leiras={elem.leiras} ar={elem.ar} key={index} src={elem.src} index={index} kattintas={kattintas} />
          );
        })}
      </article>
      <aside>
        <h1>Kosár</h1>
        {kosarList.map((elem, index) => {
          return (
            <Termek cim={elem.cim} leiras={elem.leiras} ar={elem.ar} key={index} src={elem.src} index={index} kattintas={kattintas} />
          );
        })}
      </aside>
      </div>
      <footer>Furesz Bence</footer>
    </div>
  );
}

export default App;

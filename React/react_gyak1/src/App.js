import "./App.css";
import Kep from "./Komponensek/Kep";
import { kepLista } from "./KepLista";
import { useState } from "react";

function App() {

  const [aktKep, setAktKep] = useState(0);

  function kattintas(index) {
    console.log(index);
    setAktKep(index);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Képgalléria</h1>
      </header>
      <section>
        <Kep src={kepLista[aktKep]} />
      </section>
      <article>
        {kepLista.map((elem, index) => {
          return (
            <Kep key={index} src={elem} index={index} kattintas={kattintas} />
          );
        })}
      </article>
      <footer>Furesz Bence</footer>
    </div>
  );
}

export default App;

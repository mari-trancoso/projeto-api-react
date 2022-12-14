import { GlobalContext } from "./context/GlobalContext";
import Router from "./Router/Router";
import { useState } from "react";

function App() {

  const [ pokemons, setPokemons] = useState([])

  const [pokedex, setPokedex] = useState([])

  const context = {
    //pokedex: pokedex,
    pokedex,
    setPokedex,
    pokemons,
    setPokemons
  }

  return (
    <GlobalContext.Provider value={context}>
    <Router/>
    </GlobalContext.Provider>
  );
}

export default App;

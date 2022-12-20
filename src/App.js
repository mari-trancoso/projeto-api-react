import { GlobalContext } from "./context/GlobalContext";
import Router from "./Router/Router";
import { useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";

function App() {

  const [ pokemons, setPokemons] = useState([])

  const [pokedex, setPokedex] = useState([])

  const removeFromPokedex = (pokemonToRemove) => {
    const newPokedex = pokedex.filter(
      (pokemonInPokedex) => pokemonInPokedex.name !== pokemonToRemove.name
    )

    setPokedex(newPokedex)
  }

  const context = {
    //pokedex: pokedex,
    pokedex,
    setPokedex,
    pokemons,
    setPokemons,
    removeFromPokedex
  }

  return (
    <ChakraProvider>
      <GlobalContext.Provider value={context}>
        <Router/>
      </GlobalContext.Provider>
    </ChakraProvider>
  );
}

export default App;

import { GlobalContext } from "./context/GlobalContext";
import Router from "./Router/Router";
import { useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import axios from "axios";

function App() {

  const [ pokemons, setPokemons] = useState([])
  const [pokedex, setPokedex] = useState([])

  const fecthPokemons = async () => {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=100`)
      setPokemons(response.data.results)
    }
    catch(error){
      console.log(error)
    }
  }
  

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
    removeFromPokedex,
    fecthPokemons,
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

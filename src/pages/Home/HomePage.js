import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Cards from '../../components/Cards/Cards'

const HomePage = () => {

  const [ pokemons, setPokemons] = useState([])

  useEffect(()=> {
    fecthPokemons()
  }, [])

  const fecthPokemons = async () => {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon`)

      console.log(response)

      setPokemons(response.data.results)

      console.log(pokemons)

    }

    catch(error){
      console.log(error)
    }
  }

  return (
    <>
      <h1>HomePage</h1>
      {pokemons.map((pokemon) => {
        return(
          <Cards key={pokemon} pokemon={pokemon}/>
        )
      })}
      
    </>
  )
}

export default HomePage
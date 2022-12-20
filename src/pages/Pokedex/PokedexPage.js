import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { goToHomePage } from '../../Router/coordinator'
import logoPokemon from "../../assets/logoHeader.svg"
import { GlobalContext } from '../../context/GlobalContext'

const PokedexPage = () => {
  const navigate = useNavigate()

  const context = useContext(GlobalContext)

  const {pokemons, setPokemons, pokedex, setPokedex, removeFromPokedex} = context

  console.log(pokedex)

  // const removeFromPokedex = (pokemonToRemove) => {
  //   const newPokedex = pokedex.filter(
  //     (pokemonInPokedex) => pokemonInPokedex.name !== pokemonToRemove.name
  //   )

  //   setPokedex(newPokedex)
  // }

  return (
    <>
    <div>
        <button onClick={()=>goToHomePage(navigate)}>Todos Pokémons</button>
        <img src={logoPokemon} alt="logo Pokemon"/>
    </div>
    <div>PokedexPage</div>
    {pokedex.map((pokemon) => {
      return(
        <>
          <p>#{pokemon.id}</p>
          <p>{pokemon.name}</p>
          {/* {pokemon.types&&typesHandler()} */}
          <img src={pokemon.sprites?.front_default} alt="imagem do pokemon"/>
          {/* <button onClick={()=>goToDetailsPage(navigate, details.id)}>Detalhes</button> */}
          <button onClick={()=>removeFromPokedex(pokemon)}>Remover</button>
        </>
      )
      
    })}
    
    </>
    
  )
}

export default PokedexPage
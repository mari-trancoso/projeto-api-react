import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Cards from '../../components/Cards/Cards'
import logoPokemon from "../../assets/logoHeader.svg"
import { goToPokedexPage } from '../../Router/coordinator'
import { HeadersContainer, Body } from './HomePage.styled'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext'

const HomePage = () => {

  const navigate = useNavigate()

  const context = useContext(GlobalContext)

  const {pokemons, setPokemons, pokedex, setPokedex} = context

  useEffect(()=> {
    fecthPokemons()
  }, [])

  const fecthPokemons = async () => {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=100`)

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
      <HeadersContainer>
        <img src={logoPokemon} alt="logo Pokemon"/>
        <button onClick={()=>goToPokedexPage(navigate)}>Pokedéx</button>
      </HeadersContainer>
      <Body>
        {pokemons.map((pokemon) => {
          return(
            <Cards key={pokemon} pokemon={pokemon} pokedex={pokedex} setPokedex={setPokedex}/>
          )
        })}
      </Body>
    </>
  )
}

export default HomePage
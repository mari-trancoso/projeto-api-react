import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goToHomePage } from '../../Router/coordinator'
import logoPokemon from "../../assets/logoHeader.svg"
import Cards from '../../components/Cards/Cards'

const PokedexPage = () => {
  const navigate = useNavigate()

  return (
    <>
    <div>
        <button onClick={()=>goToHomePage(navigate)}>Todos Pokémons</button>
        <img src={logoPokemon} alt="logo Pokemon"/>
    </div>
    <div>PokedexPage</div>
    
    </>
    
  )
}

export default PokedexPage
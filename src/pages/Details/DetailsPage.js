import React, { useContext, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react'
import logoPokemon from "../../assets/logoHeader.svg"
import { goToHomePage } from '../../Router/coordinator'
import { GlobalContext } from '../../context/GlobalContext'

const DetailsPage = () => {
  const navigate = useNavigate()

  const path = useParams()

  const context = useContext(GlobalContext)

  const { removeFromPokedex, pokemons } = context

  const [detailsPokemon, setDetailsPokemon] = useState({})

  useEffect(() => {
    fetchDetailsPokemonById()

  }, [])

  const fetchDetailsPokemonById = async () => {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${path.pokemonId}`)

      console.log(response.data)
      setDetailsPokemon(response.data)

    }

    catch (error) {
      console.log(error)
    }
  }

  const totalStats = () => {
    let total = 0
    detailsPokemon.stats?.map((stat) => {
      
        total += stat.base_stat;
    })
    return(total)
  }
  
  return (
    <>
      <div>
        <button onClick={()=>goToHomePage(navigate)}>Todos Pokémons</button>
        <img src={logoPokemon} alt="logo Pokemon"/>
        <button onClick={()=>removeFromPokedex(detailsPokemon)}>Exlcuir da Pokedéx</button>
      </div>
      <div>DetailsPage</div>
      <p>#{path.pokemonId}</p>
      <p>{detailsPokemon.name}</p>
      {detailsPokemon.types?.map((typePokemon) => {
        return <p>{typePokemon.type.name}</p>
      })}
      <img src={detailsPokemon.sprites?.front_default} alt="imagem do pokemon" />
      <div>
        <h2>Moves:</h2>
        {detailsPokemon.moves?.map((movesPokemon, index) => {
          if(index<5){
            return <p>{movesPokemon.move.name}</p>
          }
        })}
      </div>
      <div>
        <h2>Base Stats</h2>
          {detailsPokemon.stats?.map((stats) => {
            return <p>{stats.stat.name}: {stats.base_stat}</p>
          })}
        <p>Total: {totalStats()}</p>
      </div>
    </>

  )
}

export default DetailsPage
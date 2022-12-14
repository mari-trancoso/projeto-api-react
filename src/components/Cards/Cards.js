import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { goToDetailsPage} from '../../Router/coordinator'
import { useNavigate } from 'react-router-dom'
import { Card, TiposImagem } from '../Cards.styled'

const Cards = (props) => {

    const navigate = useNavigate()

    const [ details, setDetails] = useState({})

    

    useEffect(() => {
        fetchDetails()
        
    }, [])

    const fetchDetails = async () => {
        try {
          const response = await axios.get(`${props.pokemon.url}`)
    
          setDetails(response.data)
          console.log("AQUI", response.data.types)
      
        }
    
        catch (error) {
          console.log(error)
        }
      }

    const typesHandler = () => {
        if (details.types[1]) {
          return details.types[0]?.type.name + " " + details.types[1]?.type.name
        } else {
          return details.types[0]?.type.name
        }
    }

    const capture = (pokemon) => {
      alert("Gotcha! O pokemon foi add a sua pokedex!")
      // const newPokedex = [...pokedex]
      // newPokedex.push(pokemon)

        props.setPokedex([...props.pokedex, pokemon])

    }

    console.log("Pokedex", props.pokedex)

  return (
    <>
      <Card>
        <p>#{details.id}</p>
        <p>{details.name}</p>
          {details.types&&typesHandler()}
          <img src={details.sprites?.front_default} alt="imagem do pokemon"/>
          <button onClick={()=>goToDetailsPage(navigate, details.id)}>Detalhes</button>
          <button onClick={()=>capture(details)}>Capturar</button>
      </Card>
    </>
  )
}

export default Cards
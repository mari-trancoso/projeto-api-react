import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { goToDetailsPage, goToPokedexPage } from '../../Router/coordinator'
import { useNavigate } from 'react-router-dom'

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

          console.log(response)
        }
    
        catch (error) {
          console.log(error)
        }
      }

    // const types = () => {
    //     if (details.types[1]) {
    //         return (
    //             details.types[0].type.name + " " + details.types[1].type.name
    //         )
    //     } else {
    //         return details.types[0].type.name
    //     }
    // }

    // console.log(types)

    // console.log(types())

    // console.log(details)

    const capture = () => {
        alert("Gotcha! O pokemon foi add a sua pokedex!")
    }

  return (
    <>
        <p>#{details.id}</p>
        <p>{details.name}</p>
        <img src={details.sprites?.front_default} alt="imagem do pokemon"/>
        {/* <p>{types()}</p> */}
        <button onClick={()=>goToDetailsPage(navigate)}>Detalhes</button>
        <button onClick={()=>capture()}>Capturar</button>
        
    </>
  )
}

export default Cards
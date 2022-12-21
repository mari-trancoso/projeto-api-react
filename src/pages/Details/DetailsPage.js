import React, { useContext, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react'
import logoPokemon from "../../assets/logoHeader.svg"
import { goToHomePage } from '../../Router/coordinator'
import { GlobalContext } from '../../context/GlobalContext'
import { HeadersContainer, ButtonHomePage, ButtonRemovePokedex, Body } from './DetailsPage.styled'
import { Card, Stack, Text, Heading, Button, Image, CardBody, CardFooter, Flex} from '@chakra-ui/react'
import pokebola from "../../assets/pokebola.png"

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
      <HeadersContainer>
        <ButtonHomePage onClick={()=>goToHomePage(navigate)}>Todos Pokémons</ButtonHomePage>
        <img src={logoPokemon} alt="logo Pokemon"/>
        <ButtonRemovePokedex onClick={()=>removeFromPokedex(detailsPokemon)}>Exlcuir da Pokedéx</ButtonRemovePokedex>
      </HeadersContainer>
      <Body>
        <h1>Detalhes</h1>
        <Card
          width={"1000px"}
          height={"663px"}
          border={"1px solid red"}
          alignSelf={"center"}
          borderRadius={"38px"}
        >
          <Flex 
            flexDirection={"column"}
          >
            <Image 
              src={detailsPokemon.sprites?.front_default} 
              alt="imagem do pokemon"
              width={"282px"}
              height={"282px"}
              backgroundColor={"white"}
              margin={"20px"}
            />
            <Image 
              src={detailsPokemon.sprites?.back_default} 
              alt="imagem do pokemon"
              width={"282px"}
              height={"282px"}
              backgroundColor={"white"}
              margin={"20px"}
            />
          </Flex>
          <Flex></Flex>
          <Flex></Flex>
          <Flex></Flex>
        </Card>
      </Body>
      
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
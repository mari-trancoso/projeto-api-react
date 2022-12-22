import React, { useContext, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react'
import logoPokemon from "../../assets/logoHeader.svg"
import { goToHomePage } from '../../Router/coordinator'
import { GlobalContext } from '../../context/GlobalContext'
import { HeadersContainer, ButtonHomePage, ButtonRemovePokedex, Body } from './DetailsPage.styled'
import { Card, Stack, Text, Heading, Button, Image, CardBody, CardFooter, Flex, Progress} from '@chakra-ui/react'
import pokebola from "../../assets/pokebola.png"
import { typesForColor } from '../../components/typesForColorBg'
import { typeForImage } from '../../components/typesForImage'

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
        <Heading 
          color={"white"}
          marginTop={"40px"}
          marginLeft={"40px"}
        >
          Detalhes
        </Heading>
        <Card
          width={"1000px"}
          height={"663px"}
          alignSelf={"center"}
          borderRadius={"38px"}
          display={"flex"}
          flexDirection={"row"}
          background={typesForColor(detailsPokemon.types&&detailsPokemon.types[0].type.name)}
          marginTop={"80px"}
          marginBottom={"40px"}
        >
          <Flex 
            flexDirection={"column"}
          >
            <Image 
              src={detailsPokemon.sprites?.front_default} 
              alt="imagem do pokemon"
              width={"200px"}
              height={"200px"}
              backgroundColor={"white"}
              margin={"20px"}
              borderRadius={"8px"}
            />
            <Image 
              src={detailsPokemon.sprites?.back_default} 
              alt="imagem do pokemon"
              width={"200px"}
              height={"200px"}
              backgroundColor={"white"}
              margin={"20px"}
              borderRadius={"8px"}
            />
          </Flex>
          <Flex
            display={"flex"}
            flexDirection={"column"}
            borderRadius={"8px"}
            backgroundColor={"white"}
            width={"240px"}
            height={"600px"}
            margin={"20px"}
            padding={"20px"}
          >
            <Heading marginBottom={"16px"}>Base Stats</Heading>
            <Stack
              display={"flex"}
              flexDirection={"column"}
            >
              {detailsPokemon.stats?.map((stats) => {
                return (<>
                  <Text textTransform={"capitalize"}>{stats.stat.name}: {stats.base_stat}</Text>
                  <Stack spacing={5}>
                    <Progress colorScheme='green' size='sm' value={stats.base_stat} />
                  </Stack>
                </>)
              })}
            </Stack>
            <Stack 
              display={"flex"} 
              flexDirection={"row"}
              alignItems={"flex-end"}
            >
              <Text marginTop={"12px"}>Total: </Text>
              <Text fontWeight={"bold"}> {totalStats()}</Text>
            </Stack>
          </Flex>
          <Flex
            display={"flex"}
            flexDirection={"column"}
            margin={"20px"}
            
            width={"200px"}
          >
            <Text 
              fontSize={'16px'}
              color={"white"}
            >
              #{path.pokemonId}
            </Text>
            <Text 
              textTransform={"capitalize"}
              fontSize={'28px'}
              color={"white"}
              fontWeight={"700"}
            >
              {detailsPokemon.name}
            </Text>
            <Stack display={"flex"} flexDirection={"row"} alignItems={"flex-end"}>
              { detailsPokemon.types&&detailsPokemon.types.map((tipo) => {
                console.log(tipo)
                return <Image 
                        src={typeForImage(tipo.type.name)}
                        padding={"5px"}
                        width={"100px"}
                        height={"40px"}
                        marginTop={"20px"}
                      />
              })}
            </Stack>
            <Stack
              display={"flex"}
              flexDirection={"column"}
              borderRadius={"8px"}
              backgroundColor={"white"}
              margin={"20px"}
              padding={"20px"}
              width={"200px"}
              height={"453px"}
            >
              <Heading>Moves:</Heading>
                {detailsPokemon.moves?.map((movesPokemon, index) => {
                  if(index<5){
                    return <Text backgroundColor={"#ECECEC"} borderRadius={"8px"} textAlign={"center"} width={"120px"}>{movesPokemon.move.name}</Text>
                  }
                })}
            </Stack>
          </Flex>
          <Flex>
            <Image 
              position={"absolute"}
              w={"400px"}
              h={"400px"}
              left={"700px"}
              top={"-180px"}
              // bottom={"80px"}
              // right={"12px"}
              src={detailsPokemon.sprites?.front_default} 
              alt="imagem do pokemon"
            />
          </Flex>
        </Card>
      </Body>
    
    </>

  )
}

export default DetailsPage
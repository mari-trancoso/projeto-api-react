import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { goToDetailsPage} from '../../Router/coordinator'
import { useNavigate } from 'react-router-dom'
// import { Card, TiposImagem } from '../Cards.styled'
import { Card, Stack, Text, Heading, Button, Image, CardBody, CardFooter } from '@chakra-ui/react'
import bug from "../../assets/types/bug.png"
import dark from "../../assets/types/dark.png"
import dragon from "../../assets/types/dragon.png"
import electric from "../../assets/types/eletric.png"
import fairy from "../../assets/types/fairy.png"
import fighting from "../../assets/types/fighting.png"
import fire from "../../assets/types/fire.png"
import flying from "../../assets/types/flying.png"
import ghost from "../../assets/types/ghost.png"
import grass from "../../assets/types/grass.png"
import ground from "../../assets/types/ground.png"
import ice from "../../assets/types/ice.png"
import normal from "../../assets/types/normal.png"
import poison from "../../assets/types/poison.png"
import psychic from "../../assets/types/psychic.png"
import rock from "../../assets/types/rock.png"
import steel from "../../assets/types/steel.png"
import water from "../../assets/types/water.png"

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

      // const typeForImage = () => {
      //   switch (details.types.type.name){
      //     case "bug":
      //       return bug
      //     case "dark":
      //       return dark;
      //     case "dragon":
      //       return dragon;
      //     case "electric":
      //       return electric;
      //     case "fairy":
      //       return fairy;
      //     case "fighting":
      //       return fighting;
      //     case "fire":
      //       return fire;
      //     case "flying":
      //       return flying;
      //     case "ghost":
      //       return ghost;
      //     case "grass":
      //       return grass;
      //     case "ground":
      //       return ground;
      //     case "ice":
      //       return ice;
      //     case "normal":
      //       return normal;
      //     case "poison":
      //       return poison;
      //     case "psychic":
      //       return psychic;
      //     case "rock":
      //       return rock;
      //     case "steel":
      //       return steel;
      //     case "water":
      //       return water;
      //     default:
      //       return water;
      //   }}

      //   typeForImage()


    const typesHandler = () => {
        if (details.types[1]) {
            return (details.types[0]?.type.name + " " + details.types[1]?.type.name)
        } else {
            return details.types[0]?.type.name
        }
    }

    const capture = (pokemon) => {
      const isAlreadyOnPokedex = props.pokedex.find(
        (pokemonInPokedex) => pokemonInPokedex.name === pokemon.name
      )
  
      if (!isAlreadyOnPokedex) {
        props.setPokedex([...props.pokedex, pokemon])
        alert("Gotcha! O pokemon foi add a sua pokedex!")
      } else{
        alert("Você já capturou esse Pokemon!")
      }
    }

    console.log("Pokedex", props.pokedex)

  return (
    <>
      {/* <Card>
        <p>#{details.id}</p>
        <p>{details.name}</p>
          {details.types&&typesHandler()}
          <img src={details.sprites?.front_default} alt="imagem do pokemon"/>
          <button onClick={()=>goToDetailsPage(navigate, details.id)}>Detalhes</button>
          <button onClick={()=>capture(details)}>Capturar</button>
      </Card> */}
      <Card
        // direction={{ base: 'column', sm: 'row' }}
        // overflow='hidden'
        variant='outline'
        width={"440px"}
        height={"210px"}
        margin={"40px"}
      >
      <Stack
        display={"flex"}
        flexDirection={"row"}
      >
      <Stack>
          <CardBody>
            <Text 
              fontSize={'16px'}
              color={"white"}
            >
              #{details.id}
            </Text>

            <Text 
              textTransform={"capitalize"}
              fontSize={'32px'}
              color={"white"}
            >
              {details.name}
            </Text>
            <Text>
              {details.types&&typesHandler()}
            </Text>
          </CardBody>
        </Stack>
        
        <Image
          objectFit='cover'
          width={"193px"}
          height={"193px"}
          src={details.sprites?.front_default}
          alt="imagem do pokemon"
          
        />
      </Stack>
        
          <Stack
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"space-between"}
            width={"400px"}
          >
            <Button 
              backgroundColor={"transparent"}
              color={"white"}
              textDecoration={"underline"}
              onClick={()=>goToDetailsPage(navigate, details.id)}
            >
              Detalhes
            </Button>
            <Button 
              width={"120px"}
              height={"30px"}
              backgroundColor={"white"}
              borderRadius={"8px"}
              color={"black"}
              onClick={()=>capture(details)}
            >
              Capturar
            </Button>
          </Stack>
      </Card>
    </>
  )
}

export default Cards
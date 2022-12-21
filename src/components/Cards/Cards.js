import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { goToDetailsPage} from '../../Router/coordinator'
import { useNavigate } from 'react-router-dom'
import { Card, Stack, Text, Heading, Button, Image, CardBody, CardFooter} from '@chakra-ui/react'
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
import pokebola from "../../assets/pokebola.png"

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

      const typesForColor = (tipo) => {
        switch (tipo){
      case "bug":
        return "#316520";
      case "dark":
        return "#5C5365";
      case "dragon":
        return "#0A6CBF";
      case "electric":
        return "#F4D23B";
      case "fairy":
        return "#EC8FE6";
      case "fighting":
        return "#CE4069";
      case "fire":
        return "#F44900";
      case "flying":
        return "#6892B0";
      case "ghost":
        return "#5269AC";
      case "grass":
        return "#70B873";
      case "ground":
        return "#D97745";
      case "ice":
        return "#74CEC0";
      case "normal":
        return "#8A8A8A";
      case "poison":
        return "#AD61AE";
      case "psychic":
        return "#F67176";
      case "rock":
        return "#C7B78B";
      case "steel":
        return "#BBBBBB";
      case "water":
        return "#33A4F5";
      default:
        return "#8A8A8A";
          }
      }

      const typeForImage = (tipo) => {
        switch (tipo){
          case "bug":
            return bug
          case "dark":
            return dark;
          case "dragon":
            return dragon;
          case "electric":
            return electric;
          case "fairy":
            return fairy;
          case "fighting":
            return fighting;
          case "fire":
            return fire;
          case "flying":
            return flying;
          case "ghost":
            return ghost;
          case "grass":
            return grass;
          case "ground":
            return ground;
          case "ice":
            return ice;
          case "normal":
            return normal;
          case "poison":
            return poison;
          case "psychic":
            return psychic;
          case "rock":
            return rock;
          case "steel":
            return steel;
          case "water":
            return water;
          default:
            return water;
        }}

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

  return (
    <>
      <Card
        variant='outline'
        width={"380px"}
        margin={"40px"}
        background={typesForColor(details.types&&details.types[0].type.name)}
        backgroundImage={pokebola}
        border={"none"}
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
              fontSize={'28px'}
              color={"white"}
            >
              {details.name}
            </Text>
            <Stack display={"flex"} flexDirection={"row"} alignItems={"flex-end"}>
              { details.types&&details.types.map((tipo) => {
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
          </CardBody>
        </Stack>
        
        <Image
          position={"absolute"}
          w={"193px"}
          h={"193px"}
          bottom={"80px"}
          right={"12px"}
          src={details.sprites?.front_default}
          alt="imagem do pokemon"
          
        />
      </Stack>
        
          <Stack
            display={"flex"}
            flexDirection={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
            width={"380px"}
            marginTop={0}
            paddingRight={"16px"}
            paddingBottom={"12px"}
            
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
              Capturar!
            </Button>
          </Stack>
      </Card>
    </>
  )
}

export default Cards
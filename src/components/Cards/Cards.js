import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { goToDetailsPage} from '../../Router/coordinator'
import { useNavigate } from 'react-router-dom'
import { Card, Stack, Text, Heading, Button, Image, CardBody, CardFooter} from '@chakra-ui/react'
import pokebola from "../../assets/pokebola.png"
import { typesForColor } from '../typesForColorBg'
import { typeForImage } from '../typesForImage'

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
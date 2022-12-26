import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { goToHomePage, goToDetailsPage } from '../../Router/coordinator'
import logoPokemon from "../../assets/logoHeader.svg"
import { GlobalContext } from '../../context/GlobalContext'
import { Card, Stack, Text, Button, Image, CardBody, Heading} from '@chakra-ui/react'
import pokebola from "../../assets/pokebola.png"
import { typesForColor } from '../../components/typesForColorBg'
import { typeForImage } from '../../components/typesForImage'
import { Body, ButtonHomePage, HeadersContainer, CardsContainer } from './PokedexPage.styled'
import Modal from "react-modal"

Modal.setAppElement(`#root`)

const PokedexPage = () => {
  const navigate = useNavigate()

  const context = useContext(GlobalContext)

  const {pokedex, setPokedex} = context

  const [modalIsOpen, setModalIsOpen] = useState(false)

  const removeFromPokedex = (pokemonToRemove) => {
    const newPokedex = pokedex.filter(
      (pokemonInPokedex) => pokemonInPokedex.name !== pokemonToRemove.name
    )
    setPokedex(newPokedex)
    handleOpenModel()
  }

    function handleOpenModel () {
      setModalIsOpen (true)
    }

    function handleCloseModel () {
        setModalIsOpen (false)
    }

    const customStyles = {
      content: {
        width: "420px",
        height: "220px",
        marginLeft:"30%"
        
      }
    }

  console.log(pokedex)

  return (
    <>
    <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleCloseModel}
        style={customStyles}
      >
        <Heading
          fontWeight={"700"}
          fontSize={"48px"}
          textAlign={"center"}
          paddingBottom={"20px"}
        >Oh no!
        </Heading>
        <Text
          textAlign={"center"}
        >
        O Pokemon foi removido da sua Pokedex!
        </Text>
      </Modal>
    <HeadersContainer>
        <ButtonHomePage onClick={()=>goToHomePage(navigate)}>Todos Pokémons</ButtonHomePage>
        <img src={logoPokemon} alt="logo Pokemon"/>
    </HeadersContainer>
    <Body>
      <Heading
        color={"white"}
        marginTop={"40px"}
        marginLeft={"40px"}
      >
        Pokedex Page
      </Heading>
      <CardsContainer>
      {pokedex.map((pokemon) => {
      return(
        <>
          <Card
            variant='outline'
            width={"380px"}
            margin={"40px"}
            background={typesForColor(pokemon.types&&pokemon.types[0].type.name)}
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
                  #{pokemon.id}
                </Text>

                <Text 
                  textTransform={"capitalize"}
                  fontSize={'28px'}
                  color={"white"}
                >
                  {pokemon.name}
                </Text>
                <Stack display={"flex"} flexDirection={"row"} alignItems={"flex-end"}>
                  { pokemon.types&&pokemon.types.map((tipo) => {
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
              src={pokemon.sprites?.front_default}
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
                  onClick={()=>goToDetailsPage(navigate, pokemon.id)}
                >
                  Detalhes
                </Button>
                <Button 
                  width={"120px"}
                  height={"30px"}
                  backgroundColor={"white"}
                  borderRadius={"8px"}
                  color={"black"}
                  onClick={()=>removeFromPokedex(pokemon)}
                >
                  Remover
                </Button>
              </Stack>
          </Card>
        </>
      )
    })}

      </CardsContainer>
    
    </Body>
    </>
  )
}

export default PokedexPage
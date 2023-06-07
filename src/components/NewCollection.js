import { Container, Wrap, WrapItem } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import React from 'react'

const NewCollection = () => {
  return (
    <Container maxW={'container.xl'}>\
        <div className='newCollection_heading'>
            <Text fontSize='4xl' my={5}>New Collection</Text>
            <Text fontSize='2xl' my={5}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
        </div>
    
            <Wrap spacing='20px' my={5}>
                <WrapItem>

                    <img className='img-fluid' src='image/c2.png'></img>
                </WrapItem>
                <WrapItem>

                    <img className='img-fluid' src='image/c4.png'></img>
                </WrapItem>
                <WrapItem>

                    <img className='img-fluid' src='image/c5.png'></img>
                </WrapItem>
            
            </Wrap>
    </Container>
  )
}

export default NewCollection
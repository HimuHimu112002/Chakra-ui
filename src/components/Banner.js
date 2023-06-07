import { Container, Wrap, WrapItem } from '@chakra-ui/react'
import { Grid, GridItem } from '@chakra-ui/react'
import React from 'react'
import { Text } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
const Banner = () => {
  return (
    <div className='banner_bg'>

    <Container maxW='container.xl' py={20}>

    <Grid templateColumns='repeat(2, 1fr)'>
        <GridItem>
    
            <Text fontSize='4xl' mt={20}>Find The Best Fashion Style For You</Text>
            
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam metus sed elit mollis porta vel id nisl. Maecenas nec nulla dapibus, luctus dui posuere, tincidunt orci. Donec volutpat lacus neque, non fermentum neque finibus ac. In hac habitasse platea dictumst. In dolor est, scelerisque id bibendum in, lacinia et tellus. Nullam at fringilla dui. Duis vitae neque elit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent finibus tincidunt congue. Vestibulum leo nunc, lobortis a ipsum sed, porta aliquet mauris.</p>

            <Button my={4} size='md' height='48px' width='200px' border='2px' borderColor='green.500'>Click Here</Button>

        </GridItem>
        <GridItem className='banner_img' margin={'auto'}>
            <img className='img-fluid' src='image/c1.png'></img>
        </GridItem>
    </Grid>
    </Container>
    </div>
    
  )
}

export default Banner
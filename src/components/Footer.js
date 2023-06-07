import { Container, Wrap, WrapItem } from '@chakra-ui/react'
import { Grid, GridItem } from '@chakra-ui/react'
import React from 'react'
import { Text } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'

const Footer = () => {
  return (

    <div className='footer_bg'>

        <Container maxW='container.xl' py={20}>

            <Grid templateColumns='repeat(3, 1fr)'>
        
                <GridItem mr={4}>
    
                    <Text fontSize='4xl' mt={20}>Best Seller Product</Text>
            
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac neque, velit tortor quam at donec etiam bibendum sagittis. Libero tempor, lacus amet, scelerisque neque mauris odio risus nec. Nisl, parturient at morbi morbi sit arcu. At integer maecenas tortor non lectus.</p>

                    <Button my={4} size='md' height='48px' width='200px' border='2px' borderColor='green.500'>Click Here</Button>

                </GridItem>
                
                <GridItem className='banner_img' margin={'auto'} mr={4}>
                    <img className='img-fluid' src='image/c8.png'></img>
                </GridItem>

                <GridItem className='banner_img' margin={'auto'}>
                    <img className='img-fluid' src='image/c7.png'></img>
                </GridItem>

            </Grid>
        </Container>
    </div>
    
  )
}

export default Footer

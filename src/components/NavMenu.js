import React from 'react'
import {Center} from '@chakra-ui/react'
import { FaBars } from 'react-icons/fa';
import {Menu,MenuButton,MenuList,MenuItem} from '@chakra-ui/react'
import { Grid, GridItem } from '@chakra-ui/react'

const NavMenu = () => {
  return (

    <Grid className='NavBg' py={4} templateColumns='repeat(2, 1fr)' gap={6}>

        <GridItem>
            <Center fontSize='25px'><h1>Fresh</h1></Center>
        </GridItem>

        <GridItem margin={'auto'}>

            <Menu>
                
                <MenuButton px={4} py={2} transition='all 0.2s' borderRadius='md' borderWidth='1px' _expanded={{ bg: 'blue.400' }} _focus={{ boxShadow: 'outline' }}><FaBars/>
                {/* _hover={{ bg: 'gray.800' }} */}
                </MenuButton>

                <MenuList>
                    <MenuItem>Home</MenuItem>
                    <MenuItem>About</MenuItem>
                    <MenuItem>Contact</MenuItem>
                    <MenuItem>Items</MenuItem>
                    <MenuItem>Locations</MenuItem>
                </MenuList>
            </Menu>

        </GridItem>
    </Grid>

  )
}

export default NavMenu
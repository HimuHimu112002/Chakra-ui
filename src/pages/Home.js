import React from 'react'
import NavMenu from '../components/NavMenu'
import Banner from '../components/Banner'
import NewCollection from '../components/NewCollection'
import BestFassion from '../components/BestFassion'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
        <NavMenu/>
        <Banner></Banner>
        <NewCollection></NewCollection>
        <BestFassion></BestFassion>
        <Footer></Footer>
    </>
  )
}

export default Home
import React from 'react'
import Hero from '../components/Hero'
import Weather from '../components/Weather'
import Vacation from '../components/Vacation'
import Holiday from '../components/Holiday'
import Info from '../components/Info'

const Home = () => {
  return (
      <div>
          <Hero/>
          <Weather />
          <Vacation />
          <Holiday />
          <Info/>
    </div>
)
}

export default Home

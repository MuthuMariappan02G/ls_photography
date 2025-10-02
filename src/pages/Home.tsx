import React from 'react'
import Hero from '../components/Hero'
import Gallery from '../components/Gallery'
import About from '../components/About'
import Services from '../components/Services'
import Contact from '../components/Contact'
import Feedback from '../components/Feedback'


const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Gallery />
      <Services />
      <About />
      <Feedback />
      <Contact />
    </>
  )
}

export default Home

import React from 'react'
import Hero from '../Components/Hero'
import ProblemSection from '../Components/ProblemSection'
import FeaturesAndSolutions from '../Components/FeaturesAndSolutions'
import AboutSection from '../Components/AboutSection'
import CTASection from '../Components/CTA'
import Security from '../Components/Sec'

const Home = () => {
  return (
    <div>
        <Hero/>
        <ProblemSection/>
        <AboutSection/>
        <FeaturesAndSolutions/>
        {/* <Security/> */}
        <CTASection/>
    </div>
  )
}

export default Home
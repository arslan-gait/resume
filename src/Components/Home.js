import React from 'react'
import Header from './Header';
import Footer from './Footer';
import About from './About';
import Resume from './Resume';
import Testimonials from './Testimonials';
import resumeData from '../resumeData.json'

function Home() {
  return (
    <div className="App">
      <Header data={resumeData.main} />
      <About data={resumeData.main} />
      <Resume data={resumeData.resume} />
      <Testimonials data={resumeData.testimonials} />
      <Footer data={resumeData.main} />
    </div>
  )
}

export default Home

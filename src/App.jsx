import React from 'react'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Education from './components/education/Education'
import Portfolio from './components/portfolio/Portfolio'
import Recommendations from './components/recommendations/Recommendations'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'


const App = () => {
  return (
    <div>
      <Nav />
      <About />
      <Experience />
      <Education />
      <Portfolio />
      <Recommendations />
      <Contact />
      <Footer />
    </div>
  )
}

export default App

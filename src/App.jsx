import './App.css'
import { useState } from 'react'
import Header from './components/Header'
import Banner from './components/Banner'
import Services from './components/Services'
import Whychooseus from './components/Whychooseus'
import Projects from './components/Projects'
import Blogs from './components/Blogs.jsx'
import ContactForm from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <div className='App'>
      <Header />
      <Banner />
      <Services />
      <Whychooseus />
      <Projects />
      <Blogs  />
      <ContactForm />
      <Footer />
    </div>
  )
}

export default App

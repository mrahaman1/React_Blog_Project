import React from 'react'
import Header from './Component/Header'
import Nav from './Component/Nav'
import './App.css'
import BlogRoutes from './Component/BlogRoutes'

import Footer from './Component/Footer'

import Details from './Pages/Details'
const App = () => {
  return (
    <>
      <div className='App'>
      <Details>
        <Header/>
        <Nav/>
        <BlogRoutes/>
      </Details>
      <Footer/>
      </div>
    </>
  )
}

export default App

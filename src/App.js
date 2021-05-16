import React from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Titlebar from './components/Titlebar'
import HomePage from './pages/HomePage'
const App = () => {
  return (
    <>
      <Titlebar/>
      <Navbar classes="sticky top-0 bg-white z-50"/>
      <HomePage/>
      <Footer/>
    </>
  )
}
export default App

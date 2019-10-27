import React from "react"
import ReactDOM from "react-dom"
import Navbar from "./Components/Navbar"
import MainContent from "./Components/MainContent"
import Footer from "./Components/Footer"
import barChanging from "./Components/barChanging"


function App()
{
  return (
    <div>
      <Navbar />
      <barChanging />
      <MainContent />
      <Footer />
    </div>
    )
}

export default App
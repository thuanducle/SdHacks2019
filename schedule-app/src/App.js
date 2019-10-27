import React from "react"
import ReactDOM from "react-dom"
import Navbar from "./Components/Navbar"
import MainContent from "./Components/MainContent"
import Footer from "./Components/Footer"
import Bar from "./Components/Bar"


function App()
{
  return (
    <div>
          <Navbar />
          <Bar />
        <MainContent />
        <Footer />
    </div>
    )
}

export default App
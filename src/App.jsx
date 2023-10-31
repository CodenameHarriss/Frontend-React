import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Navigationbar from "./component/Navigationbar"
import Content from "./pages/Content"
import About from "./pages/About"
import Contact from "./pages/Contact"

function App() {

  return (
    <BrowserRouter>
      <Navigationbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="Content" element={<Content />}></Route>
        <Route path="About" element={<About />}></Route>
        <Route path="Contact" element={<Contact />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

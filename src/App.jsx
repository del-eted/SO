import React from "react"
import { Routes, Route } from "react-router-dom"
import Menu from "./components/NavBar"
import Home from "./components/Home"
import Test from "./components/Test"
import QuizDisplay from "./components/QuizMenu"

function App() {

return (
    <div>
      <div>
        <Menu />
      </div>
      <div>
        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="test" element={ <Test/> } />
          <Route path="quiz" element={ <QuizDisplay/> } />
        </Routes>
      </div>
    </div>
  )
}

export default App
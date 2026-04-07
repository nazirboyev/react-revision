import Header from './components/header.jsx'
import './App.css'
import { Routes, Route, Link } from 'react-router'
function App() {

  return (
    <>
      <Header/>

     <Routes>
        <Route path='/' element={<h1>Ismoiljon</h1>}></Route>
        <Route path='/projects' element={<h1>Projects</h1>}></Route>
        <Route path='/About' element={<h1>About</h1>}></Route>
      </Routes>
    </>
  )
}

export default App
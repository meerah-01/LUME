import './App.css'
import { Routes, Route } from 'react-router'
import { Signup } from './Pages/Signup/Signup'
import { Home } from './Pages/Home'

function App () {
  return (
    <>
    <Routes>
      <Route path='/' element={<Signup/>}/>
      <Route path='home' element={<Home/>}/>
    </Routes>
    </>
  )
}
  
export default App

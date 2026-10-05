import './App.css'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { About } from './components/About'
import { Products } from './components/products'

function App() {
  return(
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Products/>
    </>
  )

}

export default App

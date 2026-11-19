import { Hero } from "./Hero/Hero"
import { About } from "./About/About"
import { Product } from "./Product/Product"
import { Footer } from "./Footer/Footer"
import { Navbar } from "../components/Navbar/Navbar"

import { useState } from 'react'

export function Home () {
 
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar count={count}/>
    <Hero/>
    <About/>
    <Product count={count} setCount={setCount}/>
    <Footer/>
    </>
  )
}
import './Navbar.css'
import { Sidebar } from '../Sidebar/Sidebar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react'

library.add(fas, far, fab)

export function Navbar ({count}) {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
     <>
       <nav className="nav">
        <div className='icon'>
         <h1>LUME</h1>
        </div>
        <div className='links'>
          <ul className="nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
          <button onClick={() => setIsOpen(false)}>
            <FontAwesomeIcon icon="fa-solid fa-bars" className='hamburger'/>
          </button>
          <div className='cart'>
            <p className='increment'>{count}</p>
             <button className='cartBtn'><FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
          </button>
          </div>
        </div>
       </nav>

       <Sidebar isOpen={isOpen} setIsOpen={setIsOpen}/>
     </>
  )
}
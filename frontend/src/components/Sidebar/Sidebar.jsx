import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab)

export function Sidebar({isOpen, setIsOpen}) {
  return (
    <>
     <div className={`sidebar ${isOpen ? 'active' : ''}`}>
      <button onClick={() => setIsOpen(true)} className='close'>
      <FontAwesomeIcon icon="fa-solid fa-x"/>
      </button>
      <div className='sidebarLinks'>
        <p>Home</p>
        <p>About</p>
        <p>Products</p>
        <p>Contact</p>
      </div>
     </div>
    </>
  )
}
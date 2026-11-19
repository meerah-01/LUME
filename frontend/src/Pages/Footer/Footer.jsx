import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab)

export function Footer () {
  return (
    <>
    <div className='footer'>
      <div className='footerLinks'>
        <div className='link'>
          <h3>Lum&eacute;</h3>
          <p>We'd love to hear from you. Connect with us!!</p>
        </div>
        <div className='link'>
          <h4>Navigation</h4>
          <p>Home</p>
          <p>About</p>
          <p>Products</p>
        </div>
        <div className='link'>
          <h4>Quick Link</h4>
          <p>Cart</p>
          <p>Products</p>
          <p>Collections</p>
        </div>
        <div className='link'>
         <h4>Contact</h4>
         <div>
          <FontAwesomeIcon icon="fa-solid fa-phone" />
         <p> +234 (0)8034567890</p>
         </div>
         <div>
          <FontAwesomeIcon icon="fa-solid fa-envelope" />
         <p>lume2026@gmail.com</p>
         </div>
         
      </div>
      </div>
      <div className='copyright'>
        <p>&copy; 2026 LUM&Eacute;</p>
      </div>
    </div>
    </>
  )
}


import './Navbar.css'

export function Navbar () {
  return (
     <>
       <div className="nav">
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
        </div>
       </div>
     </>
  )
}
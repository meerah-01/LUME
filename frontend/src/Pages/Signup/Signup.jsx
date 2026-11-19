import './Signup.css'
import signup1 from '../../assets/signup2.JPG'
import { useState } from 'react'
import { useNavigate } from 'react-router'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab)

export function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [active, setActive] = useState(true);
  const [error, setError] = useState('');

  const showPassword = () => {
     if(active) {
        setActive(false)
     } else {
      setActive(true)
     }
  }

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:7000/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        navigate('/home');
      } else {
        setError(data.message)
      }

    } catch (error) {
      console.error('Signup error:', error);
    }
  }
  return (
    <>
      <div className='signupContainer'>
        <div className='leftSide'>
          <img src={signup1} alt="" className='signPic' />
        </div>
        <div className='rightSide'>
          <h2>Create Account</h2>
          <p>Explore our collection and discover your style.</p>
          <p className='errorMessage'>{error}</p>
          <form onSubmit={handleSubmit}>
            <div className='signupForm'>
              <label htmlFor="name">Full Name </label>
              <input type="text" id='name' value={name}
                onChange={(e) => setName(e.target.value)} />
            </div>
            <div className='signupForm'>
              <label htmlFor="email">Email </label>
              <input type="email" id='email' value={email}
                onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className='signupForm'>
              <div className='passwordLabel'>
                <label htmlFor="password">Password </label>
                <button type="button" onClick={showPassword}>{active ? <FontAwesomeIcon icon="fa-solid fa-eye"/> : <FontAwesomeIcon icon="fa-solid fa-eye-slash"/>}</button>
               </div>
              <input type={active ? "password" : "text"} id='password' value={password}
                onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button type="submit" className='signBtn'>Sign Up</button>
          </form>
        </div>
      </div>
    </>
  )
}




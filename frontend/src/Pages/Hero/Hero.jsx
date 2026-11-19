import './Hero.css'
import hero from '../../assets/hero.JPG'

export function Hero () {
  return (
    <>
      <div className='hero'>
        <div className='heroText'>
          <p>NEW SEASON</p>
          <h2>Softly, in natural tones.</h2>
          <p>Effortless pieces crafted from linen, wool and cotton - made to be lived in.</p>
          <button>shop now</button>
        </div>
        <div className='heroPic'>
          <img src={hero} className='heroImage'/>
        </div>
      </div>
    </>
  )
}
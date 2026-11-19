import './About.css'
import about from '../../assets/about.JPG'

export function About () {
  return (
    <>
     <div className='about'>
        <div className='aboutPic'>
          <img src={about} className='aboutImage'/>
        </div>
        <div className='aboutText'>
          <p>ABOUT</p>
          <h2>Made slowly, worn often.</h2>
          <p>we design timeless essentials in muted, skin-toned palettes. Every piece is responsibly made in small batches, so it lasts beyond a season.</p>
        </div>
     </div>
    </>
  )
}
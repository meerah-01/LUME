import './products.css'
import product1 from '../assets/product 1.JPG'
import product2 from '../assets/product 2.JPG'
import product4 from '../assets/product 4.JPG'
import product5 from '../assets/product 5.JPG'
import product6 from '../assets/product 6.JPG'
import product7 from '../assets/product 7.JPG'
import product8 from '../assets/product 8.JPG'
import product9 from '../assets/product 9.JPG'

import collection1 from '../assets/collection1.jpg'
import collection2 from '../assets/collection2.jpg'
import collection3 from '../assets/collection3.jpg'

export function Products () {
  return (
    <>
     <div className='productSection'>
       <div className='heading'>
        <h2>Our Options</h2>
       </div>
       <div className='products'>
        <div className='productCard'>
          <img src={product1} />
          <p>Trouser</p>
          <p>5000</p>
        </div>
        <div className='productCard'>
          <img src={product2} />
          <p>Trouser</p>
          <p>5000</p>
        </div>
        <div className='productCard'>
          <img src={product9} />
          <p>Gown</p>
          <p>5000</p>
        </div>
        <div className='productCard'>
          <img src={product4} />
          <p>Top</p>
          <p>5000</p>
        </div>
        <div className='productCard'>
          <img src={product5} />
          <p>Sweater</p>
          <p>5000</p>
        </div>
        <div className='productCard'>
          <img src={product6} />
           <p>Skirt</p>
          <p>5000</p>
        </div>
        <div className='productCard'>
          <img src={product7} />
          <p>Skirt</p>
          <p>5000</p>
        </div>
        <div className='productCard'>
          <img src={product8} />
          <p>Jean Skirt</p>
          <p>5000</p>
        </div>
       
       </div>
       <div className='collection'>
        <div className='heading'>
          <h2>Explore Collections</h2>
        </div>
        <div className='choices'>
          <div className='collectionCard'>
           <img src={collection2} />
           <div className='collectionInfo'>
            <p>Discover the latest pieces</p>
           </div>
          </div>
          <div className='collectionCard'>
            <img src={collection1} />
            <div className='collectionInfo'>
            <p>Curated looks for every moment</p>
           </div>
          </div>
          <div className='collectionCard'>
            <img src={collection3} />
            <div className='collectionInfo'>
            <p>Fresh pieces for the season</p>
           </div>
          </div>
        </div>
       </div>
     </div>
    </>
  )
}
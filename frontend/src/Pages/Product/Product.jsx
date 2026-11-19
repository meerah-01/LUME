import './Product.css'
import product1 from '../../assets/sweater.JPG'
import product2 from '../../assets/heel.JPG'
import product3 from '../../assets/shirt.JPG'
import product4 from '../../assets/brown-vest.JPG'

import collection1 from '../../assets/coat.JPG'
import collection2 from '../../assets/scandals.JPG'
import collection3 from '../../assets/trousers.jpeg'

export function Product ({count, setCount}) {

  const addCount = () => {
    setCount(count + 1);
  }

  return (
    <>
     <div className='productSection'>
       <div className='heading'>
        <h2>Bestsellers</h2>
       </div>
       <div className='products'>
        <div className='productCard'>
          <img src={product3} />
          <p className='productName'>Brown shirt</p>
          <p className='price'>$400</p>
          <button onClick={addCount}>ADD TO CART</button>
        </div>
        <div className='productCard'>
          <img src={product2} />
          <p className='productName'>Brown Heel</p>
          <p className='price'>$400</p>
          <button onClick={addCount}>ADD TO CART</button>
        </div>
        <div className='productCard'>
          <img src={product1} />
          <p className='productName'>Cream Knit Sweater</p>
          <p className='price'>$200</p>
          <button onClick={addCount}>ADD TO CART</button>
        </div>
        <div className='productCard'>
          <img src={product4} />
          <p className='productName'>Brown Vest</p>
          <p className='price'>$500</p>
          <button onClick={addCount}>ADD TO CART</button>
        </div> 
       </div>
       <div className='collection'>
        <div className='heading'>
          <h2>Explore Collections</h2>
        </div>
        <div className='choices'>
          <div className='collectionCard'>
           <img src={collection1} />
           <div className='collectionInfo'>
            <p>Coats</p>
           </div>
          </div>
          <div className='collectionCard'>
            <img src={collection3} />
            <div className='collectionInfo'>
            <p>Trousers</p>
           </div>
          </div>
          <div className='collectionCard'>
            <img src={collection2} />
            <div className='collectionInfo'>
            <p>Sandals</p>
           </div>
          </div>
        </div>
       </div>
     </div>
    </>
  )
}
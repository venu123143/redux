import React, { useState } from 'react'
import { useGetAllProductsQuery } from '../redux-container/productsApi'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../redux-container/cartSlice'
import { useNavigate } from 'react-router-dom'
const Home = () => {
  const { data, error, isLoading } = useGetAllProductsQuery();
  const [Active, setActive] = useState(false)
  // const auth = useSelector(state => state.auth)
  // console.log(auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleAddToCart = async (product) => {
    // what ever we dispach that will go to action.payload
    dispatch(addToCart(product))
    navigate('/cart')
  }

  return (
    <div className="home-container">
      {isLoading ? <p>loading....</p> : error ?
        <p> An  error occured </p> :
        <>
          <h2>new arriavals</h2>
          <div className="products">
            {data?.map(product =>
              <div key={product.id} className="product" >
                <h3>{product.name}</h3>
                <img src={product.image} alt={product.name} />
                <div className="details">
                  <span>{product.desc}</span>
                  <span className="price">${product.price}</span>
                </div>
                <button onClick={() => handleAddToCart(product)}>Add to cart</button>

              </div>
            )}

          </div>
        </>
      }
    </div >
  )
}

export default Home
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';
import { removeFromCart, descreaseCart, addToCart,clearCart,cartTotal} from '../redux-container/cartSlice';
const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(cartTotal())
  },[cart,dispatch])
  const handleRemoveFromcart = (cartItem) => {
    dispatch(removeFromCart(cartItem))
  }
  const handleDecreaseCart = (cartItem) => {
    dispatch(descreaseCart(cartItem))
  }
  const handleIncreaseCart = (cartItem) => {
    dispatch(addToCart(cartItem))
  }
  const clearAllCart=()=>{
    dispatch(clearCart())
  }
  return (
    <>
      <div className='cart-container'>
        <h2>Shopping Cart</h2>
        {
          cart.cartItems.length === 0 ? (
            <div className="cart-empty">
              <p>your cart is currently empty</p>
              <div className="start-shopping">
                <Link to='/'>
                  <i class="fa-solid fa-arrow-left"></i>
                  <span>start shopping</span></Link>
              </div>
            </div>
          ) : (
            <>
              <div className="titles">
                <h3 className="product-title">product</h3>
                <h3 className="price">price</h3>
                <h3 className="quantity">quantity</h3>
                <h3 className="total">total</h3>
              </div>
              <div className="cart-items">
                {cart.cartItems?.map(cartItem => (
                  <div key={cartItem.id} className="cart-item">
                    <div className="cart-product">
                      <img src={cartItem.image} alt={cartItem.name} />
                      <div>
                        <h3>{cartItem.name}</h3>
                        <p>{cartItem.desc}</p>
                        <button onClick={() => handleRemoveFromcart(cartItem)}>remove</button>
                      </div>
                    </div>
                    <div className="cart-product-price">${cartItem.price}</div>
                    <div className="cart-product-quantity">
                      <button onClick={() => handleDecreaseCart(cartItem)}>-</button>
                      <div className="count">{cartItem.cartQuantity}</div>
                      <button onClick={() => handleIncreaseCart(cartItem)}>+</button>
                    </div>
                    <div className="cart-product-total-price">
                      ${cartItem.price * cartItem.cartQuantity}
                    </div>
                  </div>
                ))}
              </div>
              <div className="cart-summery">
                <button className='clearcart' onClick={()=>{clearAllCart()}}>clear cart</button>
                <div className="cart-checkout">
                  <div className="subtotal">
                    <span>subtotal</span>
                    <span>${cart.cartTotalAmount}</span>
                  </div>
                  <p>taxes and shipping calculated at checkout</p>
                  <button>checkout</button>
                  <div className="continue-shopping">
                    <Link to='/'><i class="fa-solid fa-arrow-left"></i><span>continue shopping</span></Link>
                  </div>
                </div>
              </div>
            </>
          )
        }
      </div>
    </>
  )
}

export default Cart
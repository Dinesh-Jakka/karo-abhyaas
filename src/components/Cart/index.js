import React from 'react'
import Header from '../Header';
import CartContext from '../../context/CartContext';
import CartItem from '../CartItem'
import './index.css'

const Cart = () => (
  <CartContext.Consumer>
    {value=>{
      const {cartList,removeAllItems}=value
      const showEmptyView=cartList.length===0
      const onClickRemoveAllItems=()=>{
        removeAllItems()
      }
      return (
        <div className="cart-route">
          <Header />
          <div className="cart-container">
            {showEmptyView ? (
              <>
                <h1>Cart is Empty</h1>
              </>
            ) : (
              <>
                <div className="cart-header-container">
                  <h1>My Cart</h1>
                  <button
                    className="remove-btn"
                    onClick={onClickRemoveAllItems}
                  >
                    Remove All
                  </button>
                </div>
                <ul className="cart-list-container">
                  {cartList.map((each) => (
                    <CartItem key={each.id} cartItemDetails={each} />
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>
      );
    }}
  </CartContext.Consumer>
)

export default Cart
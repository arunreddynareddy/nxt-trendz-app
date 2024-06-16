import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import Header from '../Header'
import CartListView from '../CartListView'
import CartSummary from '../CartSummary'

import CartContext from '../../context/CartContext'
import EmptyCartView from '../EmptyCartView'

import './index.css'

const Cart = () => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }

  return (
    <CartContext.Consumer>
      {value => {
        const {cartList, removeAllCartItems} = value
        const showEmptyView = cartList.length === 0
        const onClickRemoveAllCartItems = () => {
          removeAllCartItems()
        }

        return (
          <>
            <Header />
            <div className="cart-container">
              {showEmptyView ? (
                <EmptyCartView />
              ) : (
                <div className="cart-content-container">
                  <h1 className="cart-heading">My Cart</h1>
                  <button
                    type="button"
                    className="remove-all-button"
                    onClick={onClickRemoveAllCartItems}
                  >
                    Remove All
                  </button>
                  <CartListView />
                  <CartSummary />
                </div>
              )}
            </div>
          </>
        )
      }}
    </CartContext.Consumer>
  )
}
export default Cart

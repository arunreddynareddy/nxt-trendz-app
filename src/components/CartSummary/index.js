import './index.css'
import CartContext from '../../context/CartContext'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let total = 0

      cartList.forEach(eachItem => {
        total += eachItem.price * eachItem.quantity
      })

      return (
        <div className="summary-container">
          <h1 className="summary-heading">
            Order Total: <span className="summary-span">Rs {total}/-</span>
          </h1>
          <p className="summary-description">{cartList.length} Items in cart</p>
          <button type="button" className="checkout-button">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary

import Popup from 'reactjs-popup'
import {MdClose} from 'react-icons/md'
import {useState} from 'react'

import './index.css'
import CartContext from '../../context/CartContext'

const CartSummary = () => {
  const [confirmButtonDisabled, setConfirmButtonDisabled] = useState(true)
  const [orderIsPlaced, setOrderIsPlaced] = useState(false)

  return (
    <CartContext.Consumer>
      {value => {
        const {cartList} = value
        let total = 0

        cartList.forEach(eachItem => {
          total += eachItem.price * eachItem.quantity
        })

        const onChangePaymentInput = () => {
          setConfirmButtonDisabled(false)
        }

        const onClickConfirmOrder = () => {
          setOrderIsPlaced(true)
        }

        const renderPaymentsView = () => (
          <div className="payment-methods-container">
            <h1 className="payment-heading">Select a Payment Method</h1>
            <div className="payment-input-label-container">
              <input
                type="radio"
                id="card"
                className="payment-input"
                name="payment"
                disabled
              />
              <label htmlFor="card" className="payment-label">
                Card
              </label>
            </div>
            <div className="payment-input-label-container">
              <input
                type="radio"
                id="netBanking"
                className="payment-input"
                name="payment"
                disabled
              />
              <label htmlFor="netBanking" className="payment-label">
                Net Banking
              </label>
            </div>
            <div className="payment-input-label-container">
              <input
                type="radio"
                id="upi"
                className="payment-input"
                name="payment"
                disabled
              />
              <label htmlFor="upi" className="payment-label">
                UPI
              </label>
            </div>
            <div className="payment-input-label-container">
              <input
                type="radio"
                id="wallet"
                className="payment-input"
                name="payment"
                disabled
              />
              <label htmlFor="wallet" className="payment-label">
                Wallet
              </label>
            </div>
            <div className="payment-input-label-container">
              <input
                type="radio"
                id="cashOnDelivery"
                className="payment-input"
                name="payment"
                onChange={onChangePaymentInput}
              />
              <label htmlFor="cashOnDelivery" className="payment-label">
                Cash on Delivery
              </label>
            </div>
            <button
              type="button"
              className="payment-confirm-button"
              disabled={confirmButtonDisabled}
              onClick={onClickConfirmOrder}
            >
              Confirm Order
            </button>
          </div>
        )

        return (
          <div className="summary-container">
            <h1 className="summary-heading">
              Order Total: <span className="summary-span">Rs {total}/-</span>
            </h1>
            <p className="summary-description">
              {cartList.length} Items in cart
            </p>
            <div className="popup-container">
              <Popup
                modal
                trigger={
                  <button type="button" className="checkout-button">
                    Checkout
                  </button>
                }
              >
                {close => (
                  <div className="payment-container">
                    <button
                      type="button"
                      className="popup-close-button"
                      onClick={() => close()}
                    >
                      <MdClose color="#000000" size={20} />
                    </button>
                    {orderIsPlaced ? (
                      <div className="payment-success-heading-container">
                        <h1 className="payment-success-heading">
                          Your order has been placed successfully
                        </h1>
                      </div>
                    ) : (
                      renderPaymentsView()
                    )}
                  </div>
                )}
              </Popup>
            </div>
          </div>
        )
      }}
    </CartContext.Consumer>
  )
}

export default CartSummary

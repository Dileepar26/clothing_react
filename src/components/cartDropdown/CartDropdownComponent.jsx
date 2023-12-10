import React from 'react'
import ButtonComponent from '../button/ButtonComponent'
import './cartDropdownStyles.scss'
function CartDropdownComponent() {
  return (
    <div className="cart-dropdown-container">
        <div className="cart-items">
            <ButtonComponent>GO TO CHECKOUT</ButtonComponent>
        </div>
    </div>
  )
}

export default CartDropdownComponent 
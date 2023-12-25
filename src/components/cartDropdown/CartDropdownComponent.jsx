import ButtonComponent from '../button/ButtonComponent'
import './cartDropdownStyles.scss'
import { useContext } from 'react'
import { CartContext } from '../../contexts/cartContext'
import CartItemComponent from '../cartItem/CartItemComponent'
import { useNavigate } from 'react-router-dom'
function CartDropdownComponent() {
  const { cartItems } = useContext(CartContext);
  // console.log(cartItems, 'cartDrop')
  const navigate = useNavigate();
  const goToCheckoutHandler = () => {
    navigate('/checkout')
  }
  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItemComponent key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <span className='empty-message'>Your cart is empty</span>
        )}
      </div>
      <ButtonComponent onClick={goToCheckoutHandler}>CHECKOUT</ButtonComponent>
    </div>
  );
};

export default CartDropdownComponent 
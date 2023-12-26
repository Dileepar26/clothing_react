import ButtonComponent from '../button/ButtonComponent'
import { CartDropContainer, EmptyMessage, CartItems } from './cartDropdownStyles.jsx'
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
    <CartDropContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItemComponent key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <ButtonComponent onClick={goToCheckoutHandler}>CHECKOUT</ButtonComponent>
    </CartDropContainer>
  );
};

export default CartDropdownComponent 
import { useContext } from 'react';
import ButtonComponent, { BUTTON_TYPE_CLASSES } from '../button/ButtonComponent'
import './productCardStyle.scss'
import React from 'react'
import { CartContext } from '../../contexts/cartContext';

function ProductCardComponent({ product }) {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);
  const addProductToCart = () => {
    addItemToCart(product);
    // console.log(product)
  }

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <ButtonComponent buttonType={BUTTON_TYPE_CLASSES.inverted} onClick = {addProductToCart} >Add to card</ButtonComponent>
    </div>
  )
}

export default ProductCardComponent
import React from 'react'
import './buttonStyle.scss'
const BUTTON_TYPE_CLASSES = {
    google: 'google-sign-in',
    inverted: 'inverted'
}

function ButtonComponent({children, buttonType, ...otherProps}) {
  return (
    <button
      className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
}

export default ButtonComponent
import React from 'react'
import './buttonStyle.scss'
const buttoon_type_classed = {
    google: 'google-sign-in',
    inverted: 'inverted'
}

function ButtonComponent({children, buttonType, ...otherprops}) {
  return (
    <button className={`button-container ${buttoon_type_classed[buttonType]}`} {...otherprops}>
        {children}
    </button>
  )
}

export default ButtonComponent
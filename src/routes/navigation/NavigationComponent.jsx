import { Fragment, useContext } from 'react'
import { Outlet } from 'react-router-dom'
import { ReactComponent as Crownlogo } from '../../assets/crown.svg'
import { UserContext } from '../../contexts/UserContext'
import { signOutUser } from '../../utils/firebase/firebase.utils'
import CartIconComponent from '../../components/cartIcon/CartIconComponent'
import CartDropdownComponent from '../../components/cartDropdown/CartDropdownComponent'
import { CartContext } from '../../contexts/cartContext'
import { LogoContainer, NavLink, NavLinks, NavigationContainer } from './navigationStyles'
function NavigationComponent() {
    const { currentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext);
    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to='/'>
                    <Crownlogo />
                </LogoContainer>
                <NavLinks>
                    <NavLink to='/shop'>SHOP</NavLink>
                    {currentUser ? (
                        <NavLink as='span' onClick={signOutUser}>SIGN OUT</NavLink>
                    ) :(
                        <NavLink to='/auth'>SIGN IN</NavLink>
                    )}
                    <CartIconComponent />
                </NavLinks>
                {isCartOpen && <CartDropdownComponent />}
            </NavigationContainer>
            <Outlet />
        </Fragment>
    )
}

export default NavigationComponent
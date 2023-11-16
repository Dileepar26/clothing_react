import { Fragment, useContext } from 'react'
import { Outlet, Link } from 'react-router-dom'
import { ReactComponent as Crownlogo } from '../../assets/crown.svg'
import '../navigation/navigationComponent.scss'
import { UserContext } from '../../contexts/UserContext'
import { signOutUser } from '../../utils/firebase/firebase.utils'
function NavigationComponent() {
    const { currentUser } = useContext(UserContext)
    return (
        <Fragment>
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                    <Crownlogo className='logo' />
                </Link>
                <div className="nav-links-container">
                    <Link className='nav-link' to='/shop'>
                        SHOP
                    </Link>
                    {currentUser ? (
                        <span className="nav-link" onClick={signOutUser}>SIGN OUT</span>
                    ) : 
                    <Link className='nav-link' to='/auth'>
                        SIGN IN
                    </Link>
                    }
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}

export default NavigationComponent
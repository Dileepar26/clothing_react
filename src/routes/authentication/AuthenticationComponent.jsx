
import SignInFormComponent from '../../components/signInForm/SignInFormComponent'
import SIgnUPFormComponent from '../../components/signUpForm/SIgnUPFormComponent'
import './authenticationStyles.scss'
const  AuthenticationComponent =() => {
  return (
    <div className='authentication-container'>
      <SignInFormComponent/>
      <SIgnUPFormComponent/>
    </div>
  )
}

export default AuthenticationComponent
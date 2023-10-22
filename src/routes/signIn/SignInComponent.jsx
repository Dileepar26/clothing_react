
import SIgnUPFormComponent from '../../components/signUpForm/SIgnUPFormComponent'
import { auth, signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'

const  SignInComponent =() => {
  const logGoogleUser = async() => {
    const { user } = await signInWithGooglePopup()
    const userDocRef = await createUserDocumentFromAuth(user)
  }
  return (
    <div>
      <h1>Sign in Page</h1>
      <button onClick={logGoogleUser}>
        Sign in with Google
      </button>
      <SIgnUPFormComponent/>
    </div>
  )
}

export default SignInComponent
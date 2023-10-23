import {useState} from 'react'
import { signInAuthUserWithEmailAndPassword, signInWithGooglePopup } from '../../utils/firebase/firebase.utils';
import FormInput from '../formInput/FormInputComponent';
import './signInFormStyles.scss'
import ButtonComponent from '../button/ButtonComponent';
const defaultFormFields = {
    email: '',
    password: ''
}

function SignInFormComponent() {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password} = formFields;
    // console.log(formFields)
    const resetFormFields = ()=> {
        setFormFields(defaultFormFields)
    }

    const signInWithGoogle = async () => {
        await signInWithGooglePopup();
      };

    const handleSumbit = async (event) => {
        event.preventDefault();
        try {
            const response = await signInAuthUserWithEmailAndPassword(email, password)
            console.log(response)
            resetFormFields()
        } catch (err) {
            switch (err.code) {
                case 'auth/invalid-login-credentials':
                    alert('incorrect password or email')
                    break
                default:
                    console.log(err)

            }
        }
    }

    const handleChange =  async (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value})
    }
    return (
        <div className='sign-in-container'>
            <h2>Already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSumbit}>
                <FormInput label = 'Email' type='email' required onChange={handleChange} name='email' value={email}/>

                <FormInput label = 'password' type='password' required onChange={handleChange} name='password' value={password}/>
            <div className="buttons-container">
                <ButtonComponent type="submit">sign in</ButtonComponent>
                <ButtonComponent buttonType='google' type='button' onClick={signInWithGoogle}> google sign in</ButtonComponent>
            </div>
            </form>
        </div>
    )
}

export default SignInFormComponent
import {useContext, useState} from 'react'
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
import FormInput from '../formInput/FormInputComponent';
import './signUpFormStyles.scss'
import ButtonComponent from '../button/ButtonComponent';
const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

function SIgnUPFormComponent() {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword} = formFields;
    // console.log(formFields)
    const resetFormFields = ()=> {
        setFormFields(defaultFormFields)
    }
    const handleSumbit = async (event) => {
        event.preventDefault();
        if(password !== confirmPassword){
            alert("passwords do not match")
            return
        }
        try {
            const {user} = await createAuthUserWithEmailAndPassword(email, password)
            await createUserDocumentFromAuth(user, {displayName})
            resetFormFields()
        } catch (err) {
            if (err.code === 'auth/email-already-in-use') {
                alert('cannot create user, email already in use')
            } else {
                console.log('user creation encountere an error', err)
            }
        }
    }

    const handleChange =  async (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value})
    }
    return (
        <div className='sign-up-container'>
            <h2>Don't have an account</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSumbit}>
                <FormInput label = 'Display Name' type='text'  required onChange={handleChange} name='displayName' value={displayName}/>

                <FormInput label = 'Email' type='email' required onChange={handleChange} name='email' value={email}/>

                <FormInput label = 'password' type='password' required onChange={handleChange} name='password' value={password}/>

                <FormInput label = 'confirm password' type='password' required onChange={handleChange} name='confirmPassword' value={confirmPassword}/>
                <ButtonComponent type="submit">sign up</ButtonComponent>
            </form>
        </div>
    )
}

export default SIgnUPFormComponent
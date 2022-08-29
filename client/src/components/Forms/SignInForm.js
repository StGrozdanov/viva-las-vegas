import { useNavigate } from 'react-router-dom';
import ModalForm from "./ModalForm";
import FormDataButton from '../Buttons/FormDataButton';
import OptionalInputField from '../InputFields/OptionalInputField';
import { useState } from 'react';
import { login } from '../../services/authenticationService';

function SignInForm() {
    const navigate = useNavigate();
    const [userData, setUserData] = useState({});
    const [loginError, setLoginError] = useState('');

    function addUserData(fieldData) {
        setUserData(state => ({ ...state, ...fieldData }));
    }

    async function loginHandler() {
        const response = await login(userData);
        if (response.ok) {
            navigate('/register');
        } else {
            const data = await response.json();
            setLoginError(data.message);
            throw new Error('Something went terribly wrong with the login attempt');
        }
    }

    return (
        <ModalForm>
            <h2>Sign in</h2>
            <h4 style={{position: 'absolute', left: '25%', color: 'orange'}}>{loginError}</h4>
            <article className='modal-content'>
                <OptionalInputField placeHolder={'Username'} inputHandler={addUserData} />
                <OptionalInputField placeHolder={'Password'} inputHandler={addUserData} />
                <FormDataButton text={'Login'} clickHandler={loginHandler} />
            </article>
            <footer
                className='modal-footer'
                onClick={() => navigate('/register')}
            >
                Not a member? Sign up instead
            </footer>
        </ModalForm>
    );
}

export default SignInForm;
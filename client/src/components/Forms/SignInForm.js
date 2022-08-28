import { useNavigate } from 'react-router-dom';
import ModalForm from "./ModalForm";
import FormDataButton from '../Buttons/FormDataButton';
import OptionalInputField from '../InputFields/OptionalInputField';

function SignInForm() {
    const navigate = useNavigate();
    return (
        <ModalForm>
            <h2>Sign in</h2>
            <article className='modal-content'>
                <OptionalInputField placeHolder={'Username'} />
                <OptionalInputField placeHolder={'Password'} />
                <FormDataButton
                    text={'Login'}
                />
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
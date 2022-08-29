import { useNavigate } from 'react-router-dom';
import './MultiStepModalForm.css';
import './AccountInfoForm.css';
import FormDataButton from '../Buttons/FormDataButton';
import InputField from '../InputFields/InputField';
import { useEffect, useState } from 'react';

function AccountInfoForm({ nextStepHandler }) {
    const [firstNameIsValid, setFirstNameIsValid] = useState(false);
    const [passwordIsValid, setPasswordIsValid] = useState(false);
    const [emailIsValid, setEmailIsValid] = useState(false);
    const [usernameIsValid, setUsernameIsValid] = useState(false);
    const [termsAreAccepted, setTermsAreAccepted] = useState(false);
    const [userData, setUserData] = useState({});
    const navigate = useNavigate();

    const allValidationsHavePassed = firstNameIsValid && passwordIsValid && emailIsValid && usernameIsValid && termsAreAccepted;

    function validateFirstNameHandler(boolean) {
        setFirstNameIsValid(boolean);
    }
    function validateEmailHandler(boolean) {
        setEmailIsValid(boolean);
    }
    function validateUsernameHandler(boolean) {
        setUsernameIsValid(boolean);
    }
    function validatePasswordHandler(boolean) {
        setPasswordIsValid(boolean);
    }
    function termsAcceptHandler() {
        termsAreAccepted ? setTermsAreAccepted(false) : setTermsAreAccepted(true);
    }
    function continueRegistrationHandler() {
        if (allValidationsHavePassed) {
            console.log(userData);
            nextStepHandler();
        }
    }
    function addUserData(fieldData) {
        setUserData(state => ({ ...state, ...fieldData }));
    }

    return (
        <>
            <form className="modal-form">
                <InputField
                    placeHolder={'First name'}
                    validateHandler={validateFirstNameHandler}
                    inputHandler={addUserData}
                />
                <InputField
                    placeHolder={'Email'}
                    validateHandler={validateEmailHandler}
                    inputHandler={addUserData}
                />
                <InputField
                    placeHolder={'Username'}
                    validateHandler={validateUsernameHandler}
                    inputHandler={addUserData}
                />
                <InputField
                    placeHolder={'Password'}
                    validateHandler={validatePasswordHandler}
                    inputHandler={addUserData}
                />
                <div className='terms-and-conditions'>
                    <input type="checkbox" name="termsAndConditions" onClick={termsAcceptHandler} />
                    <label htmlFor="termsAndConditions">
                        By checking this box, I agree to Terms & Conditions of the site.
                    </label>
                </div>
                <FormDataButton
                    text={'Continue'}
                    clickHandler={continueRegistrationHandler}
                    isDisabled={allValidationsHavePassed === false}
                />
            </form>
            <footer
                className='modal-footer'
                onClick={() => navigate('/login')}
            >
                Already a member? Sign in instead
            </footer>
        </>
    );
}

export default AccountInfoForm;
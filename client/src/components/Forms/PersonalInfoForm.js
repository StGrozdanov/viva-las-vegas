import { useNavigate } from 'react-router-dom';
import './MultiStepModalForm.css';
import FormDataButton from '../Buttons/FormDataButton';
import InputField from '../InputFields/InputField';
import OptionalInputField from '../InputFields/OptionalInputField';
import { useState } from 'react';
import { updateUserData } from '../../services/userService';
import { getCurrentUserUsername, getUserToken } from '../../services/authenticationService';

function PersonalInfoForm() {
    const [addressOneIsValid, setAddressOneIsValid] = useState(false);
    const [cityIsValid, setCityIsValid] = useState(false);
    const [countryIsValid, setCountryIsValid] = useState(false);
    const [postalCodeIsValid, setPostalCodeIsValid] = useState(false);
    const [phoneNumberIsValid, setPhoneNumberIsValid] = useState(false);
    const [bonusCodeIsRequested, setBonusCodeIsRequested] = useState(false);
    const [userData, setUserData] = useState({});
    const navigate = useNavigate();

    const allValidationsHavePassed = addressOneIsValid && cityIsValid && countryIsValid && postalCodeIsValid && phoneNumberIsValid;

    function validateAddressHandler(boolean) {
        setAddressOneIsValid(boolean);
    }
    function validateCityHandler(boolean) {
        setCityIsValid(boolean);
    }
    function validateCountryHandler(boolean) {
        setCountryIsValid(boolean);
    }
    function validatePostalCodeHandler(boolean) {
        setPostalCodeIsValid(boolean);
    }
    function validatePhoneNumberHandler(boolean) {
        setPhoneNumberIsValid(boolean);
    }
    function continueRegistrationHandler() {
        if (allValidationsHavePassed) {
            if (allValidationsHavePassed) {
                updateUserData(getCurrentUserUsername(), getUserToken(), userData)
                    .then(response => {
                        response.json();
                    })
                    .then(navigate('/registration-success')())
                    .catch(err => {
                        console.log(err);
                    });
            }
        }

    }
    function bonusCodeHandler() {
        setBonusCodeIsRequested(true);
    }
    function addUserData(fieldData) {
        setUserData(state => ({ ...state, ...fieldData }));
    }

    return (
        <form className="modal-form">
            <InputField
                placeHolder={'Address 1'}
                validateHandler={validateAddressHandler}
                inputHandler={addUserData}
            />
            <OptionalInputField placeHolder={'Address 2'} inputHandler={addUserData} />
            <InputField placeHolder={'City'} validateHandler={validateCityHandler} inputHandler={addUserData} />
            <InputField
                placeHolder={'Country'}
                validateHandler={validateCountryHandler}
                inputHandler={addUserData}
            />
            <InputField
                placeHolder={'Postal Code'}
                validateHandler={validatePostalCodeHandler}
                inputHandler={addUserData}
            />
            <InputField placeHolder={'Phone Number'}
                validateHandler={validatePhoneNumberHandler}
                inputHandler={addUserData}
            />
            {
                bonusCodeIsRequested
                    ? <OptionalInputField placeHolder={'Bonus Code'} inputHandler={addUserData} />
                    : <h5
                        onClick={bonusCodeHandler}
                        style={{
                            textAlign: 'center',
                            cursor: 'pointer',
                            display: bonusCodeIsRequested ? 'none' : '',
                        }}
                    >
                        You have a bonus code? Click here!
                    </h5>
            }
            <FormDataButton
                text={'Complete Registration'}
                clickHandler={continueRegistrationHandler}
                isDisabled={allValidationsHavePassed === false}
            />
        </form>
    );
}

export default PersonalInfoForm;
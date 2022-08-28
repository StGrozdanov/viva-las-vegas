import { useNavigate } from 'react-router-dom';
import './MultiStepModalForm.css';
import FormDataButton from '../Buttons/FormDataButton';
import InputField from '../InputFields/InputField';
import OptionalInputField from '../InputFields/OptionalInputField';
import { useState } from 'react';

function PersonalInfoForm({ nextStepHandler }) {
    const [addressOneIsValid, setAddressOneIsValid] = useState(false);
    const [cityIsValid, setCityIsValid] = useState(false);
    const [countryIsValid, setCountryIsValid] = useState(false);
    const [postalCodeIsValid, setPostalCodeIsValid] = useState(false);
    const [phoneNumberIsValid, setPhoneNumberIsValid] = useState(false);
    const [bonusCodeIsRequested, setBonusCodeIsRequested] = useState(false);
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
            navigate('/registration-success');
        }
    }
    function bonusCodeHandler() {
        setBonusCodeIsRequested(true);
    }

    return (
        <form className="modal-form">
            <InputField placeHolder={'Address 1'} validateHandler={validateAddressHandler} />
            <OptionalInputField placeHolder={'Address 2'} />
            <InputField placeHolder={'City'} validateHandler={validateCityHandler} />
            <InputField placeHolder={'Country'} validateHandler={validateCountryHandler} />
            <InputField placeHolder={'Postal Code'} validateHandler={validatePostalCodeHandler} />
            <InputField placeHolder={'Phone Number'} validateHandler={validatePhoneNumberHandler} />
            {
                bonusCodeIsRequested
                    ? <OptionalInputField placeHolder={'Bonus Code'} />
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
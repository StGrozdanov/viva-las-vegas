import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'
import './InputField.css';
import '../Forms/ModalForm.css';
import { useState } from "react";
import ERROR_MESSAGES from "../../constants/errorMessages";
import iconTypes from "../../constants/inputFieldIcons";
import VALIDATION_CRITERIA from "../../utils/formDataValidatorUtil";

function InputField({ placeHolder, validateHandler, inputHandler }) {
    const [isValid, setIsValid] = useState(true);

    const onErrorMessage = ERROR_MESSAGES[placeHolder];

    function validateInputHandler(e) {
        const input = e.target.value;
        const validationCriteriaIsMet = VALIDATION_CRITERIA[placeHolder](input);

        if (validationCriteriaIsMet) {
            setIsValid(true);
            validateHandler(true);
            const inputData = {}
            inputData[placeHolder] = input;
            inputHandler(inputData)
        } else {
            setIsValid(false);
            validateHandler(false);
        }
    }

    return (
        <div className='input-field-container'>
            <FontAwesomeIcon icon={iconTypes[placeHolder]} className='input-field-icon' />
            <input
                className='modal-input'
                type={placeHolder == 'Password' ? 'password' : 'text'}
                placeholder={placeHolder}
                onBlur={validateInputHandler}
                onFocus={() => setIsValid(true)}
                style={{ borderBottomColor: isValid ? 'white' : 'red', borderBottomWidth: !isValid ? 2 : '' }}
            />
            {
                !isValid &&
                <FontAwesomeIcon
                    icon={faTriangleExclamation}
                    color='orange'
                    className='input-field-invalid-icon'
                />
            }
            <span
                className='error-message-container'
                style={{ color: !isValid ? 'orange' : '', display: isValid ? 'none' : '' }}
            >
                {onErrorMessage}
            </span>
        </div>
    )
}

export default InputField;
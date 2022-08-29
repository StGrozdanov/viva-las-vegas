import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'
import './InputField.css';
import '../Forms/ModalForm.css';
import { useEffect, useState } from "react";
import ERROR_MESSAGES from "../../constants/errorMessages";
import iconTypes from "../../constants/inputFieldIcons";
import VALIDATION_CRITERIA from "../../utils/formDataValidatorUtil";
import { userExistsByEmail, userExistsByUsername } from '../../services/userService';

function InputField({ placeHolder, validateHandler, inputHandler }) {
    const [isValid, setIsValid] = useState(true);
    const [input, setInput] = useState('');
    const [emailIsTaken, setEmailIsTaken] = useState(false);
    const [usernameIsTaken, setUsernameIsTaken] = useState(false);

    useEffect(() => {
        if (isValid && input !== '' && placeHolder === 'Email') {
            userExistsByEmail(input)
                .then(response => {
                    if (response.existsByEmail === true) {
                        setEmailIsTaken(true);
                    } else {
                        setEmailIsTaken(false);
                    }
                })
                .catch(err => console.log(err));
        }
    }, [isValid, input]);

    useEffect(() => {
        if (isValid && input !== '' && placeHolder === 'Username') {
            userExistsByUsername(input)
                .then(response => {
                    if (response.existsByUsername === true) {
                        setUsernameIsTaken(true);
                    } else {
                        setUsernameIsTaken(false);
                    }
                })
                .catch(err => console.log(err));
        }
    }, [isValid, input]);

    const onErrorMessage = ERROR_MESSAGES[placeHolder];

    function validateInputHandler() {
        const validationCriteriaIsMet = VALIDATION_CRITERIA[placeHolder](input);
        const uniqueConstraintFails = emailIsTaken;

        if (validationCriteriaIsMet && !uniqueConstraintFails) {
            setIsValid(true);
            validateHandler(true);
            const inputData = {};
            inputData[placeHolder] = input;
            inputHandler(inputData);
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
                onChange={e => setInput(e.target.value)}
                value={input}
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
            {
                emailIsTaken
                    ? <span
                        className={'error-message-container'}
                        style={{ color: emailIsTaken ? 'orange' : '', display: emailIsTaken ? '' : 'none' }}
                    >
                        {'Another user has already selected this email.'}
                    </span>
                    : usernameIsTaken
                        ? <span
                            className={'error-message-container'}
                            style={{ color: usernameIsTaken ? 'orange' : '', display: usernameIsTaken ? '' : 'none' }}
                        >
                            {'Another user has already selected this username.'}
                        </span>
                        :
                        <span
                            className={'error-message-container'}
                            style={{ color: isValid ? '' : 'orange', display: isValid ? 'none' : '' }}
                        >
                            {onErrorMessage}
                        </span>
            }
        </div>
    )
}

export default InputField;
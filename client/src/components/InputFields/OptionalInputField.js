import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import iconTypes from "../../constants/inputFieldIcons";

function OptionalInputField({ placeHolder, inputHandler }) {
    function changeDataHandler(e) {
        const input = e.target.value;

        const inputData = {};
        inputData[placeHolder] = input;
        inputHandler(inputData);
    }

    return (
        <div style={{ position: 'relative' }}>
            <FontAwesomeIcon
                icon={iconTypes[placeHolder]}
                style={{ position: 'absolute', left: 0, bottom: 15 }}
            />
            <input
                className='modal-input'
                type={placeHolder == 'Password' ? 'password' : 'text'}
                placeholder={placeHolder}
                onBlur={changeDataHandler}
            />
        </div>
    )
}

export default OptionalInputField;
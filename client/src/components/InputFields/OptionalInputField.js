import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import iconTypes from "../../constants/inputFieldIcons";

function OptionalInputField({ placeHolder }) {

    function validateInputHandler(e) {
        const input = e.target.value;
        const accountInfo = JSON.parse(sessionStorage.getItem('AccountInfoData'));

        if (accountInfo !== null) {
            accountInfo[placeHolder] = input;
            sessionStorage.setItem('AccountInfoData', JSON.stringify(accountInfo));
        } else {
            const info = {};
            info[placeHolder] = input;
            sessionStorage.setItem('AccountInfoData', JSON.stringify(info));
        }
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
                onBlur={validateInputHandler}
            />
        </div>
    )
}

export default OptionalInputField;
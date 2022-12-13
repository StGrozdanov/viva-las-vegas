import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './FormDataButton.css';
import HrefButton from './HrefButton';

function FormDataButton({
    text,
    color = 'orange',
    icon,
    hover = 'green',
    clickHandler,
    marginTop,
    isDisabled,
    href
}) {
    color = color == 'orange' && isDisabled ? 'green' : 'orange';

    function hoverHandler(e) {
        if (!isDisabled) {
            e.target.style.background = hover;
        }
    }

    function unhoverHandler(e) {
        if (!isDisabled) {
            e.target.style.background = color
        }
    }

    function handleClick(e) {
        e.preventDefault();
        clickHandler();
    }

    return (
        clickHandler
            ?
            <button
                className={'form-button'}
                style={{ background: color, marginTop: marginTop, cursor: isDisabled ? 'default' : 'pointer' }}
                onClick={handleClick}
                onMouseEnter={hoverHandler}
                onMouseLeave={unhoverHandler}
                disabled={isDisabled}
            >
                {icon && <FontAwesomeIcon icon={icon} style={{ marginRight: 10 }} />}
                {text}
            </button>
            :
            <HrefButton href={href} icon={icon} text={text} marginTop={marginTop} color={color} hover={hover} />
    );
}

export default FormDataButton;
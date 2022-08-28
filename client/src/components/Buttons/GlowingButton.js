import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './FormDataButton.css';
import './GlowingButton.css';

function GlowingButton({
    text,
    color = 'green',
    icon,
    hover = 'green',
    clickHandler,
    style
}) {
    function hoverHandler(e) {
        e.target.style.background = hover;
    }

    function unhoverHandler(e) {
        e.target.style.background = color
    }

    function handleClick(e) {
        e.preventDefault();
        clickHandler();
    }

    return (
        <button
            className={'form-button glowing-button'}
            style={style}
            onClick={handleClick}
            onMouseEnter={hoverHandler}
            onMouseLeave={unhoverHandler}
        >
            {icon && <FontAwesomeIcon icon={icon} style={{ marginRight: 10 }} />}
            {text}
        </button>
    );
}

export default GlowingButton;
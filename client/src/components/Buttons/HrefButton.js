import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './FormDataButton.css';
import './HrefButton.css';

function HrefButton({ href, icon, text, hover, color, marginTop }) {
    function hoverHandler(e) {
        e.target.style.background = hover;
    }

    function unhoverHandler(e) {
        e.target.style.background = color
    }
    return (
        <a
            className={'form-button href-button'}
            style={{ background: color, marginTop: marginTop }}
            onMouseEnter={hoverHandler}
            onMouseLeave={unhoverHandler}
            href={href}
            target="_blank"
        >
            {icon && <FontAwesomeIcon icon={icon} style={{ marginRight: 10 }} />}
            {text}
        </a>
    );
}

export default HrefButton;
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faSignature } from '@fortawesome/free-solid-svg-icons';
import { faKey } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faHouseFlag } from '@fortawesome/free-solid-svg-icons';
import { faMap } from '@fortawesome/free-solid-svg-icons';
import { faMobileScreenButton } from '@fortawesome/free-solid-svg-icons';
import { faEnvelopesBulk } from '@fortawesome/free-solid-svg-icons';
import { faGift } from '@fortawesome/free-solid-svg-icons';

const iconTypes = {
    Password: faKey,
    'First name': faSignature,
    Username: faUser,
    Email: faEnvelope,
    'Address 1': faLocationDot,
    'Address 2': faLocationDot,
    City: faHouseFlag,
    Country: faMap,
    'Postal Code': faEnvelopesBulk,
    'Phone Number': faMobileScreenButton,
    'Bonus Code': faGift,
}

export default iconTypes;
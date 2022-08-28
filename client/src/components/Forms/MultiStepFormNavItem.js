import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './MultiStepModalForm.css';

function MultiStepFormNavItem({ icon, currentStep, itemName, itemNumber }) {
    return (
        <span className='step-container'>
            <FontAwesomeIcon
                icon={icon}
                className={`step-icons ${currentStep === itemNumber && 'selected-step-icon'}`}
            />
            <span
                className={`step-text ${currentStep === itemNumber && 'selected-step-text'}`}
            >
                {itemName}
            </span>
        </span>
    );
}

export default MultiStepFormNavItem;
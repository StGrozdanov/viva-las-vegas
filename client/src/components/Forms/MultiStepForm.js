import { faCircleCheck, faUserTie, faAddressCard } from '@fortawesome/free-solid-svg-icons';
import './MultiStepModalForm.css';
import { useState } from 'react';
import AccountInfoForm from './AccountInfoForm';
import FeedbackForm from './FeedbackForm';
import PersonalInfoForm from './PersonalInfoForm';
import MultiStepFormNavItem from './MultiStepFormNavItem';
import ModalForm from './ModalForm';
import secondStepFeedbackFormProperties from '../../constants/secondStepFeedbackFormProperties';

const formSteps = {
    0: (nextStepHandler) => <AccountInfoForm nextStepHandler={nextStepHandler} />,
    1: (nextStepHandler) => <FeedbackForm {...secondStepFeedbackFormProperties} nextStepHandler={nextStepHandler} />,
    2: (nextStepHandler) => <PersonalInfoForm nextStepHandler={nextStepHandler} />,
}

function MultiStepForm({ step = 0 }) {
    const [currentStep, setCurrentStep] = useState(step);

    const content = formSteps[currentStep];

    function incrementStepHandler() {
        const nextStepIsInRange = currentStep < Object.keys(formSteps).length - 1;

        if (nextStepIsInRange) {
            setCurrentStep((oldStep) => oldStep += 1);
        }
    }

    return (
        <ModalForm>
            <div className='form-step-container'>
                <MultiStepFormNavItem
                    currentStep={currentStep}
                    icon={faUserTie}
                    itemName={'Account info'}
                    itemNumber={0}
                />
                <span className='step-icons-dash'></span>
                <MultiStepFormNavItem
                    currentStep={currentStep}
                    icon={faCircleCheck}
                    itemName={'Confirmation'}
                    itemNumber={1}
                />
                <span className='step-icons-dash'></span>
                <MultiStepFormNavItem
                    currentStep={currentStep}
                    icon={faAddressCard}
                    itemName={'Personal info'}
                    itemNumber={2}
                />
            </div>
            <article className='modal-content'>
                {content(incrementStepHandler)}
            </article>
        </ModalForm>
    );
}

export default MultiStepForm;
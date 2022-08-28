import { faForward } from "@fortawesome/free-solid-svg-icons";
import './MultiStepModalForm.css';
import FormDataButton from '../Buttons/FormDataButton';

function FeedbackForm({
    nextStepHandler,
    headingText,
    text,
    firstHref,
    secondHref,
    firstButtonText,
    secondButtonText
}) {
    return (
        <form className="modal-form">
            <h4 style={{ textAlign: 'center' }}>{headingText}</h4>
            <h5 style={{ textAlign: 'center' }}>{text}</h5>
            {
                secondHref
                    ?
                    <>
                        <FormDataButton
                            text={firstButtonText}
                            color={'orange'}
                            icon={faForward}
                            hover={'darkgreen'}
                            marginTop={'20px'}
                            isDisabled={false}
                            href={firstHref}
                        />
                        <FormDataButton
                            text={secondButtonText}
                            color={'#005580'}
                            icon={faForward}
                            hover={'darkgreen'}
                            marginTop={'20px'}
                            isDisabled={false}
                            href={secondHref}
                        />
                    </>
                    :
                    <>
                        <FormDataButton
                            text={firstButtonText}
                            clickHandler={nextStepHandler}
                            isDisabled={false}
                        />
                        <FormDataButton
                            text={secondButtonText}
                            color={'#005580'}
                            icon={faForward}
                            hover={'darkgreen'}
                            marginTop={'20px'}
                            isDisabled={false}
                            href={firstHref}
                        />
                    </>
            }
        </form>
    );
}

export default FeedbackForm;
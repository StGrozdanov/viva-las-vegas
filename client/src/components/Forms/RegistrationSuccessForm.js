import ModalForm from "../Forms/ModalForm";
import FeedbackForm from '../Forms/FeedbackForm';
import successFeedbackFormProperties from "../../constants/registrationSuccessFeedbackForm";

function RegistrationSuccessForm() {
    return (
        <ModalForm>
            <h3>Your info was successfully updated</h3>
            <FeedbackForm {...successFeedbackFormProperties} />
        </ModalForm>
    );
}

export default RegistrationSuccessForm;
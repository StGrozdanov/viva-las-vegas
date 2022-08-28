import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

function ModalForm({ children }) {
    const navigate = useNavigate();
    return (
        <section className='modal'>
            <FontAwesomeIcon icon={faXmark} className="modal-cancel" onClick={() => navigate('/')} />
            {children}
        </section>
    );
}

export default ModalForm;
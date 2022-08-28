import { useNavigate } from 'react-router-dom';
import GlowingButton from "../Buttons/GlowingButton";

function Landing() {
    const navigate = useNavigate();

    function navigateHandler() {
        navigate('/register');
    }

    return (
        <>
            <h2 style={{ textAlign: 'center' }}>Wellcome to our casino!</h2>
            <GlowingButton text={'Play Now!'} clickHandler={navigateHandler} />
        </>
    );
}

export default Landing;
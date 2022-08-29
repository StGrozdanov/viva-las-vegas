import { useEffect, useState } from "react";
import { userExistsByEmail } from "../services/userService";

export function useEmailConstraint(email) {
    const [emailIsTaken, setEmailIsTaken] = useState(false);

    useEffect(() => {
        userExistsByEmail(email)
            .then(response => {
                if (response.existsByEmail === true) {
                    setEmailIsTaken(true);
                } else {
                    setEmailIsTaken(false);
                }
            })
            .catch(err => console.log(err));
    }, []);

    return emailIsTaken;
}

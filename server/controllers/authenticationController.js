const router = require('express').Router();

const errorMapper = require('../utils/errorMapper');
const authenticationService = require('../services/authenticationService');

router.post('/register', async (request, response) => {
    await authenticateUser(request, response, authenticationService.register);
});

router.post('/login', async (request, response) => {
    await authenticateUser(request, response, authenticationService.login);
});

router.get('/registration-completed/:username', async (request, response) => {
    const username = request.params.username;
    const registrationData = await authenticationService.registrationIsComplited(username);
    response.json({ registrationCompleted: registrationData.length > 0 });
});

async function authenticateUser(request, response, action) {
    try {
        const user = await action(request.body);
        response.json(user);
    } catch (error) {
        console.log(`Error happened durring user authentication: ${error}`);
        let errorMessage = handleUniqueConstraintError(errorMapper(error));
        response.status(400).json({ message: errorMessage });
    }
}

function handleUniqueConstraintError(errorMessage) {
    if (errorMessage.includes('duplicate')) {
        errorMessage = 'There is already a user with the same username or email.';
    }
    return errorMessage;
}

module.exports = router;
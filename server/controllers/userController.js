const router = require('express').Router();

const userService = require('../services/userService');
const isAuthorized = require('../middlewares/authorizationMiddleware');
const errorMapper = require('../utils/errorMapper');

router.get('/', async (request, response) => {
    const { limit, skip } = request.query;
    const allUsers = await userService.getAllUsers(limit, skip);
    response.json(allUsers);
});

router.get('/exists-by-username/:username', async (request, response) => {
    const targetUsername = request.params.username;
    const existsByUsername = await userService.findByUsername(targetUsername);
    response.json({ existsByUsername: existsByUsername !== null });
});

router.get('/exists-by-email/:email', async (request, response) => {
    const targetEmail = request.params.email.toLowerCase();
    const existsByEmail = await userService.findByEmail(targetEmail);
    response.json({ existsByEmail: existsByEmail !== null });
});

router.put('/:username', isAuthorized(), async (request, response) => {
    const username = request.user.username;
    try {
        await userService.updateUserInfo(username, request.body);
        response.status(200).json();
    } catch (error) {
        console.log(`Error happened durring user authentication: ${error}`);
        response.status(400).json({ message: errorMapper(error) });
    }
});

router.get('/count/all', async (request, response) => {
    const usersCount = await userService.count();
    response.json({ count: usersCount })
});

module.exports = router;
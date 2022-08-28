const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const User = require('../models/User');

const register = async (userData) => {
    password = userData.password.toString();
    const passwordIsValid = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]|.*?[!@#$%^&*()_+-=]).{6,12}$/.test(password);

    if (!passwordIsValid) {
        throw new Error('Invalid password format.');
    }

    const hashedPassword = await bcrypt.hash(password, Number(process.env.SALT_ROUNDS));

    try {
        const user = await User.create({ ...userData, password: hashedPassword });
        return createSession(user);
    } catch (error) {
        throw new Error(error.message);
    }

};

const login = async ({ username, password }) => {
    const user = await User.findOne({ username });
    handleLoginError(user);

    const match = await bcrypt.compare(password.toString(), user.password);
    handleLoginError(match);

    return createSession(user); l
}

const registrationIsComplited = (username) => {
    return User.find({
        username: { $regex: new RegExp("^" + username.toLowerCase() + "$", "i") },
        phoneNumber: { $ne: null }
    });
}

function createSession(user) {
    const payload = { username: user.username, _id: user._id };

    const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_DURRATION,
    });

    return {
        username: user.username,
        sessionToken: token,
        _id: user._id,
    };
};

function handleLoginError(condition) {
    if (!condition) {
        throw new Error('Incorrect email or password');
    }
}

async function validateToken(token) {
    return jwt.verify(token, process.env.JWT_SECRET);
}

module.exports = {
    register,
    login,
    validateToken,
    registrationIsComplited,
};
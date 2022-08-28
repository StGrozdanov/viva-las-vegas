const User = require('../models/User');

const getAllUsers = (limit, skip) => limit ? User.find({}).limit(limit).skip(skip * limit) : User.find({});

const findByUsername = (username) => {
    return User.exists({
        username: { $regex: new RegExp("^" + username.toLowerCase() + "$", "i") }
    });
}

const findByEmail = (email) => {
    return User.exists({
        email: { $regex: new RegExp("^" + email.toLowerCase() + "$", "i") }
    });
}

const updateUserInfo = async (username, userData) => {
    const filter = { username };
    try {
        await User.findOneAndUpdate(filter, userData, { runValidators: true, context: 'query', new: true });
    } catch (error) {
        throw new Error(error.message);
    }
}

module.exports = {
    getAllUsers,
    findByUsername,
    findByEmail,
    updateUserInfo,
};
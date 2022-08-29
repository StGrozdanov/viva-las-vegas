const User = require('../models/User');

const getAllUsers = (limit, skip) => {
    return limit
        ? User.find({}).limit(limit).skip(skip * limit).select('username -_id')
        : User.find({}).select('username -_id');
}

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

const count = () => User.countDocuments({}).exec();

module.exports = {
    getAllUsers,
    findByUsername,
    findByEmail,
    updateUserInfo,
    count,
};
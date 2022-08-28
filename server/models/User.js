const { model, Schema } = require('mongoose');

const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: [true, 'Username is required.'],
        minlength: [4, 'Username cannot be less than 4 symbols long.'],
        maxlength: [12, 'Username cannot be more than 12 symbols long.'],
    },
    password: {
        type: String,
        required: [true, 'Password is required.'],
    },
    firstName: {
        type: String,
        required: true,
        validate: {
            validator: function () {
                return /^[a-zA-Z]{3,}$/.test(this.firstName)
            },
            message: 'First Name must be at least 3 letters long.'
        }
    },
    email: {
        type: String,
        required: [true, 'Email is required.'],
        unique: true,
        validate: {
            validator: function () {
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email)
            },
            message: 'Email must be valid.'
        }
    },
    address1: {
        type: String,
        minlength: [4, 'Address cannot be less than 4 symbols long.'],
    },
    address2: {
        type: String,
        minlength: [4, 'Address cannot be less than 4 symbols long.'],
    },
    city: {
        type: String,
        minlength: [4, 'City name cannot be less than 4 symbols long.'],
    },
    country: {
        type: String,
        minlength: [2, 'Country name cannot be less than 2 symbols long.'],
    },
    postalCode: {
        type: Number,
        min: [1000, 'Postal Code must be valid.']
    },
    phoneNumber: {
        type: String,
        minlength: [10, 'Phone Number must be valid.'],
    },
    bonusCode: {
        type: String,
    }
});

const User = model('User', userSchema);

module.exports = User;
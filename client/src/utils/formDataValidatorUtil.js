const VALIDATION_CRITERIA = {
    Email: (email) => { return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) },
    Username: (username) => { return username.trim().length >= 4 && username.trim().length <= 12 },
    Password: (password) => { return /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]|.*?[!@#$%^&*()_+-=]).{6,12}$/.test(password) },
    'First name': (firstName) => { return /^[a-zA-Z]{3,}$/.test(firstName) },
    'Address 1': (address) => { return address.trim().length >= 4 },
    City: (city) => { return city.length >= 4 },
    Country: (country) => { return country.length >= 2 },
    'Postal Code': (postalCode) => { return /^[0-9]{4,}$/.test(postalCode) },
    'Phone Number': (phoneNumber) => { return phoneNumber.trim().length >= 10 },
}

export default VALIDATION_CRITERIA;
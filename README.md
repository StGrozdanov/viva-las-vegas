<h1 align="center">Viva Las Vegas</h1>

<p align="center">
  <img width=150 height=150 src="https://viva-las-vegas-ba1bf.web.app/casino_logo.png">
</p>

## Project Concept
The assignment was to create a 3-step registration page. Because users have the option to not complete all of the steps in order to play i decided to expand the app, in order to be as close to the real world experience as possible.

Landing page with casino style glowing button greets the visitors. Upon clicking the Play Now button - sign up registration form appears. But what if the user is already registered? Register again is surelly not a option, so there is a login option on the form as well.

By login success, the app will track your current registration process and if it's not completed - will redirect you to the registration form step 2. 

If you already completed your registration process and login - you will be redirected to the view for fully registered users - to play for real money.

There is also a list of all currently registered users that you can visit from the site nav. Since we expect to be in the TOP 10 of the websites with the most traffic - there is a pagination feature as well. We don't want to list all of our 300 mil registered users at once, right ?

## Features

* Password hash - a must when we persist sensitive user data.

* JWT token + route guarding for the user additional info update - we don't want the bad guy to present himself as someone he is not.

* On the fly user unique credentials validation - two users with the same username or email are not good ideas. In the future - phone number must be included in this validation as well. Also - validation is on type for better UX but this could potentially lead to performance issues and if such are present - it's a good idea the validation event to be changed to something like onBlur.

* Additional validations on user data - password should be alphanumeric with one capital letter, one lowercase letter, one number/character. All the required data goes throught specific frontend validations before reaching the server. There is server side validation as well for the postman lovers.

* Animation effect on the register form.

* Persistance in session storage - not ideal for security to say the least. Must be improved to in memory persistance solution in real usecase scenario. Since this was a demo - i didn't want to overengineer the task. This is the reason why i didn't use context API/redux for state management solution. 

## Main technology stack

* MongoDB
* Express
* ReactJS

## REST API endpoints

Authentication:

* POST /authenticate/register - used for initial registration. Valid request body should be provided.

* POST /authenticate/login - for login. Valid request body should be provided.

* GET /authenticate/registration-completed/:username - endpoint for checking the current user registration status. Returns JSON object with registrationCompleted key. The value is true/false, depending on the additional user information that is provided in the registration process.

Users:

* GET /users - list of all the registered users usernames. It will work as server-side pagination endpoint if limit & skip options are provided in the request.

* GET /users/exists-by-username/:username - endpoint for checking if the provided username is already recorded in the DB. Returns JSON object with existsByUsername key. The value is true/false, depending on the case.

* GET /users/exists-by-email/:email - endpoint for checking if the provided email is already recorded in the DB. Returns JSON object with existsByEmail key. The value is true/false, depending on the case.

* GET /users/count/all - will provide the count of the currently registered users.

* PUT /users/:username - for adding additional user info to the registered user. The endpoint can be accessed by authenticated users.

## Public address
https://viva-las-vegas-ba1bf.web.app/

Be aware! Backend is deployed in heroku and might be in sleep state when you visit the app. There are no loading spinners and interractions - so be patient, until we implement the features in the future :) 

## How to run the project locally

### Before you start:

* In the server directory:

1. You have to provide your own DB credentials. Index.js will look for DB_URL variable on line 15.

2. authenticationService will need SALT_ROUNDS /integer/ variable for the password hasher at line 14, JWT_SECRET /string/ at line 45 and line 63, JWT_DURRATION /in ms/ in line 46

* In the client directory:

1. backendService.js: line 1 contains the local backend connection string, line 2 contains the production string. Uncomment line 1 in order to connect successfully.

### Recommended way to start the server and the client:

* Open two terminals
* In the first terminal - `cd server` followed by `npm install` . After node_modules are installed you can start the server by typing `npm start`. This will run the server on `port 3030`.
* In the second terminal - `cd client` followed by `npm install` . After node_modules are installed you can start the client by typing `npm start`. This will run the client on `port 3000`.

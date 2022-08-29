import { COULD_NOT_EVALUATE_REGISTRATION_STATE } from "../constants/fetchMessages";
import { handleRequest } from "../utils/requestHandler";
import { BASE_HEADERS, BASE_URL } from "./backendService";

const USER_END_POINT = '/authenticate';

const USERS_END_POINTS = {
    LOGIN: `${USER_END_POINT}/login`,
    REGISTER: `${USER_END_POINT}/register`,
    REGISTRATION_IS_COMPLETE: (username) => `${USER_END_POINT}/registration-completed/${username}`,
}

export async function login(credentials) {
    const response = await fetch(BASE_URL + USERS_END_POINTS.LOGIN, {
        method: 'POST',
        headers: BASE_HEADERS,
        body: JSON.stringify({
            username: credentials.Username,
            password: credentials.Password,
        })
    });
    await handleUserRequest(response);
    return response;
}

export async function register(credentials) {
    const response = await fetch(BASE_URL + USERS_END_POINTS.REGISTER, {
        method: 'POST',
        headers: BASE_HEADERS,
        body: JSON.stringify({
            password: credentials.Password,
            username: credentials.Username,
            email: credentials.Email,
            firstName: credentials['First name'],
        })
    });
    await handleUserRequest(response);
    return response;
}

export async function userRegistrationIsCompleted(username) {
    const response = await fetch(BASE_URL + USERS_END_POINTS.REGISTRATION_IS_COMPLETE(username));
    return handleRequest(response, COULD_NOT_EVALUATE_REGISTRATION_STATE);
}


export function saveUserData(data) {
    sessionStorage.setItem('sessionToken', data.sessionToken);
    sessionStorage.setItem('username', data.username);
}

async function handleUserRequest(requestResponse) {
    if (requestResponse.ok) {
        const data = await requestResponse.json();
        saveUserData(data);
    }
}

export function getUserToken() {
    const userToken = sessionStorage.getItem('sessionToken');

    if (userToken) {
        return userToken;
    }

    return null;
}

export function getCurrentUserUsername() {
    return sessionStorage.getItem('username');
}
import { COULD_NOT_EVALUATE_REGISTRATION_STATE } from "../constants/fetchMessages";
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
        body: JSON.stringify(credentials)
    });
    return response;
}

export async function register(credentials) {
    const response = await fetch(BASE_URL + USERS_END_POINTS.REGISTER, {
        method: 'POST',
        headers: BASE_HEADERS,
        body: JSON.stringify(credentials)
    });
    return response;
}

export async function userRegistrationIsCompleted(username) {
    const response = await fetch(BASE_URL + USERS_END_POINTS.REGISTRATION_IS_COMPLETE(username));
    return handleRequest(response, COULD_NOT_EVALUATE_REGISTRATION_STATE);
}
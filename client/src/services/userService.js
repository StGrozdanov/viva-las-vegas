import { COULD_NOT_FETCH_USERS } from "../constants/fetchMessages";
import { handleRequest } from "../utils/requestHandler";
import { BASE_URL, MODIFIYNG_OPERATIONS_HEADERS } from "./backendService";

export const USERS_PER_PAGE = 8;
export const USER_END_POINT = '/users';

const USERS_END_POINTS = {
    ALL_USERS: (page) => `${USER_END_POINT}?limit=${USERS_PER_PAGE}&skip=${(page - 1)}`,
    EXISTS_BY_USERNAME: (username) => `${USER_END_POINT}/exists-by-username/${username}`,
    EXISTS_BY_EMAIL: (email) => `${USER_END_POINT}/exists-by-email/${email}`,
    UPDATE_USER_DATA: (username) => `${USER_END_POINT}/${username}`,
}

export async function getAllUsers(page) {
    const response = await fetch(BASE_URL + USERS_END_POINTS.ALL_USERS(page));
    return handleRequest(response, COULD_NOT_FETCH_USERS);
}

export async function userExistsByUsername(username) {
    const response = await fetch(BASE_URL + USERS_END_POINTS.EXISTS_BY_USERNAME(username));
    return handleRequest(response, COULD_NOT_FETCH_USERS);
}

export async function userExistsByEmail(email) {
    const response = await fetch(BASE_URL + USERS_END_POINTS.EXISTS_BY_EMAIL(email));
    return handleRequest(response, COULD_NOT_FETCH_USERS);
}

export async function updateUserData(username, token, userData) {
    const response = await fetch(BASE_URL + USERS_END_POINTS.UPDATE_USER_DATA(username), {
        method: 'PUT',
        headers: MODIFIYNG_OPERATIONS_HEADERS(token),
        body: JSON.stringify({
            address1: userData['Address 1'],
            address2: userData['Address 2'],
            city: userData.City,
            country: userData.Country,
            postalCode: userData['Postal Code'],
            phoneNumber: userData['Phone Number'],
            bonusCode: userData['Bonus Code'],
        }),
    });
    return handleRequest(response, COULD_NOT_FETCH_USERS);
}
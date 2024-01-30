// Add the following import
import sendRequest from './send-request';
const BASE_URL = '/api/users';

// Refactored code below
export function signUp(userData) {
  return sendRequest(BASE_URL, 'POST', userData);
}

export function login(credentials) {
  return sendRequest(`${BASE_URL}/login`, 'POST', credentials);
}

export function checkToken() {
    return sendRequest(`${BASE_URL}/check-token`)
}

// const BASE_URL = "/api/users"

// export async function signUp(userData) {
//     const res = await fetch(BASE_URL, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(userData)
//     })

//     if (res.ok) {
//         return res.json()
//     } else {
//         throw new Error("Invalid sign up")
//     }
// }

// export async function login(userData) {
//     const res = await fetch(`${BASE_URL}/api/users/login`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(userData)
//     })

//     if (res.ok) {
//         return res.json()
//     } else {
//         throw new Error("Invalid login")
//     }
// }

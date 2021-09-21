import { AppOwnership } from "expo-constants";

// const baseUrl = 'http://localhost:8000/api/';
const baseUrl = 'http://da00-99-228-168-86.ngrok.io/api/';

const API = {
    //   async getCart() {
    //     const reqUrl = baseUrl + "start/"; 
    //     return fetch(reqUrl, {
    //       headers: {
    //         'content-type': 'application/json',
    //       },
    //     }).then((res) =>
    //         !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json(),
    //     );
    //   },
    async postStart() {
        return fetch(`${baseUrl}start/`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({}),
        }).then((res) =>
            !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json(),
        );
    },
    async postCheckout() {
        return fetch(`${baseUrl}checkout/`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({}),
        }).then((res) =>
            !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json(),
        );
    },
}

export default API;
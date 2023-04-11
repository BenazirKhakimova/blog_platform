import axios from "axios";

const _apiBase = "https://blog.kata.academy/api";
const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
};

export const signUp = async (data) => {
    const response = await axios.post(`${_apiBase}/users`, data, {
        headers,
    });
    return response.data;
};

export const logIn = async (data) => {
    const response = await axios.post(`${_apiBase}/users/login`, data, {
        headers,
    });
    return response.data;
};

export const upDate = async (data) => {
    const response = await axios.put(`${_apiBase}/user`, data.updatedUser, {
        headers: {
            ...headers,
            Authorization: `Bearer ${data.token}`,
        },
    });
    return response.data;
};

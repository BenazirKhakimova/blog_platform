import axios from "axios";

const _apiBase = "https://blog.kata.academy/api";
const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
};

export const addLike = async (slug, token) => {
    const response = await axios.post(
        `${_apiBase}/articles/${slug}/favorite`,
        {},
        {
            headers: {
                ...headers,
                Authorization: `Bearer ${token}`,
            },
        }
    );
    return response.data;
};

export const deleteLike = async (slug, token) => {
    const response = await axios.delete(
        `${_apiBase}/articles/${slug}/favorite`,
        {
            headers: {
                ...headers,
                Authorization: `Bearer ${token}`,
            },
        }
    );
    return response.data;
};

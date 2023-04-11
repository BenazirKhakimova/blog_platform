import axios from "axios";

const _apiBase = "https://blog.kata.academy/api";
const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
};

export const getArticles = async (offset, token) => {
    const response = await axios.get(
        `${_apiBase}/articles?limit=20&offset=${offset}`,
        {
            headers: {
                ...headers,
                Authorization: `Bearer ${token}`,
            },
        }
    );
    return response.data;
};

export const getOneArticle = async (slug, token) => {
    const response = await axios.get(`${_apiBase}/articles/${slug}`, {
        headers: {
            ...headers,
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
};

export const createArticle = async (newArticle, token) => {
    const response = await axios.post(`${_apiBase}/articles`, newArticle, {
        headers: {
            ...headers,
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
};

export const delArticle = async (slug, token) => {
    axios.delete(`${_apiBase}/articles/${slug}`, {
        headers: {
            ...headers,
            Authorization: `Bearer ${token}`,
        },
    });
};

export const editArticle = async (slug, editedArticle, token) => {
    const response = await axios.put(
        `${_apiBase}/articles/${slug}`,
        editedArticle,
        {
            headers: {
                ...headers,
                Authorization: `Bearer ${token}`,
            },
        }
    );
    return response.data;
};

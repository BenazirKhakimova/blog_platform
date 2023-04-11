import { createAsyncThunk } from "@reduxjs/toolkit";
import { addLike as add, deleteLike as del } from "../../api/likesApi";

export const addLike = createAsyncThunk("articles/addLike", ({ slug, token }) =>
    add(slug, token)
);

export const deleteLike = createAsyncThunk(
    "articles/deleteLike",
    ({ slug, token }) => del(slug, token)
);

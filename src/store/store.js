import { configureStore } from "@reduxjs/toolkit";
import articlesReducer from "./slices/articlesSlice";
import userReducer from "./slices/userSlice";
import likesReducer from "./slices/likesSlice";

export const store = configureStore({
    reducer: {
        articles: articlesReducer,
        user: userReducer,
        likes: likesReducer,
    },
});

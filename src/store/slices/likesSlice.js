import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    like: null,
};

const likesSlice = createSlice({
    name: "like",
    initialState,
    reducers: {},
    extraReducers(builder) {},
});

export default likesSlice.reducer;

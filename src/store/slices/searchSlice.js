import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "search",
    initialState: {
        value: "",
        isLoading: false,
        error: false
    },
    reducers: {
        updateSearch : (state, action) => {
            state.value = action.payload;
        }
    }
})

export const { updateSearch } = searchSlice.actions;
export default searchSlice.reducer;
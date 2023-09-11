import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    query: ""
}
const SearchSlice = createSlice({
    name: 'searchSlice',
    initialState,
    reducers: {
        trySearch(state, action) {
            state.query = action.payload;
        }
    }
})

export const { trySearch } = SearchSlice.actions
export default SearchSlice.reducer
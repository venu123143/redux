import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"
const initialState = {
    items: [],
    status: null,
    error: null,
}

export const productFetch = createAsyncThunk(
    "products/productsFetch",
    // this is payload creator
    async (id = null, { rejectWithValue }) => {
        try {
            const responce = await axios.get('http://localhost:5000/products')
            return responce?.data  // if not data in responce it wont give error.
        } catch (error) {
            return rejectWithValue("error occured while fetching products...")
        }
    }
)


const productSlice = createSlice({
    name: "products",
    initialState,
    // these reducers will generate action creators handle the state for those action creators
    reducers: {},
    // it will only handle action type.(when ever you have a action creator already defined use this )
    extraReducers: {
        // this is new way of changing the state.
        // it uses library called immer, to update state in immutable way.
        [productFetch.pending]: (state, action) => {
            state.status = "pending"
        },
        [productFetch.fulfilled]: (state, action) => {
            state.status = "pending"
            state.items = action.payload
        },
        [productFetch.rejected]: (state, action) => {
            state.status = "rejected"
            state.items = action.payload
        },
    }
})
export default productSlice.reducer
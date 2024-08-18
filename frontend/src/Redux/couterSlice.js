import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    data: [],
    status: 'idle',
    error: null
};

export const fetchData = createAsyncThunk('data/fetchData', async () => {
    const response = await axios.get('http://localhost:4000/api/courses/course'); 
    return response.data; 
});

const apiSlice = createSlice({
    name: 'api',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload; 
            })
            .addCase(fetchData.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error?.message || 'Something went wrong'; 
            });
    }
});

export const selectAllProducts = (state) => state.api.data;

export const selectProductById = (state, productId) =>
    state.api.data.find((item) => item.id === productId) || null; 


export default apiSlice.reducer;

import { configureStore } from '@reduxjs/toolkit';
import apiReducer from "./couterSlice"

export const store=configureStore(
    {
        reducer:{
            api:apiReducer
        }
    }
)
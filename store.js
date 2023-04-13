import { configureStore } from "@reduxjs/toolkit";
import SavedReducer from "./SavedReducer";

export default configureStore({
    reducer:{
        booking:SavedReducer
    }
})
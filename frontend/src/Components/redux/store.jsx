import {configureStore} from "@reduxjs/toolkit";
import authSlice from "./authSlice.jsx";

const store = configureStore({
    reducer:{
        auth:authSlice
    },
    preloadedState:{
        auth:{
            ruser: JSON.parse(localStorage.getItem("ruser")) || null,
        },
    },

});

export default store;
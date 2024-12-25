import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name:"auth",
    initialState:{
        ruser:null,        
    },
    reducers:{
        setRuser:(state,action)=>{
            state.ruser = action.payload;
            localStorage.setItem("ruser", JSON.stringify(action.payload));
        },
        logout(state){
            state.ruser = null;
            localStorage.removeItem("ruser");
        }
    }
});

export const {setRuser,logout} = authSlice.actions;
export default authSlice.reducer;
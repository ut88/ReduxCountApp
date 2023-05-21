
import { configureStore, createSlice } from "@reduxjs/toolkit";
const intialCounterState={counter:0,showCounter:true}
const counterSlice=createSlice({
    name:'counter',
    initialState:intialCounterState,
    reducers:{
        increament(state){
            state.counter++;
        },
        decrement(state){
            state.counter--;
        },
        toggleCounter(state){
            state.showCounter=!state.showCounter;
        }
    }
})
 
const initialAuthState={
    isAuthenticated:false
}

 const authSlice=createSlice({
    name:'authentication',
    initialState:initialAuthState,
    reducers:{
     login(state){
        state.isAuthenticated=true;
     },
     logout(state){
        state.isAuthenticated=false;
     } ,  
    }
 })
const store=configureStore({
   reducer:{counter:counterSlice.reducer,
    auth:authSlice.reducer
 }
});

export const counterAction=counterSlice.actions;
export const authActions=authSlice.actions;

export default store;
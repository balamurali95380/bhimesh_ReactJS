import { configureStore } from "@reduxjs/toolkit";
import Counterslice  from "./Counter/Conterslice";
import Userslice  from "./Usercrud/Userslice";




export const store = configureStore({
    reducer: {
        counter: Counterslice,
        user:Userslice,
    },
})
import { createSlice } from "@reduxjs/toolkit";

const user=[
    {
      "fname": "John",
      "lname": "Doe",
      "email": "john.doe@example.com",
      "password": "Password123!"
    },
    {
      "fname": "Jane",
      "lname": "Smith",
      "email": "jane.smith@example.com",
      "password": "SecurePass456!"
    },
    {
      "fname": "Michael",
      "lname": "Brown",
      "email": "michael.brown@example.com",
      "password": "MikePass789!"
    },
    {
      "fname": "Emily",
      "lname": "Davis",
      "email": "emily.davis@example.com",
      "password": "Em!ly2025"
    }
  ]
  

export const Userslice=createSlice({
    name:"user",
    initialState:user,
    reducers:{
        adduser:(state,action)=>{state.push(action.payload)
        },
        updateuser: (state, action) => {
            state[action.payload.index]=action.payload.value
          },
          
          deleteuser: (state, action) => {
            return state.filter((user) => user.email !== action.payload.email);
          }       

    }
})
export default Userslice.reducer
export const {adduser,updateuser,deleteuser}=Userslice.actions
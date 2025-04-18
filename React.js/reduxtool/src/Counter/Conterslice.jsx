import { createSlice } from "@reduxjs/toolkit";

export const Counterslice = createSlice({
    name: "counter",
    initialState: {
        count: 0,
    },
    reducers: {
        increment: (state) => { state.count++ },
        decrement: (state) => { state.count-- },
        reset: (state) => { state.count = 0 }
    }
})
export default Counterslice.reducer;
export const { increment, decrement, reset } = Counterslice.actions
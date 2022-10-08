import { createSlice } from '@reduxjs/toolkit'

// Define the initial state
const initialState = {
    orderData: [],
    targetData: []
}

// Delivery Changes slice
export const slice = createSlice({
    name: 'dashboard',
    initialState,
    reducers: {
        setOrders: (state, action) => {
            state.orderData = action.payload;
            return state;
        },
        setTargets: (state, action) => {
            state.targetData = action.payload
            return state;
        },
        getState: () => initialState,
    }
})


// Other code such as selectors can use the imported `RootState` type
export default slice.reducer
import { configureStore } from "@reduxjs/toolkit";
import BookingReducer from './booking/bookingSlice';

export const store = configureStore({
  reducer: {
    booking: BookingReducer,
  },
})

// // Subscribe to store updates to save state to local storage
// store.subscribe(() => saveToLocalStorage(store.getState()));

// Load state from local storage when the app starts
//store.dispatch(loadFromLocalStorage());
import { createSlice } from '@reduxjs/toolkit';

const bookingSlice = createSlice({
  name: 'booking',
  initialState: {values: { 'Reservation Date': '',
  'Reservation Time': '',
  'Number Of Diners': '',
  },},
  reducers: {
    loadFromLocalStorage: (state) => {
      try {
        const serializedState = localStorage.getItem('bookingState');
        if (serializedState === null) {
          return undefined;
        }
        state.values = JSON.parse(serializedState);
      } catch (error) {
        console.error('Error loading state from local storage:', error);
      }
    },
    saveToLocalStorage: (state,action) => {
      try {
        const newState = JSON.stringify(action.payload);
        localStorage.setItem('bookingState', newState);
      } catch (error) {
        console.error('Error saving state to local storage:', error);
      }
    }
  },
});

export const { loadFromLocalStorage, saveToLocalStorage } = bookingSlice.actions;

export default bookingSlice.reducer;
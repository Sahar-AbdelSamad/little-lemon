import { createSlice } from '@reduxjs/toolkit';

const bookingSlice = createSlice({
  name: 'booking',
  initialState: {
            values: { 'Reservation Date': '',
              'Reservation Time': '',
              'Number Of Diners': '',
              },
            bookingConfirmed: false,
            reserveButtonPressed: false,},
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
    },
    switchBookingConfirmation: state => {
      state.bookingConfirmed = !state.bookingConfirmed;
    },
    pressReservationBtnOnHomepage: state => {
      state.reserveButtonPressed = !state.reserveButtonPressed;
    },
  },
});

export const { loadFromLocalStorage, saveToLocalStorage, switchBookingConfirmation, pressReservationBtnOnHomepage } = bookingSlice.actions;

export default bookingSlice.reducer;
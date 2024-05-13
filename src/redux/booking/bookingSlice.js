import { createSlice } from '@reduxjs/toolkit';

const bookingSlice = createSlice({
  name: 'booking',
  initialState: {
            bookingConfirmed: false,
            reserveButtonPressed: false,
            formData: {},},
  reducers: {
    // loadFromLocalStorage: (state) => {
    //   try {
    //     const serializedState = localStorage.getItem('bookingState');
    //     if (serializedState === null) {
    //       return undefined;
    //     }
    //     state.formData = JSON.parse(serializedState);
    //   } catch (error) {
    //     console.error('Error loading state from local storage:', error);
    //   }
    // },
    // saveToLocalStorage: (state,action) => {
    //   try {
    //     const newState = JSON.stringify(action.payload);
    //     localStorage.setItem('bookingState', newState);
    //   } catch (error) {
    //     console.error('Error saving state to local storage:', error);
    //   }
    // },
    switchBookingConfirmation: state => {
      state.bookingConfirmed = !state.bookingConfirmed;
    },
    pressReservationBtnOnHomepage: state => {
      state.reserveButtonPressed = !state.reserveButtonPressed;
    },
    submitFormSuccess: (state, action) => {
      state.formData = action.payload;
    },
    clearForm: (state) => {
      state.formData = {};
      state.bookingConfirmed = false;
      state.reserveButtonPressed = false;
    },
  },
});

export const { loadFromLocalStorage, saveToLocalStorage, switchBookingConfirmation, pressReservationBtnOnHomepage, submitFormSuccess, clearForm } = bookingSlice.actions;

export default bookingSlice.reducer;
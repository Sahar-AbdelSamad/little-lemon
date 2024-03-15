import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from '../components/BookingForm';
import availableTimeReducer from '../reducers/availableTimesReducer.js';
import React from "react";
import userEvent from "@testing-library/user-event";

describe('<BookingForm/>', () => {
    const submitForm = jest.fn((e) => e.preventDefault());
    test('Renders the BookingForm heading', () => {
        render(<BookingForm />);
        const submitButton = screen.getByText(/Make Your reservation/i);
        expect(submitButton).toBeInTheDocument();
    })

    test('initializeTimes reducer function returns the correct expected value', () => {
        const initialState = [{ date: '2024-03-16', time: ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'] }];
        const action = { type: 'initialize time' };
        expect(availableTimeReducer(initialState, action)).toEqual(initialState);
    })

    test('updateTimes reducer function returns the correct expected value', () => {
        const initialState = [{ date: '2024-03-16', time: ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']}];
        const action = { type: 'update time', date: '2024-03-19' };
        const expected = [{ date: '2024-03-16', time: ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']},
        { date: '2024-03-19', time: ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']}];
        expect(availableTimeReducer(initialState, action)).toEqual(expected);
    })

    test("updateTimes reducer function doesn't add another object with a Date previously selected", () => {
        const initialState = [{ date: '2024-03-16', time: ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']}];
        const action = { type: 'update time', date: '2024-03-16' };
        const expected = [{ date: '2024-03-16', time: ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']}];
        expect(availableTimeReducer(initialState, action)).toEqual(expected);
    })

    test("It should render all form fields", () => {
        render(<BookingForm/>);
        expect(screen.getByLabelText('Choose Date')).toBeInTheDocument();
        expect(screen.getByLabelText('Choose Time')).toBeInTheDocument();
        expect(screen.getByLabelText('Choose number of diners')).toBeInTheDocument();
        expect(screen.getByLabelText('Choose the Occasion')).toBeInTheDocument();
        expect(screen.getByLabelText('Outside')).toBeInTheDocument();
        expect(screen.getByLabelText('Standard')).toBeInTheDocument();
    })
})
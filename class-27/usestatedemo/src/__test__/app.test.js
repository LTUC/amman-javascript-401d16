import React from "react";
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import App from '../Components/App';
import Person from '../Components/Person';


/*
what should we test
1- it loads and displays the starting application
2- can count >>> increase the counter
3- check the divisible
*/

it('it loads and displays the starting application', async () => {
    render(<App />);
    const personName = await waitFor(() => screen.getByTestId('name'));
    // console.log('******', personName);
    expect(personName.textContent).toBe('My name is abuessa');
})

// it('it loads and displays the starting application', async () => {
//     render(<App />);
//     const personName = await waitFor(() => screen.getAllByTestId('name'));
//     // console.log('******', personName);
//     expect(personName[0].textContent).toBe('My name is abuessa');
// })


it('can count', async () => {
    render(<App />);
    const button = screen.getByTestId('update-counter');
    const counter = screen.getByTestId('counter-value');
    fireEvent.click(button);
    // expect(counter).toHaveTextContent('Number of Clicks 1');
    expect(counter.textContent).toBe('Number of Clicks 1');
});

test('check the divisible', async () => {
    render(<App />);
    const button = screen.getByTestId('update-counter');
    const divisible = screen.getByTestId('divisible');

    for (let i = 1; i <= 5; i++) {
        fireEvent.click(button);
    }
    expect(divisible.textContent).toBe('it is a divisible of five yes');
});

test('change name', async () => {
    render(<Person />);
    const input = screen.getByTestId('changedName');
    fireEvent.change(input, {
        target: { value: "mohanad" }
    });
    const h2 = screen.getByTestId('name');
    expect(h2.textContent).toBe('My name is mohanad');
});
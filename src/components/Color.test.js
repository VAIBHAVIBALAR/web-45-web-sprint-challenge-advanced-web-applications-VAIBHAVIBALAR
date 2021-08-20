import React from 'react';
import MutationObserver from 'mutationobserver-shim';

import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Color from './Color';

test("Renders without errors with blank color passed into component", () => {
    //as it does not accept empty values I had to pass in code: to be empty or we can do  colors? in the test
    render(<Color color={{"code":""}}/>)
});
  
test("Renders the color passed into component", () => {
    render(<Color color={{"code": "#005370"}}/>)
});

test("Executes handleDelete and toggleEdit property when the 'x' icon is clicked", async () => {
    const fakeDel = jest.fn();
    const togEd = jest.fn();

    render(<Color deleteColor = {fakeDel} color={{"code": "#005370"}} toggleEdit={togEd}/>)

    const button = screen.queryByTestId("delete");
    userEvent.click(button)

    await waitFor(() =>{
    
    expect(togEd).toBeCalledTimes(1)
    expect(fakeDel).toBeCalledTimes(1);

    })
    
});

test("Executes setEditColor and toggleEdit property when color div is clicked", async () => {
    const fakeEdit = jest.fn();
    const togEd = jest.fn();

    render(<Color setEditColor={fakeEdit} color={{"code": "#005370"}} toggleEdit={togEd}/>)

    const button = screen.queryByTestId("color");
    userEvent.click(button)


    await waitFor(() =>{
        
        expect(fakeEdit).toBeCalledTimes(1);
        expect(togEd).toBeCalledTimes(1);
    })
    
});
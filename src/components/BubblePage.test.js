import React from 'react';
import MutationObserver from 'mutationobserver-shim';

import { queryByTestId, render, screen, waitFor} from "@testing-library/react";
import BubblePage from './BubblePage';

test("Renders without errors", ()=> {
    render(<BubblePage/>)
});

test("Renders appropriate number of colors passed in through mock", async ()=> {
    //Keep in mind that our service is called on mount for this component.
    // const testcolors = [
    //     {
    //         color: "aliceblue",
    //         code: {hex: "#f0f8ff"},
    //         id: 1
    //     },
    //     {
    //         color: "aqua",
    //         code: {hex: "#00ffff"},
    //         id: 2
    //     },
    //     {
    //         color: "softPink",
    //         code: {hex: "#dd99ba"},
    //         id: 3
    //     }
    // ]
    // const fetchFcolor = jest.fn();

    // render(<BubblePage colors={testcolors} getColors={fetchFcolor}/>)
    //const displ = queryByTestId("color")

   // expect(displ).toHaveValue(3);

    
});
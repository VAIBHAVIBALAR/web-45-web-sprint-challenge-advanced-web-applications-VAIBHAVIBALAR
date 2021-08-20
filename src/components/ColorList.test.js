import React from 'react';
import MutationObserver from 'mutationobserver-shim';

import { render, screen} from "@testing-library/react";
import ColorList from './ColorList';
import Color from './Color';


const testcolors = [
    {
        color: "aliceblue",
        code: {hex: "#f0f8ff"},
        id: 1
    },
    {
        color: "aqua",
        code: {hex: "#00ffff"},
        id: 2
    },
    {
        color: "softPink",
        code: {hex: "#dd99ba"},
        id: 3
    }
]

test("Renders an empty list of colors without errors", () => {
    render(<ColorList colors={[]} />)
});

test("Renders a list of colors without errors", () => {
    
    render(<ColorList colors={testcolors}/>)
});

test("Renders the EditForm when editing = true and does not render EditForm when editing = false", () => {
    const {rerender} = render(<ColorList editing={true} colors={testcolors}/>)
    const edit = screen.queryByText(/edit color/i)
    expect(edit).toBeInTheDocument();

    rerender(<ColorList editing={false} colors={testcolors}/>)
    const noEdit = screen.queryByText(/edit color/i)
    expect(noEdit).not.toBeInTheDocument();
});

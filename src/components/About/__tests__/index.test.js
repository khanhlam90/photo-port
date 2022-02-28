import React from 'react';

import { render, cleanup } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';

import About from '..';


// call cleanup fcn usingn afterEach global fcn from Jest
afterEach(cleanup);


// describe fcn to declare the component we're testing
describe('About component', () => {
    //renders About test
    // first test - baseline to verify that the component is rendering
    it('renders', () => {
        render(<About />);
    });

    // second test
    it('matches snapshot DOM node structure', () => {
        // render About
        const { asFragment } = render(<About />);

        expect(asFragment()).toMatchSnapshot();
    });
})
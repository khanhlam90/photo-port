import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

afterEach(cleanup);

describe('Nav component', () => {
    // baseline test
    it('renders', () => {
        render(<Nav />);
    });
   
    // snapshot test
    it('matches snapshot', () => {
        const { asFragment } = render(<Nav />);
        
        // assert value comparison
        expect(asFragment()).toMatchSnapshot();
    });
})

// To test if the camera emoji is visible
describe('emoji is visible', () => {
    // check if the emoji has been inserted into the <h2> element in the Nav component
    it('inserts emoji into the h2', () => {
        // Arrange
        const { getByLabelText } = render(<Nav />);

        // Assert  
        expect(getByLabelText('camera')).toHaveTextContent('📸');
    })
}) 

//  check to see if some of our links are visible
describe('links are visible', () => {
    // verify that the text content is being inserted into the <a> tags
    it('inserts text into the links', () => {

        // Arrange the queries
        const { getByTestId } = render(<Nav />);

        // Assert the valid outcomes using the matcher
        expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
        expect(getByTestId('about')).toHaveTextContent('About me');
    });
})
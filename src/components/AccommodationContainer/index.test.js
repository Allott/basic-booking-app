
import AccommodationContainer from './index';
import '@testing-library/jest-dom'
import { screen, render } from '@testing-library/react';

const testAccommodationValues = {
    name: 'Hotel123',
    description: 'description456'
}

describe('AccommodationContainer', () => {
    it('should render all calues', () => {
        render(<AccommodationContainer  {...testAccommodationValues}/>);
        expect(screen.getByText(/Hotel123/)).toBeInTheDocument();
        expect(screen.getByText(/description456/)).toBeInTheDocument();
    });
});
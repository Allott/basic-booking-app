
import AccommodationContainer from './index';
import '@testing-library/jest-dom'
import { screen, render } from '@testing-library/react';

const testAccommodationValues = {
    name: 'Hotel123',
    description: 'description456',
    type: {
        id: 123,
        name: 'HotelType'
    },
    facilities: [{
        id: 123,
        label: 'Facility789'
    }],
}

describe('AccommodationContainer', () => {
    it('should render all values', () => {
        render(<AccommodationContainer  {...testAccommodationValues}/>);
        expect(screen.getByText(/Hotel123/)).toBeInTheDocument();
        expect(screen.getByText(/description456/)).toBeInTheDocument();
        expect(screen.getByText(/HotelType/)).toBeInTheDocument();
        expect(screen.getByText(/Facility789/)).toBeInTheDocument();
    });
});
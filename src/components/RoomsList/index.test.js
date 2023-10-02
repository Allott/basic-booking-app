import RoomsList from ".";
import '@testing-library/jest-dom'
import { screen, render } from '@testing-library/react';
import accommodation_availability from '../../constants/accommodation_availability.json';

jest.mock('../../constants/accommodation_availability.json', () => ({
    rooms: [
        {
            id: 2,
            "available":5,
            "total":6
        }
    ]
}), { virtual: true });

const testList = [
    {
        id: 1,
        name: 'one',
        type: 'type1',
        max_occupancy: 1,
        min_occupancy: 1,
    },
    {
        id: 2,
        name: 'two',
        type: 'type2',
        max_occupancy: 2,
        min_occupancy: 1,
        price: {
            price: '$$$'
        }
    }
]

describe('AccommodationContainer', () => {
    it('should render all values up to max', () => {
        render(<RoomsList rooms={testList}/>);
        expect(screen.getByText(/one/)).toBeInTheDocument();
        expect(screen.getByText(/type1/)).toBeInTheDocument();
        expect(screen.getByText('Occupants: 1')).toBeInTheDocument();
        expect(screen.getByText(/Sold out/)).toBeInTheDocument();

        expect(screen.getByText(/two/)).toBeInTheDocument();
        expect(screen.getByText(/type2/)).toBeInTheDocument();
        expect(screen.getByText(/Occupants: 1-2/)).toBeInTheDocument();
        expect(screen.getByText(/\$\$\$/)).toBeInTheDocument();
        expect(screen.getByText(/5\/6 available/)).toBeInTheDocument();
        expect(screen.getByText(/Book/)).toBeInTheDocument();
    });
});
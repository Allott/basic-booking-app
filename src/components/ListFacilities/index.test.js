
import ListFacilities from './index';
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event';
import { screen, render, waitFor } from '@testing-library/react';

const testFacilities = [
    {
        id: 1,
        label: 'one'
    },
    {
        id: 2,
        label: 'two'
    },
    {
        id: 3,
        label: 'three'
    },
    {
        id: 4,
        label: 'four'
    },
]

describe('AccommodationContainer', () => {
    it('should render all values up to max', () => {
        render(<ListFacilities facilities={testFacilities} max={3}/>);
        expect(screen.getByText(/one/)).toBeInTheDocument();
        expect(screen.getByText(/two/)).toBeInTheDocument();
        expect(screen.getByText(/three/)).toBeInTheDocument();
        expect(screen.queryByText(/four/)).not.toBeInTheDocument();
    });
    it('should render all on click', async () => {
        render(<ListFacilities facilities={testFacilities} max={3}/>);
        expect(screen.getByText(/one/)).toBeInTheDocument();
        expect(screen.getByText(/two/)).toBeInTheDocument();
        expect(screen.getByText(/three/)).toBeInTheDocument();
        expect(screen.queryByText(/four/)).not.toBeInTheDocument();
        userEvent.click(screen.getByText(/Show more/));
        await waitFor(() => 
            expect(screen.getByText(/four/)).toBeInTheDocument()
        );
    });
});
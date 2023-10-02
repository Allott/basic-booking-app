import Index from './pages/index';
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event';
import { screen, render, waitFor } from '@testing-library/react';

describe('Integration Test ', () => {
    it('should render values', () => {
        render(<Index />);
        expect(screen.getByText(/Hotel Garni Almhof/)).toBeInTheDocument();
        expect(screen.getByText(/Alpine bliss!/)).toBeInTheDocument();
        expect(screen.getAllByText(/Guest House/)[0]).toBeInTheDocument();
        expect(screen.getAllByText(/Balcony or Terrace/)[0]).toBeInTheDocument();
    });
    it('should show available rooms on click', async () => {
        render(<Index />);
        expect(screen.queryByText('Austrian Twin/Double')).not.toBeInTheDocument();

        // Hotel 1
        userEvent.click(screen.getAllByText(/Book now/)[0]);
        await waitFor(() => 
            expect(screen.getAllByText('Austrian Twin/Double')[0]).toBeInTheDocument()
        );
        expect(screen.getAllByText('Sold out').length).toBe(2)

        // Hotel 2
        userEvent.click(screen.getAllByText(/Book now/)[0]);
        await waitFor(() => 
            expect(screen.getAllByText('Quad')[0]).toBeInTheDocument()
        );
        expect(screen.getAllByText('Sold out').length).toBe(3)
        expect(screen.getAllByText('Book').length).toBe(3)
    })
    it.skip('Should filter through the items with the search bar', ()=> {
        // TODO: Implement this test
    });
});
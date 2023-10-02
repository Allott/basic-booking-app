import Index from './index';
import '@testing-library/jest-dom'
import { screen, render } from '@testing-library/react';

describe('Integration Test ', () => {
    it('should render values', () => {
        render(<Index />);
        expect(screen.getByText(/Hotel Garni Almhof/)).toBeInTheDocument();
        expect(screen.getByText(/Alpine bliss!/)).toBeInTheDocument();
        expect(screen.getAllByText(/Guest House/)[0]).toBeInTheDocument();
        expect(screen.getAllByText(/Balcony or Terrace/)[0]).toBeInTheDocument();
    });
});
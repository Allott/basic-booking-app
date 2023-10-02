import Index from './index';
import '@testing-library/jest-dom'
import { screen, render } from '@testing-library/react';

describe('Integration Test ', () => {
    it('should render', () => {
        render(<Index />);
        expect(screen.getByText(/Hotel Garni Almhof/)).toBeInTheDocument();
        expect(screen.getByText(/Alpine bliss!/)).toBeInTheDocument();

        expect(screen.getByText(/Guest House/)).toBeInTheDocument();
        expect(screen.getByText(/Balcony or Terrace/)).toBeInTheDocument();
    });
});
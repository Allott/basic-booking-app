import Searchbar from './index';
import '@testing-library/jest-dom'
import { screen, render, waitFor } from '@testing-library/react';

const setSearch = jest.fn();

describe('Searchbar', () => {
    it('should render correctly', () => {
        render(<Searchbar setSearch={setSearch} />);
        expect(screen.getByText(/Search/)).toBeInTheDocument();
        expect(screen.getByPlaceholderText(/Enter a location/)).toBeInTheDocument();
    })
    it('should call setSearch on change with debounce', () => {
        render(<Searchbar setSearch={setSearch} />);
        const input = screen.getByPlaceholderText(/Enter a location/);
        input.value = 'Hoxxes';
        expect(input.value).toBe('Hoxxes');
        expect(setSearch).toHaveBeenCalledTimes(0);
        waitFor(() => {
            expect(setSearch).toHaveBeenCalledTimes(1);
            expect(setSearch).toHaveBeenCalledWith('Hoxxes');
        })  
    })
})
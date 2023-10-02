import Index from './index';
import { screen, render } from '@testing-library/react';

describe('getWeather', () => {
    it('should render', () => {
        render(<Index />);
        expect(screen.getByText('this will fail')).toBeInTheDocument();
    });
});
import { Price } from '../../types/AccommodationTypes';

import accommodation_availability from '../../constants/accommodation_availability.json';

const PriceAndAvailable = ({price, id}: {price: Price, id: number}) => {
    const availability = accommodation_availability.rooms.find(({id: _id}) => _id === id);
    return (
        <p>
            {price.price} - {availability?.available}/{availability?.total} available
        </p>
    )
}

export default PriceAndAvailable;
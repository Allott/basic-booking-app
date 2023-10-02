import { Room } from '../../types/AccommodationTypes';
import cn from 'classnames';
import Occupants from './Occupants';
import PriceAndAvailable from './PriceAndAvalibility';

const RoomsList = ({rooms}: {rooms: Room[]}) => {
    const sortedRoomsList = rooms.sort((a, b) => {
        const aPrice = !!a?.price;
        const bPrice = !!b?.price;
        if(aPrice === bPrice) return 0;
        if(aPrice) return -1;
        return 1;
    });

    return (
        <div className='flex flex-col space-y-1'>
            {sortedRoomsList.map((room: Room) => {
                const { id, name, type, max_occupancy, min_occupancy, price } = room;
                const hasPrice = !!price;
                return (
                    <div key={room.id} className='border-2 rounded bg-emerald-200 border-emerald-600 p-2'>
                        <div className='flex flex-row justify-between items-center'>
                            <h2 className='font-semibold'>{name}</h2>
                            <button
                                type='button'
                                className={
                                    cn('bg-emerald-600 text-white font-semibold py-2 px-4 rounded', {'bg-emerald-600': hasPrice}, {'bg-gray-400': !hasPrice})}
                            >
                                {hasPrice? 'Book' : 'Sold out'}
                            </button>
                        </div>
                        <div className='mt-2 md:mt-0'>
                            {price && (
                                <PriceAndAvailable price={price} id={id} />
                            )}
                            <div className='flex flex-row text-sm italics space-x-4'>
                                <p>{type}</p>
                                <Occupants max_occupancy={max_occupancy} min_occupancy={min_occupancy} />
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default RoomsList;
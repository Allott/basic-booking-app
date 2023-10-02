import { Room } from '../../types/AccommodationTypes';
const Occupants = ({max_occupancy, min_occupancy}: {max_occupancy: number, min_occupancy: number}) => {
    if(max_occupancy === min_occupancy) return (
        <p>Occupants: {max_occupancy}</p>
    )
    return (
        <p>Occupants: {max_occupancy}-{min_occupancy}</p>
    )
}
const RoomsList = ({rooms}: {rooms: Room[]}) => {
    return (
        <div className='flex flex-col space-y-1'>
            {rooms.map((room: Room) => {
                const { name, type, max_occupancy, min_occupancy, price } = room;
                return (
                    <div key={room.id} className='border-2 rounded bg-emerald-200 border-emerald-600 p-2'>
                        <div className='flex flex-row justify-between items-center'>
                            <h2 className='font-semibold'>{name}</h2>
                            <button
                                type='button'
                                className='bg-emerald-600 text-white font-semibold py-2 px-4 rounded'
                            >
                                Book
                            </button>
                        </div>
                        <div className='flex flex-row text-sm italics space-x-4 mt-2 md:mt-0'>
                            <p>{type}</p>
                            <Occupants max_occupancy={max_occupancy} min_occupancy={min_occupancy} />
                            {price && (<p>{price.price}</p>)}
                        </div>
                       
                    </div>
                )
            })}
        </div>
    )
}

export default RoomsList;
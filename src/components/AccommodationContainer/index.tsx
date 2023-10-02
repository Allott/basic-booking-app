import { useState } from 'react';
import { AccommodationType } from '../../types/AccommodationTypes';
import ListFacilities from '../ListFacilities';
import RoomsList from '../RoomsList';
const AccommodationContainer = (accommodation: AccommodationType) => {
    const [showRooms, setShowRooms] = useState(false);
    const { name, description, type:{name: type}, facilities, rooms } = accommodation;
    const toggleShowRooms = () => {
        setShowRooms(!showRooms);
    }

    return (
        <div className='border-2 rounded bg-emerald-50 border-emerald-600 p-4 '>
            <div className='md:flex md:flew-row md:space-x-4 justify-between md:mb-4'>
                <div>
                    <h1 className='text-lg font-semibold text-ellipsis'>{name}</h1>
                    <div className='md:flex md:flex-row text-sm mb-4'>
                        <p className='mr-2 font-semibold'>{type}</p>
                        <ListFacilities facilities={facilities} />
                    </div>
                    <div className='text-sm font-light max-w-2xl' dangerouslySetInnerHTML={{__html: description}} />
                </div>
                <div className='flex flex-row md:flex-col justify-center md:justify-start my-3'>
                    <button
                        className='bg-emerald-600 text-white font-semibold py-2 px-4 rounded w-40'
                        type='button'
                        onClick={()=>toggleShowRooms()}
                    >
                        {showRooms ? 'Close' : 'Book now'}
                    </button>
                </div>
            </div>
            {showRooms && (
                <RoomsList rooms={rooms}/>
            )}
        </div>
    )
}

export default AccommodationContainer;
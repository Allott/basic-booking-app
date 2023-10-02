import { AccommodationType } from '../../types/AccommodationTypes';
import ListFacilities from '../ListFacilities';
const AccommodationContainer = (accommodation: AccommodationType) => {
    const { name, description, type:{name: type}, facilities } = accommodation;
    return (
        <div className='md:flex md:flew-row space-x-4 border-2 rounded bg-emerald-50 border-emerald-600 p-4'>
            <div>
                <h1 className='text-lg font-semibold text-ellipsis'>{name}</h1>
                <div className='md:flex md:flex-row text-sm mb-4'>
                    <p className='mr-2 font-semibold'>{type}</p>
                    <ListFacilities facilities={facilities} />
                </div>
                <div className='text-sm font-light' dangerouslySetInnerHTML={{__html: description}} />
            </div>
            <div>sidebar</div>
        </div>

    )
}

export default AccommodationContainer;
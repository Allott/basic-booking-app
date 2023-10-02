import { AccommodationType } from '../../types/AccommodationTypes';

const AccommodationContainer = (accommodation: AccommodationType) => {
    const { name, description } = accommodation;
    return (
        <div className='md:flex md:flew-row space-x-4 border-2 rounded bg-emerald-50 border-emerald-600 p-2'>
            <div>
                <h1 className='text-lg font-semibold'>{name}</h1>
                <div className='text-sm font-light' dangerouslySetInnerHTML={{__html: description}} />
            </div>
            <div>Side Stuff</div>
        </div>

    )
}

export default AccommodationContainer;
import { useState } from 'react';
import accommodation from '../constants/accommodation.json'
import AccommodationContainer from '../components/AccommodationContainer';
import SearchBar from '../components/SearchBar'
import filterAccommodation from '../utils/filterAccommodation'

const Home = () => {
  const [search, setSearch] = useState<string>('')

  const filteredAccommodations = filterAccommodation(accommodation.accommodations, search);

  return (
    <main>
      <div className='p-10'>
        <div className='mb-4'>
          <SearchBar setSearch={setSearch}/>
        </div>
        <p className='mb-2'>{filteredAccommodations.length} - results found</p>
        <div className='flex flex-col space-y-4'>
          {filteredAccommodations.map((accommodation) => (
            <AccommodationContainer key={accommodation.id} {...accommodation} />
          ))}
        </div>
      </div>
    </main>
  )
}


export default Home;

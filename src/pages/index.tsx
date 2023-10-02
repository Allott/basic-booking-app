import accommodation from '../constants/accommodation.json'
import AccommodationContainer from '../components/AccommodationContainer';

const Home = () => {

  return (
    <main>
      <div className='p-10'>
        <div className='flex flex-col space-y-4'>
          {accommodation.accommodations.map((accommodation) => (
            <AccommodationContainer key={accommodation.id} {...accommodation} />
          ))}
        </div>
      </div>
    </main>
  )
}

export default Home;
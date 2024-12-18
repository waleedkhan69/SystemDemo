import { FaAddressCard, FaPhoneAlt } from 'react-icons/fa';
import { HiAcademicCap } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../../context/context';

const CardsComponent = () => {
  const { persons } = useGlobalContext();
  return (
    <section className='grid mt-8 place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4'>
      {persons.map(
        ({ id, bg, name, telephone, address, description, profileImage }) => (
          <div
            key={id}
            className='relative w-full max-w-sm rounded-lg overflow-hidden shadow-lg bg-white flex flex-col h-full'
          >
            <div className='h-32 w-full relative'>
              <img
                src={bg}
                alt='Background'
                className='w-full h-full object-cover'
              />
            </div>

            {/* Profile Image */}
            <div className='absolute top-16 left-1/2 transform -translate-x-1/2 w-24 h-24'>
              <img
                src={profileImage}
                alt='Profile'
                className='rounded-full w-full h-full border-4 border-white object-cover'
              />
            </div>

            {/* Profile Info */}
            <div className='p-6 mt-12 flex-grow flex flex-col items-start'>
              <h3 className='text-xl font-bold'>{name}</h3>
              <p className='text-gray-600 flex items-center justify-start gap-2'>
                <span>
                  <FaPhoneAlt />
                </span>
                {telephone}
              </p>
              <p className='text-gray-600 flex items-center justify-start gap-2'>
                <span>
                  <HiAcademicCap />
                </span>
                {description}
              </p>
              <p className='text-gray-600 flex items-center justify-start gap-2'>
                <span>
                  <FaAddressCard />
                </span>
                {address}
              </p>
            </div>

            {/* Buttons */}
            <div className='flex justify-around p-4'>
              <Link
                to={`/profile/content/${id}`}
                className='bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg px-4 py-2 transition'
              >
                Edit Profile
              </Link>
              <button className='bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg px-4 py-2 transition'>
                Show Profile
              </button>
            </div>
          </div>
        )
      )}
    </section>
  );
};

export default CardsComponent;

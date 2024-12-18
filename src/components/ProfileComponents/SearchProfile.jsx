import { FaPlus } from 'react-icons/fa';
import { useGlobalContext } from '../../context/context';
const SearchProfile = () => {
  const { toggleModal } = useGlobalContext();
  return (
    <main className='flex flex-col items-start justify-center gap-4'>
      <div className='flex flex-col md:flex-row gap-4 w-full flex-wrap'>
        <h1 className='text-2xl font-bold'>Profile</h1>

        <input
          type='text'
          placeholder='Search'
          className='flex-1 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500  rounded-full outline'
        />
        <select
          className='  p-2 rounded-full outline focus:ring-2 focus:ring-blue-500 focus:outline-none'
          name='options'
          id='options'
        >
          <option value=''>Sort</option>
          <option value='option1'>Option 1</option>
          <option value='option2'>Option 2</option>
          <option value='option3'>Option 3</option>
        </select>
      </div>
      <div className='w-full flex justify-center'>
        <button
          className='flex items-center justify-center gap-2 rounded-full px-10 py-3  border-2 font-semibold  border-[#AD7816]'
          onClick={toggleModal}
        >
          <span>
            {' '}
            <FaPlus />{' '}
          </span>
          Create new Cart{' '}
        </button>
      </div>
    </main>
  );
};
export default SearchProfile;

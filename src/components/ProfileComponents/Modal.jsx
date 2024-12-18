import { IoClose } from 'react-icons/io5';
import { useGlobalContext } from '../../context/context';

const Modal = () => {
  const { toggleModal, isOpen, handleSubmit } = useGlobalContext();

  return (
    <>
      {/* Main modal */}
      {isOpen && (
        <div
          aria-hidden={!isOpen}
          className='fixed inset-0 flex items-center justify-center bg-gray-600 bg-opacity-50 z-50'
        >
          <div className='w-full max-w-md'>
            {/* Modal content */}
            <div className='bg-white rounded-lg shadow-lg'>
              {/* Modal header */}
              <div className='flex justify-end p-4'>
                <button
                  onClick={toggleModal}
                  className='text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center'
                >
                  <IoClose className='font-bold text-3xl' />
                </button>
              </div>

              {/* Modal body */}
              <div className='p-4 space-y-4'>
                <form
                  onSubmit={handleSubmit}
                  className='flex items-center justify-center flex-col'
                >
                  <div className='flex flex-wrap  gap-4 '>
                    <label className='block text-sm font-medium text-gray-700'>
                      Name
                    </label>
                    <input
                      type='text'
                      name='name'
                      required
                      placeholder='Enter Name'
                      className=' w-full rounded-lg px-2 py-1 outline'
                    />
                    <label className='block text-sm font-medium text-gray-700'>
                      Email
                    </label>
                    <input
                      type='email'
                      name='email'
                      required
                      placeholder='Enter Email'
                      className='  w-full px-2  rounded-lg py-1 outline'
                    />
                  </div>
                  <div className='flex gap-4 items-center justify-center mt-4'>
                    {' '}
                    <button
                      onClick={toggleModal}
                      type='button'
                      className='  font-medium rounded-full outline text-sm px-8 py-2.5'
                    >
                      Cancel
                    </button>
                    <button
                      type='submit'
                      className='bg-[#DAA326] hover:bg-[#DAA340] transition duration-150 font-medium rounded-full  text-sm px-8 py-2.5'
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;

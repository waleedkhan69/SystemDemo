import { Fragment, useState } from 'react';


const ProfileLead = () => {
 

  // Lead mode state
  const [leadMode, setLeadMode] = useState(false);
  return (
    <Fragment>
      <div>
        <button className='bg-gray-200 rounded-full px-8 py-3 font-semibold mt-5'>
          Lead Capture
        </button>
      </div>
      <div className='mt-8'>
        <h1 className='font-medium text-lg md:text-xl'>Lead Capture Mode</h1>
        <div>
          <div className='flex items-center justify-between p-2 flex-wrap lg:flex-nowrap gap-2 lg:gap-0'>
            <p className='text-sm md:text-base'>
              When Lead Capture mode is enabled, the lead form will pop up <br />
              as soon as your profile is shared
            </p>
            <button
              className={`w-12 h-6 rounded-full ${
                leadMode ? 'bg-blue-600' : 'bg-gray-300'
              } transition-colors duration-200 ease-in-out`}
              onClick={() => setLeadMode(!leadMode)}
            >
              <div
                className={`w-4 h-4 rounded-full bg-white shadow-md transform transition-transform duration-200 ease-in-out ${
                  leadMode ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
        </div>
      </div>
      <div className='flex flex-col justify-between gap-4 items-start'>
        <div className='flex flex-col'>
          <label htmlFor="formHeader" className='font-medium text-sm md:text-base'>
            Form Header
          </label>
          <input
            type="text"
            id="formHeader"
            className='outline-none border-b-black border-b-[1px] w-full md:w-96'
          />
        </div>
        <label htmlFor="inputField" className='font-medium text-sm md:text-base'>
          Input Field
        </label>
        <p
          id="inputField"
          className='outline-none border-none w-full md:w-96'
        >
          When Lead Capture mode is enabled, the lead form will pop up as soon as your profile is shared
        </p>
      </div>
      <div className='bg-white shadow-xl mt-8 p-4 rounded'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center'>
          <button className='bg-yellow-400 rounded-full p-2 w-full sm:w-32'>
            Full Name
          </button>
          <button className='bg-yellow-400 rounded-full p-2 w-full sm:w-32'>
            Email
          </button>
          <button className='bg-yellow-400 rounded-full p-2 w-full sm:w-32'>
            Phone Number
          </button>
          <button className='border-black border-[1px] hover:border-none hover:bg-yellow-400 rounded-full p-2 w-full sm:w-32'>
            Job Title
          </button>
          <button className='border-black border-[1px] hover:border-none hover:bg-yellow-400 rounded-full p-2 w-full sm:w-32'>
            Company
          </button>
          <button className='border-black border-[1px] hover:border-none hover:bg-yellow-400 rounded-full p-2 w-full sm:w-32'>
            Note
          </button>
        </div>
      </div>
      <div className='text-end mt-8'>
        <button className='bg-yellow-400 rounded-full p-2 hover:bg-yellow-300 w-full sm:w-32'>
          Update
        </button>
      </div>
    </Fragment>
  );
};

export default ProfileLead;
import React from 'react';
import { BsQrCode } from 'react-icons/bs';
import { GoDownload } from "react-icons/go";


const ProfileQR = () => {
  return (
    <div className='w-full lg:w-72 p-4 flex flex-col gap-20 h-52 '>
      <div>
        <h1 className='text-xl font-semibold'>User's QR Code</h1>
      </div>
      <div className='flex justify-center items-center'>
        <BsQrCode className='w-full h-full text-gray-900' />
      </div>
      <div className='flex justify-center'>
        <button className='bg-yellow-500 text-white w-full rounded-full py-2 flex items-center justify-center hover:bg-yellow-600 transition duration-300'>
          <span className='mr-2 text-2xl'><GoDownload /></span>
          Download QR Code
        </button>
      </div>
    </div>
  );
};

export default ProfileQR;

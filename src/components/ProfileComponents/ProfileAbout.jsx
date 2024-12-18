import React, { Fragment, useContext, useState } from 'react';
import { LiaToggleOnSolid } from 'react-icons/lia';
import { BiSolidToggleLeft } from 'react-icons/bi';
import { CiCirclePlus } from 'react-icons/ci';
import { colorContext } from '../../context/colorContext';
import { useGlobalContext } from '../../context/context';

const ProfileAbout = () => {
  const { colorArray, handleColorChange } = useContext(colorContext);
  const [isDataVisible, setIsDataVisible] = useState(true);
  const [toggleIcon, setToggleIcon] = useState(<LiaToggleOnSolid className='text-3xl text-blue-600' />);
  const {data} = useGlobalContext();


  if(!data){
    return <p>Loading...</p>;
  }
  const { bg , description, profileImage, telephone, name,address,extraInfo, email } = data;

  const handleToggle = () => {
    setIsDataVisible(!isDataVisible);
    setToggleIcon(
      isDataVisible ? (
        <BiSolidToggleLeft className='text-3xl text-blue-600' />
      ) : (
        <LiaToggleOnSolid className='text-3xl text-blue-600' />
      )
    );
  };

  return (
    <Fragment>
      <div className='p-3'>
        <div className='bg-gray-100 rounded-full max-w-full p-3 mb-4 text-center'>
          Complete Your Profile
        </div>

        <div className='p-4 shadow-md'>
          {isDataVisible && (
           <Fragment>
           {colorArray.map((item, index) => (
             <div
               key={index}
               className='flex flex-col md:flex-row justify-between items-center mb-4 max-w-xl p-3 bg-gray-200 rounded-full'
             >
               <p className='w-full md:w-40 text-lg font-semibold text-center md:text-left'>{item.typecolor}</p>
               <p className='text-center md:text-left'>{item.Edit}</p>
               <div className='flex gap-2 flex-wrap justify-center'>
                 {item.colors.map((color, colorIndex) => (
                   <div
                     key={colorIndex}
                     className='w-5 h-5 rounded-full cursor-pointer'
                     style={{ backgroundColor: color }}
                     onClick={() => handleColorChange(item.typecolor, color)}
                   ></div>
                 ))}
               </div>
             </div>
           ))}
         </Fragment>
         
          )}

          <div className='max-w-xl rounded-full flex items-center justify-between p-3 gap-4 bg-gray-200'>
            <span>Show or hide the data of your profile</span>
            <div onClick={handleToggle} className='cursor-pointer'>
              {toggleIcon}
            </div>
          </div>
        </div>

        <div className='text-center pt-3'>
          <div className=''>
          <img
              src={bg} 
              alt="Profile"
              className="w-[100%] object-cover rounded-lg"
            />
          </div>
        </div>

        <div className='flex justify-center p-4'>
          <div className='h-32 w-32 sm:h-40 sm:w-40 flex justify-center relative items-center font-medium rounded-full'>
          <img
              src={profileImage} 
              alt="Profile"
              className="h-full w-full rounded-full object-cover"
            />
          </div>
        </div>

        <div className='max-w-2xl mx-auto'>
          <form>
            <div className='flex flex-col sm:flex-row justify-evenly gap-4'>
              <input
                type='text'
                name='name'
                defaultValue={name}
                className='bg-gray-100 p-3 rounded-full w-full'
                placeholder='Please Enter your Name'
              />
              <input
                type='phone'
                name='number'
                defaultValue={telephone}
                className='bg-gray-100 p-3 rounded-full w-full'
                placeholder='Please Enter your Number'
              />
            </div>

            <div className='flex flex-col sm:flex-row justify-evenly gap-4 mt-5'>
              <input
                type='email'
                name='email'
                defaultValue={email}
                className='bg-gray-100 p-3 rounded-full w-full'
                placeholder='Please enter your email'
              />
              <input
                type='text'
                name='address'
                defaultValue={address}
                className='bg-gray-100 p-3 rounded-full w-full'
                placeholder='Please enter your Address'
              />
            </div>

            <input
              type='text'
              name='extraInfo'
              defaultValue={extraInfo}
              className='bg-gray-100 p-3 rounded-full w-full mt-5'
              placeholder='Enter Extra Info'
            />

            <div className='flex justify-center mt-4'>
              <textarea
                name='description'
                defaultValue={description}
                placeholder='Enter Description'
                className='bg-gray-100 w-full p-3 rounded-lg'
              ></textarea>
            </div>
            <div className='flex justify-end gap-4 mt-6'>
              <button type='button' className='rounded-full border-black border-[1px] px-6 py-3'>
                Cancel
              </button>
              <button type='submit' className='rounded-full bg-yellow-500 text-white border-[1px] px-6 py-3'>
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default ProfileAbout;

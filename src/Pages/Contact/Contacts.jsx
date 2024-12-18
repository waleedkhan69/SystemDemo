import { useState } from 'react';

const Contacts = () => {
  const [formerror, setFormError] = useState({});
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    Email: '',
  });
  const handlSubmit = (e) => {
    e.preventDefault();
    let formerror = {};
    if (!formData.firstName) {
      formerror.name = 'first name is required';
    }
    if (!formData.lastName) {
      formerror.lastname = 'last name is required';
    }
    if (!formData.Email) {
      formerror.email = 'Email is required';
    }
    setFormError(formerror);
    if (Object.keys(formerror).length === 0) {
    }

    console.log('submit', formData);
  };
  const handleChange = (e) => {
    const { id, value } = e.target;
    console.log('id', id);
    console.log('value', value);

    setFormData({
      ...formData,
      [id]: value,
    });
  };
  return (
    <>
      <div className='flex justify-evenly  h-[60vh] items-center '>
        <div className='w-[50%]  flex flex-col justify-center items-center'>
          <h1 className='text-2xl font-semibold'>Contact us</h1>
          <p>
            Please if your looking for a Expriance Developer for your business
            site or other purpus contact us we build your website in affordable
            price
          </p>
        </div>
        <div className=' p-4 bg-gray-200'>
          <form action='' onSubmit={handlSubmit}>
            <div className='flex justify-center gap-3'>
              <div className='flex flex-col'>
                <label htmlFor='' className='text-gray-700 font-medium'>
                  First Name{' '}
                </label>

                <input
                  type='text'
                  id='firstName'
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder='Enter your  first Name'
                  className='outline-none rounded p-1 bg-gray-100 '
                />
                {formerror.name && (
                  <p className='text-red-600'>{formerror.name}</p>
                )}
              </div>
              <div className='flex flex-col'>
                <label className='text-gray-700 font-medium' htmlFor=''>
                  Last Name{' '}
                </label>
                <input
                  type='text'
                  id='lastName'
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder='Enter your  first Name'
                  className='outline-none rounded p-1 bg-gray-100 '
                />
              </div>
            </div>
            <div className='flex flex-col'>
              <label htmlFor='' className='text-gray-700 font-medium'>
                Email
              </label>
              <input
                type='email'
                id='Email'
                value={formData.Email}
                onChange={handleChange}
                placeholder='Enter your  first Name'
                className='outline-none rounded p-1 bg-gray-100'
              />
              {formerror.email && (
                <p className='text-red-600'>{formData.email}</p>
              )}
            </div>
            <div className='flex flex-col'>
              <label htmlFor='' className='text-gray-700 font-medium'>
                What is your Requirement
              </label>
              <textarea name='' className='outline-none rounded bg-gray-100'>
                What you want?
              </textarea>
            </div>
            <div className='text-end mt-3'>
              <button className='bg-green-600 text-white hover:bg-green-700 px-4 py-2 rounded-md'>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Contacts;

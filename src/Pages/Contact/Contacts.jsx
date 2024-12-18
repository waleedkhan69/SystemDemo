import { useState } from 'react';

const Contacts = () => {
  const [formError, setFormError] = useState({});
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    requirement: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};

    if (!formData.firstName.trim()) {
      errors.firstName = 'First name is required';
    }

    if (!formData.lastName.trim()) {
      errors.lastName = 'Last name is required';
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Enter a valid email address';
    }

    if (!formData.requirement.trim()) {
      errors.requirement = 'Please specify your requirement';
    }

    setFormError(errors);

    if (Object.keys(errors).length === 0) {
      console.log('Form Submitted:', formData);
      // Reset form after submission
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        requirement: '',
      });
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;

    setFormData({
      ...formData,
      [id]: value,
    });
  };

  return (
    <div className='flex justify-evenly h-[60vh] items-center mt-9'>
      <div className='w-[50%] flex flex-col justify-center items-center'>
        <h1 className='text-3xl font-semibold text-gray-800'>Contact Us</h1>
        <p className='text-gray-600 mt-2 text-center'>
          Are you looking for an experienced developer to build your business or
          personal website? Contact us today, and we'll create a professional,
          high-quality website at an affordable price.
        </p>
      </div>
      <div className='p-6 bg-gray-100 rounded-lg shadow-md w-[40%]'>
        <form onSubmit={handleSubmit}>
          <div className='grid grid-cols-2 gap-4'>
            {/* First Name */}
            <div className='flex flex-col'>
              <label htmlFor='firstName' className='text-gray-700 font-medium'>
                First Name
              </label>
              <input
                type='text'
                id='firstName'
                value={formData.firstName}
                onChange={handleChange}
                placeholder='Enter your first name'
                className='outline-none rounded p-2 bg-white border border-gray-300'
              />
              {formError.firstName && (
                <p className='text-red-600 text-sm'>{formError.firstName}</p>
              )}
            </div>
            {/* Last Name */}
            <div className='flex flex-col'>
              <label htmlFor='lastName' className='text-gray-700 font-medium'>
                Last Name
              </label>
              <input
                type='text'
                id='lastName'
                value={formData.lastName}
                onChange={handleChange}
                placeholder='Enter your last name'
                className='outline-none rounded p-2 bg-white border border-gray-300'
              />
              {formError.lastName && (
                <p className='text-red-600 text-sm'>{formError.lastName}</p>
              )}
            </div>
          </div>

          {/* Email */}
          <div className='flex flex-col mt-4'>
            <label htmlFor='email' className='text-gray-700 font-medium'>
              Email
            </label>
            <input
              type='email'
              id='email'
              value={formData.email}
              onChange={handleChange}
              placeholder='Enter your email address'
              className='outline-none rounded p-2 bg-white border border-gray-300'
            />
            {formError.email && (
              <p className='text-red-600 text-sm'>{formError.email}</p>
            )}
          </div>

          {/* Requirement */}
          <div className='flex flex-col mt-4'>
            <label htmlFor='requirement' className='text-gray-700 font-medium'>
              What is Your Requirement?
            </label>
            <textarea
              id='requirement'
              value={formData.requirement}
              onChange={handleChange}
              placeholder='Describe your project or requirements'
              className='outline-none rounded p-2 bg-white border border-gray-300'
              rows='4'
            ></textarea>
            {formError.requirement && (
              <p className='text-red-600 text-sm'>{formError.requirement}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className='text-end mt-6'>
            <button
              type='submit'
              className='bg-green-600 text-white hover:bg-green-700 px-6 py-2 rounded-md font-medium'
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contacts;

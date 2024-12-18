import React, { useState } from 'react';

const SettingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    email: '',
    phone: '',
    description: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.location.trim()) {
      newErrors.location = 'Location is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email address is invalid';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{11}$/.test(formData.phone)) {
      newErrors.phone = 'Phone number must be 11 digits';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
    
    }
  };

  return (
    <div className="max-w-lg mx-auto p-8 mt-10 bg-white  rounded-lg">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-black 
            font-normal">Name</label>
            <input
              type="text"
              name="name"
              autoComplete='off'

              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-2 bg-gray-200 text-black outline-none border-none rounded-full focus:outline-none focus:ring-2 ${errors.name ? 'ring-red-500' : 'focus:ring-blue-500'}`}
              placeholder="Enter your name"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>

          <div>
            <label className="block text-black 
            font-normal">Location</label>
            <input
              type="text"
              name="location"
              autoComplete='off'
              value={formData.location}
              onChange={handleChange}
              className={`w-full bg-gray-200 border-none px-4 py-2 border rounded-full focus:outline-none focus:ring-2 ${errors.location ? 'ring-red-500' : 'focus:ring-blue-500'}`}
              placeholder="Enter your location"
            />
            {errors.location && <p className="text-red-500 text-sm">{errors.location}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-black 
            font-normal">Email</label>
            <input
              type="email"
              name="email"
               autoComplete='off'
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 bg-gray-200 border-none py-2 border rounded-full focus:outline-none focus:ring-2 ${errors.email ? 'ring-red-500' : 'focus:ring-blue-500'}`}
              placeholder="Enter your email"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>
          <div>
            <label className="block text-black 
            font-normal">Phone Number</label>
            <input
              type="text"
              name="phone"
               autoComplete='off'
              value={formData.phone}
              onChange={handleChange}
              className={`w-full px-4 bg-gray-200 border-none shadow-md py-2 border rounded-full focus:outline-none focus:ring-2 ${errors.phone ? 'ring-red-500' : 'focus:ring-blue-500'}`}
              placeholder="Enter your phone number"
            />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-black 
          font-normal">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-gray-200 border-none shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg"
            placeholder="Enter a description"
            rows="4"
          />
        </div>

        <div className="flex justify-end bg-gray-200 rounded-full">
          <button
            type="submit"
            className="font-medium text-white px-12 py-3 rounded-full bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default SettingForm;


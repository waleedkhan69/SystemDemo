import React, { useState } from 'react';
import { RefreshCw } from 'lucide-react';
import { motion } from 'framer-motion';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { InfoIcon } from 'lucide-react';


const AnalyticCard = ({ title, value, percentage = 75, itemkey }) => (
  <motion.div
    className='bg-white rounded-lg shadow p-4'
    key={itemkey}
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: 'easeOut' }}
  >
    <h3 className='text-lg font-semibold mb-2'>{title}</h3>
    <div className='flex items-center'>
      <span className='text-4xl font-bold mr-4'>{value}</span>
      <div className='w-16 h-16 relative'>
        {/* Circular Progress Animation */}
        <svg
          viewBox='0 0 100 100'
          className='transform -rotate-90 w-full h-full'
        >
          <circle
            cx='50'
            cy='50'
            r='40'
            fill='none'
            stroke='#eee'
            strokeWidth='18'
          />
          <motion.circle
            cx='50'
            cy='50'
            r='40'
            fill='none'
            stroke='#fbbf24'
            strokeWidth='18'
            strokeLinecap='round'
            strokeDasharray='251.327'
            strokeDashoffset='251.327'
            animate={{
              strokeDashoffset: 251.327 - (percentage / 100) * 251.327,
            }}
            transition={{ duration: 2, ease: 'easeOut' }}
          />
        </svg>
      </div>
    </div>
  </motion.div>
);

// Mock data for demonstration purposes
const data = [
  { name: 'Total Clicks', value: 3 },
  { name: 'Total Views', value: 51 },
  { name: 'Total Leads', value: 0 },
];

const Analytics = () => {
  // State to track company and force rerender for animation reset
  const [selectedCompany, setSelectedCompany] = useState(
    'Avicenna Enterprises'
  );
  const [refreshKey, setRefreshKey] = useState(0);

  const handleRefresh = () => {
    setRefreshKey((prevKey) => prevKey + 1);
  };

  const handleCompanyChange = (e) => {
    setSelectedCompany(e.target.value);
    setRefreshKey((prevKey) => prevKey + 1); // Update refresh key on company change
  };

  return (
    <div className='bg-gray-200 lg:p-6'>
      <div className='max-w-6xl mx-auto'>
        {/* Responsive Flexbox */}
        <div className='flex flex-col items-center xl:flex-row xl:justify-between xl:items-end mb-6 p-1 space-y-4 lg:space-y-4 xl:space-y-0'>
          {/* Heading */}
          <h2 className='text-xl lg:text-2xl bg-gray-100 py-1 px-6 font-semibold rounded-full text-center'>
            Analytics
          </h2>

          {/* Date selection */}
          <div className='flex flex-col items-center md:flex-row md:space-x-6 xl:items-end justify-center space-y-4 lg:space-y-0 xl:space-y-0'>
            <div className='flex gap-2 md:flex-row md:gap-4 lg:flex-row lg:gap-4 xl:flex-row'>
              {/* Start Date */}
              <div className='flex flex-col items-center'>
                <h1 className='text-gray-500'>Start Date</h1>
                <input
                  type='date'
                  className='border rounded-full px-2 py-1 text-center'
                  defaultValue='2024-10-09'
                />
              </div>
              {/* End Date */}
              <div className='flex flex-col items-center'>
                <h1 className='text-gray-500'>End Date</h1>
                <input
                  type='date'
                  className='border rounded-full px-2 py-1 text-center'
                  defaultValue='2024-10-09'
                />
              </div>
            </div>
          </div>

          {/* Refresh and Company Select */}
          <div className='flex flex-col items-center md:flex-row md:space-x-4'>
            <motion.button
              className='flex items-center bg-white rounded-full px-4 py-2 shadow'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleRefresh}
            >
              <RefreshCw size={16} className='mr-2' />
              Refresh
            </motion.button>

            <div className='flex items-center bg-white rounded-full px-4 py-2 shadow mt-2 md:mt-0'>
              <select
                value={selectedCompany}
                onChange={handleCompanyChange}
                className='outline-none py-1 text-center'
              >
                <option value='Avicenna Enterprises'>
                  Avicenna Enterprises
                </option>
                <option value='Abdullah'>Abdullah</option>
              </select>
            </div>
          </div>
        </div>

        {/* Cards Section */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 px-6'>
          {/* Pass refreshKey as key prop to force re-render */}
          <AnalyticCard
            itemkey={refreshKey + '-leads'}
            title='Leads Generated'
            value='0'
            percentage={90}
          />
          <AnalyticCard
            itemkey={refreshKey + '-link-taps'}
            title='Link taps'
            value='0'
            percentage={90}
          />
          <AnalyticCard
            itemkey={refreshKey + '-card-views'}
            title='Card Views'
            value='0'
            percentage={90}
          />
        </div>

        {/* Graph Section */}
        <motion.div
          key={refreshKey} // Key prop to reset animation
          className='flex flex-col md:flex-col lg:flex-row space-x-4 p-4 md:space-y-4 lg:space-y-0 space-y-4'
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.div
            className='bg-white rounded-lg shadow-lg p-4 flex-grow'
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <h2 className='text-xl font-bold mb-4'>
              Total of previous months records
            </h2>
            <div className='h-64'>
              <ResponsiveContainer width='100%' height='100%'>
                <BarChart data={data}>
                  <CartesianGrid strokeDasharray='3 3' />
                  <XAxis dataKey='name' />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey='value' fill='#F59E0B' />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          <motion.div
            className='bg-white rounded-lg shadow-lg p-4 w-64'
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <div className='flex justify-between items-center mb-4'>
              <h2 className='text-xl font-bold'>Link Clicked</h2>
              <InfoIcon className='text-gray-400' size={20} />
            </div>
            <p className='text-gray-600'>No links to show</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Analytics;

import { Fragment, useState } from 'react';
import { MdContentCopy } from 'react-icons/md';
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import { useGlobalContext } from '../../../context/context';
import { ChromePicker } from 'react-color'; // Import the color picker

const ProfileSetting = () => {
  const { data } = useGlobalContext();
  const [colors, setColors] = useState({
    pageBackground: '#3decb3',
    textColor: '#0c0d0c',
    saveButtonColor: '#3decb3',
    shareButtonColor: '#f5f0f0',
    linkBackgroundColor: '#bab5b5',
    linkColor: '#080808',
  });

  const [showColorPicker, setShowColorPicker] = useState(false);
  const [currentColor, setCurrentColor] = useState('#000000'); // Default color
  const [colorLabel, setColorLabel] = useState('');

  if (!data) {
    return <p>Loading...</p>;
  }

  const { bg, profileImage } = data;

  const handleColorChange = (color) => {
    setCurrentColor(color.hex); // Update current color during picker adjustment
  };

  const handleColorSelect = () => {
    // Update the colors state when the user confirms their selection
    setColors((prevColors) => ({
      ...prevColors,
      [colorLabel]: currentColor, // Use currentColor for the selected color
    }));
    setShowColorPicker(false); // Close the color picker after selection
  };

  const ColorSelector = ({ label, color }) => {
    const isCurrentColor = label.toLowerCase().replace(' ', '') === colorLabel;

    return (
      <div className='mb-4 w-full'>
        <div className='flex flex-col items-start'>
          <span className='text-sm font-medium mb-2'>{label}</span>
          <div
            className='flex items-center bg-gray-200 rounded-full p-2 w-full cursor-pointer'
            onClick={() => {
              setShowColorPicker(!showColorPicker);
              setCurrentColor(color);
              setColorLabel(label.toLowerCase().replace(' ', ''));
            }}
          >
            <div
              className='w-6 h-6 rounded-full mr-4'
              style={{ backgroundColor: color }}
            ></div>
            <span className='text-sm'>{color}</span>
          </div>
          {showColorPicker &&
            isCurrentColor && ( // Show color picker for the current color label only
              <div>
                <ChromePicker
                  color={currentColor}
                  onChange={handleColorChange}
                />
                <button
                  className='mt-2 bg-yellow-500 text-white py-1 px-4 rounded'
                  onClick={handleColorSelect}
                >
                  Select Color
                </button>
              </div>
            )}
        </div>
      </div>
    );
  };

  return (
    <Fragment>
      <div className='p-4'>
        <h1 className='text-3xl font-semibold text-yellow-500'>Profile</h1>
        <hr className='mt-4' />
      </div>
      <div className='max-w-2xl mx-auto relative'>
        <div>
          <h1 className='font-semibold'>Cover Image</h1>
          <p>
            Choose an image to display at the top of cardholder profile pages
          </p>
        </div>
        <div className='h-[60vh] border-dotted border-black border-2 rounded'>
          <img src={bg} alt='' className='h-full p-4' />
        </div>

        <div className='absolute top-96 left-4 w-32 h-32'>
          <img
            src={profileImage}
            alt='profile'
            className='w-full h-full rounded-full border-4 object-cover border-white shadow-md'
          />
        </div>
        <div className='mt-28'>
          <h1 className='font-medium'>Profile Page Appearance</h1>
          <p>
            Customize the look of the profile of your cardholder. Changes will
            apply to all profile pages belonging to your organization.
          </p>
        </div>
        <div>
          <h1 className='font-semibold'>Colors</h1>
          <p>
            Create a customized theme for cardholder profile pages. Ensure good
            readability by maintaining sufficient contrast between text and
            background colors.
          </p>
        </div>
        <div className='max-w-md mx-auto mt-10 p-6 bg-white rounded-lg grid grid-cols-2 gap-4'>
          <ColorSelector
            label='Page background color'
            color={colors.pageBackground}
          />
          <ColorSelector label='Text color' color={colors.textColor} />
          <ColorSelector
            label='Save button color'
            color={colors.saveButtonColor}
          />
          <ColorSelector
            label='Share button color'
            color={colors.shareButtonColor}
          />
          <ColorSelector
            label='Link background color'
            color={colors.linkBackgroundColor}
          />
          <ColorSelector label='Link color' color={colors.linkColor} />
        </div>

        <div className='flex p-2 justify-center items-center gap-4 sm:gap-5 md:gap-6'>
          <div className='rounded-full py-2 px- border-yellow-400 border-[1px] flex items-center sm:gap-0 w-28 justify-center space-x-2 cursor-pointer'>
            <button className='font-semibold'>Copy</button>
            <MdContentCopy className='text-xl text-yellow-600' />
          </div>
          <div className='rounded-full py-2 px- border-yellow-400 border-[1px] flex items-center sm:gap-0 w-28 justify-center space-x-2 cursor-pointer'>
            <button className='font-semibold'>Preview</button>
            <MdOutlineRemoveRedEye className='text-xl text-yellow-600' />
          </div>

          <button className='rounded-full px-8 py-2 border-yellow-400 border-[1px] flex items-center bg-yellow-500 gap-1 text-white w-28 font-semibold'>
            Save
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default ProfileSetting;

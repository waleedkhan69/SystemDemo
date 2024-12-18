import { Share2, ArrowDownToLine } from 'lucide-react';
import { useGlobalContext } from '../../context/context';
import { colorContext } from '../../context/colorContext';
import { useContext } from 'react';

const Mobile = () => {
  const { leadMode, personLinks, data } = useGlobalContext();
  const { selectedColors } = useContext(colorContext);

  // If data is not yet available, return null or a loading state
  if (!data) {
    return <p>Loading...</p>;
  }
  if (!selectedColors) {
    return <p>Please select a color scheme</p>;
  }
  // console.log('from mobile,', selectedColors);
  const {
    cardColor,
    textColor,
    saveButtonColor,
    shareButtonColor,
    linkBackground,
  } = selectedColors;

  const { bg, description, profileImage, telephone, name, extraInfo } = data;

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const leadFormData = Object.fromEntries(formData.entries());
    console.log(leadFormData);
  };

  // console.log(cardColor);
  return (
    <div
      className={`bg-gray-200 max-w-72 ${
        !leadMode && 'mx-auto'
      } rounded-3xl overflow-hidden shadow-lg`}
    >
      <div
        className='h-max rounded-t-3xl pb-5'
        style={{ backgroundColor: cardColor }}
      >
        <div className='relative bg-gray-100 h-[7rem]'>
          <img
            src={bg}
            alt='Logo'
            className='absolute w-full inset-0 m-auto object-cover h-full'
          />
        </div>

        {leadMode ? (
          <div className='mt-12 px-2'>
            <h1 className='border-b border-black text-center'>Let's Connect</h1>
            <form onSubmit={handleSubmit}>
              <input
                className='w-full mb-2 p-3 rounded-full border border-black placeholder-gray-400 focus:outline-none mt-4'
                type='text'
                id='name'
                name='name'
                placeholder='Enter your name'
                required
              />
              <input
                className='w-full mb-2 p-3 rounded-full border border-black placeholder-gray-400 focus:outline-none'
                type='email'
                id='email'
                name='email'
                placeholder='Enter your email'
                required
              />
              <input
                className='w-full mb-2 p-3 rounded-full border border-black placeholder-gray-400 focus:outline-none'
                type='text'
                id='phone'
                name='phone'
                placeholder='Enter your phone number'
                required
              />
              <div className='flex justify-between'>
                <button
                  type='button'
                  className='w-1/3 py-2 px-4 rounded-full border border-black text-white bg-gray-900'
                >
                  Cancel
                </button>
                <button
                  type='submit'
                  className='w-1/3 py-2 px-4 rounded-full border border-black text-white bg-gray-900'
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        ) : (
          <>
            <div className='relative flex flex-col items-start '>
              <div className='absolute top-[-40px] left-4 w-20 h-20'>
                <img
                  src={profileImage}
                  alt='profile'
                  className='w-full h-full rounded-full border-4 object-cover border-white shadow-md'
                />
                <h2
                  className='text-xl font-bold w-max'
                  style={{ color: textColor }}
                >
                  {name}
                </h2>
              </div>
            </div>

            <div className='mt-12 px-4 w-full pt-8 '>
              <div className='mb-4 pl-2' style={{ color: textColor }}>
                <p className='text-base'>{extraInfo}</p>
                <p className='text-base'>{telephone}</p>
                <p className='text-base'>{description}</p>
              </div>
            </div>

            <div className='flex mb-6 justify-center'>
              <button
                className='bg-emerald-500 text-white px-3 text-xs rounded-full flex items-center justify-center gap-2'
                style={{ backgroundColor: saveButtonColor, color: textColor }}
              >
                <ArrowDownToLine className='w-4 h-4' />
                Save Contact
              </button>
              <button
                className='text-xs ml-2 bg-gray-200 text-gray-700 py-2 px-4 rounded-full flex items-center justify-center'
                style={{ backgroundColor: shareButtonColor, color: textColor }}
              >
                <Share2 className='w-4 h-4 mr-2' />
                Share
              </button>
            </div>

            {/* Social Media Icons */}
            <div className='flex items-center justify-center px-2 flex-wrap gap-3'>
              {personLinks?.map((item) => (
                <div
                  className='w-10 h-10 flex items-center justify-center  rounded-full text-white cursor-pointer bg-black '
                  key={item.label}
                  style={{
                    backgroundColor: linkBackground,
                  }}
                >
                  {item.icon}
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className='mt-6 flex items-center justify-center border-t-2 border-gray-400 pt-2'>
              <p className='text-xs text-gray-500'>Powered by VIZZ</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Mobile;

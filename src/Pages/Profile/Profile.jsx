import { Outlet,useLocation  } from 'react-router-dom';
import Mobile from '../../components/ProfileComponents/Mobile';
import ProfileSidebar from '../../components/ProfileComponents/ProfileSidebar';
import { Eye } from 'lucide-react';
import ProfileQR from '../../components/ProfileComponents/ProfileQR';

const Profile = () => {
  const location = useLocation();
  
  // Check if the current path matches the QR code path
  const isQRCodePath = location.pathname.includes('profile/qrcode');
console.log(isQRCodePath)

  return (
    <div className='xl:flex xl:h-screen relative'>
      {/* Sidebar */}
      <div className=' xl:fixed h-full w-max '>
        <ProfileSidebar />
      </div>

      {/* Scrollable Outlet container */}
      <div className='flex-1 xl:ml-[12rem] xl:mr-[18rem] overflow-y-auto hide-scrollbar  xl:h-screen'>
        <Outlet />
      </div>

      {/* Mobile fixed to the right on large screens */}
      <div className='hidden xl:block xl:fixed top-0 right-0 h-full xl:pr-4'>
  {/* Conditional rendering for the View Card button and Mobile component */}
  {isQRCodePath ? (
    <ProfileQR />
  ) : (
    <>
      {/* View card */}
      <div className='w-full lg:w-72 p-4 flex flex-col gap-12'>
        <button className='mt-4 w-full bg-gray-300 text-gray-600 rounded-full py-2 flex items-center justify-center'>
          <Eye className='w-4 h-4 mr-2' />
          View Card
        </button>
      </div>
      <Mobile />
    </>
  )}
</div>

      {/* Mobile component for small screens */}
      <div className='xl:hidden flex items-center justify-center flex-col w-max mx-auto'>
        {/* view card */}
        <div className='w-full lg:w-72 p-4 flex flex-col gap-12'>
          <button className='mt-4 w-full bg-gray-300 text-gray-600 rounded-full py-2 flex items-center justify-center'>
            <Eye className='w-4 h-4 mr-2' />
            View Card
          </button>
        </div>
        <Mobile />
      </div>
    </div>
  );
};

export default Profile;

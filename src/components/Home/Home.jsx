import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import { useGlobalContext } from '../../context/context';

const Home = () => {
  const { isSidebarOpen } = useGlobalContext();
  return (
    <div className='flex'>
      <Sidebar />
      <div
        className={`content ${
          isSidebarOpen ? 'md:ml-[300px]' : 'ml-0'
        } mt-4 pl-4 mx-4`}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default Home;

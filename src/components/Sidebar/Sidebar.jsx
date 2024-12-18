import { IoClose } from 'react-icons/io5';
import { useGlobalContext } from '../../context/context';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo/blog.png';
import {
  IoPersonCircle,
  IoMail,
  IoBarChart,
  IoSettings,
} from 'react-icons/io5';
import { RiLogoutCircleLine } from 'react-icons/ri';
const links = [
  {
    id: 1,
    link: 'Profile',
    to: 'profile/overview',
    icon: <IoPersonCircle />,
  },
  {
    id: 2,
    link: 'Contact',
    to: '/contact',
    icon: <IoMail />,
  },
  {
    id: 3,
    link: 'Analytics',
    to: '/analytics',
    icon: <IoBarChart />,
  },
  {
    id: 4,
    link: 'Settings',
    to: '/settings',
    icon: <IoSettings />,
  },
];

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  return (
    <aside
      className={`${
        isSidebarOpen ? 'show-sidebar' : ''
      } sidebar px-2 bg-[#050505] text-white `}
    >
      <div className='flex items-end justify-end py-6'>
        <button onClick={closeSidebar} className='lg:hidden'>
          <IoClose className='text-white font-bold text-3xl' />
        </button>
      </div>
      <section className='flex flex-col justify-center'>
        <div className='flex w-full items-center justify-center'>
          <div className='w-32 h-32 rounded-full'>
            <img
              src={logo}
              alt='logo'
              className='w-full h-full object-cover rounded-full'
            />
          </div>
        </div>
        <div className='flex flex-col mt-8 gap-4'>
          {links.map((item) => {
            const { id, link, to, icon } = item;
            return (
              <NavLink
                to={to}
                key={id}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-2xl w-full flex items-center gap-4 text-base ${
                    isActive ? 'bg-[#2F2F2F]' : ''
                  }`
                }
              >
                <span className='text-4xl'>{icon}</span>
                {link}
              </NavLink>
            );
          })}
        </div>
        <button className='absolute bottom-8 left-4 flex items-center  gap-2 bg-yellow-600 px-4 py-2 rounded-full text-black'>
          <span>
            <RiLogoutCircleLine />
          </span>{' '}
          Logout
        </button>
      </section>
    </aside>
  );
};

export default Sidebar;

import { NavLink, useParams } from 'react-router-dom';
import { Menu, Users, QrCode, Target } from 'lucide-react';

const ProfileSidebar = () => {
  const { id } = useParams();
  const links = [
    {
      id: 1,
      link: 'Content',
      to: `/profile/content/${id}`, // Dynamic route for ProfileEdit
      icon: <Menu className='w-5 h-5' />,
    },
    {
      id: 2,
      link: 'About',
      to: `/profile/about/${id}`, // ProfileSettings route
      icon: <Users className='w-5 h-5' />,
    },
    {
      id: 3,
      link: 'QR Code',
      to: `/profile/qrcode/${id}`, // ProfileSecurity route
      icon: <QrCode className='w-5 h-5' />,
    },
    {
      id: 4,
      link: 'Lead Capture',
      to: `/profile/lead/${id}`, // Analytics route
      icon: <Target className='w-5 h-5' />,
    },
  ];

  return (
    <div className='w-max bg-black text-white rounded-3xl shadow-2xl'>
      <div className='flex flex-col mt-8 gap-4'>
        {links.map((item) => {
          const { id, link, to, icon } = item;
          return (
            <NavLink
              to={to}
              key={id}
              className={({ isActive }) =>
                `px-4 rounded-2xl w-full flex items-center gap-4 py-4 text-base ${
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
    </div>
  );
};

export default ProfileSidebar;

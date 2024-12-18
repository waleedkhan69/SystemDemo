import { createContext, useContext, useEffect, useState } from 'react';
import { IoLogoWhatsapp } from 'react-icons/io';
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaSnapchatGhost,
} from 'react-icons/fa';
import person1 from '../assets/profileimages/person1.jpg';
import person2 from '../assets/profileimages/person2.jpg';
import person3 from '../assets/profileimages/person3.jpg';

import person4 from '../assets/profileimages/person4.jpg';
import bg1 from '../assets/profileimages/bg-1.jpg';
import bg2 from '../assets/profileimages/bg-2.jpg';
import bg3 from '../assets/profileimages/bg-3.jpg';
import bg4 from '../assets/profileimages/bg-4.jpg';
import { useParams } from 'react-router-dom';
import { CgWebsite } from 'react-icons/cg';
import { GoProjectSymlink } from 'react-icons/go';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [persons] = useState([
    {
      id: 1,
      name: 'Sufiyan Karim',
      telephone: '+92-324-2806715',
      address: 'Bahawalpur Pakistan',
      description: 'Main contributor',
      profileImage: person1,
      extraInfo: 'React Developer',
      email: 'sufiyankarimk@gmail.com',
      bg: bg1,
      links: [
        // {
        //   icon: <MdEmail className='text-white' />,
        //   label: 'Email',
        //   singleLink: 'https://sufiyankarimk@gmail.com',
        // },
        {
          icon: <FaLinkedin className='text-white h-5 w-5' />,
          label: 'LinkedIn',
          singleLink: 'https://www.linkedin.com/in/sufiyan-karim-4974782a3/',
        },
        {
          icon: <FaGithub className='text-white h-5 w-5' />,
          label: 'Github',
          singleLink: 'https://github.com/SufiyanKarim',
        },

        {
          icon: <IoLogoWhatsapp className='text-white h-5 w-5' />,
          label: 'Whatsapp',
          singleLink: 'http://wa.me/923242806715',
        },
        {
          icon: <CgWebsite className='text-white h-5 w-5' />,
          label: 'Portfolio',
          singleLink: 'https://sufiyankarim.vercel.app/',
        },
        {
          icon: <FaFacebook className='text-white h-5 w-5' />,
          label: 'Facebook',
          singleLink: 'https://www.facebook.com/sufii165?mibextid=LQQJ4d',
        },
        {
          icon: <FaInstagram className='text-white h-5 w-5' />,
          label: 'Instagram',
          singleLink: 'https://www.instagram.com/sufyanbaloch12/',
        },
        {
          icon: <FaSnapchatGhost className='text-white h-5 w-5' />,
          label: 'Snapchat',
          singleLink: 'https://snapchat.com/t/FCBTySMS',
        },
      ],
    },
    {
      id: 2,
      name: 'Ahmad Mamoon',
      telephone: '+92-321-6832148',
      address: 'Bahawalpur Pakistan',
      description: 'Main contributor',
      extraInfo: 'React Developer',
      profileImage: person2,
      bg: bg2,
      links: [
        {
          icon: <FaLinkedin className='text-white h-5 w-5' />,
          label: 'LinkedIn',
          singleLink: 'https://www.linkedin.com/in/muhammad-ahmad-5847502b0/',
        },
        {
          icon: <FaGithub className='text-white h-5 w-5' />,
          label: 'Github',
          singleLink: 'https://github.com/Ahmad-code077',
        },
        {
          icon: <CgWebsite className='text-white h-5 w-5' />,
          label: 'Portfolio',
          singleLink: 'https://ahmadmamoon.netlify.app/',
        },
        {
          icon: <GoProjectSymlink className='text-white h-5 w-5' />,
          label: 'Projects',
          singleLink: 'https://contentfull-projects.netlify.app/',
        },
      ],
    },
    {
      id: 3,
      name: 'Muhammad Waleed',
      telephone: '+92-326-7514362',
      address: 'Lodhran Pakistan',
      description: 'Main contributor',
      profileImage: person3,
      extraInfo: 'React Developer',
      bg: bg3,
      links: [
        {
          icon: <FaLinkedin className='text-white h-5 w-5' />,
          label: 'LinkedIn',
          singleLink: 'https://www.linkedin.com/in/waleed-khan-b2aba4327/',
        },
        {
          icon: <FaGithub className='text-white h-5 w-5' />,
          label: 'Github',
          singleLink: 'https://github.com/waleedkhan69 ',
        },

        {
          icon: <IoLogoWhatsapp className='text-white h-5 w-5' />,
          label: 'Whatsapp',
          singleLink: ' https://wa.me/message/FR3ZMEV6DJWTL1 ',
        },
        {
          icon: <CgWebsite className='text-white h-5 w-5' />,
          label: 'Portfolio',
          singleLink: 'https://imranfarooq.vercel.app/',
        },
        {
          icon: <FaFacebook className='text-white h-5 w-5' />,
          label: 'Facebook',
          singleLink:
            'https://www.facebook.com/profile.php?id=100089312365229&mibextid=ZbWKwL',
        },
        {
          icon: <FaSnapchatGhost className='text-white h-5 w-5' />,
          label: 'Snapchat',
          singleLink:
            'https://www.snapchat.com/add/w_khan232135?share_id=AiWAM7nfiSM&locale=en-US',
        },
      ],
    },
    {
      id: 4,
      name: 'Imran Farooq',
      telephone: '+92-317-6565404',
      address: 'Bahawalpur Pakistan',
      description: 'Full Stack',
      profileImage: person4,
      extraInfo: 'Full Stack Developer',
      email: 'imranf620@gmail.com',
      bg: bg4,
      links: [
        // {
        //   icon: <MdEmail className='text-white' />,
        //   label: 'Email',
        //   singleLink: 'https://sufiyankarimk@gmail.com',
        // },
        {
          icon: <FaLinkedin className='text-white h-5 w-5' />,
          label: 'LinkedIn',
          singleLink: 'https://www.linkedin.com/in/imranfarooqqaisrani/',
        },
        {
          icon: <FaGithub className='text-white h-5 w-5' />,
          label: 'Github',
          singleLink: 'https://github.com/Imranf620/',
        },

        {
          icon: <IoLogoWhatsapp className='text-white h-5 w-5' />,
          label: 'Whatsapp',
          singleLink: ' https://wa.me/message/FR3ZMEV6DJWTL1 ',
        },
        {
          icon: <CgWebsite className='text-white h-5 w-5' />,
          label: 'Portfolio',
          singleLink: 'https://imranfarooq.vercel.app/',
        },
        {
          icon: <FaFacebook className='text-white h-5 w-5' />,
          label: 'Facebook',
          singleLink: 'https://www.facebook.com/imranf620',
        },
      ],
    },
  ]);

  const { id: profileId } = useParams();
  const [id, setId] = useState(profileId); // Initialize with profileId
  const [data, setData] = useState(null); // Start with null
  const [showSocialLinks, setShowSocialLinks] = useState(false);
  const [showSocialLinksForm, setShowSocialLinksForm] = useState(false);
  // Fetch data for the given id
  const getData = () => {
    if (id && persons.length > 0) {
      const detail = persons.find((item) => item.id == id);
      if (detail) {
        setData(detail);
      } else {
        setData(null);
      }
    }
  };

  // Update id when profileId changes
  useEffect(() => {
    if (profileId) {
      setId(profileId);
    }
  }, [profileId]);

  // Fetch data when id or persons change
  useEffect(() => {
    getData();
  }, [id, persons]);

  // Safe destructuring
  const name = data ? data.name : '';
  const initialLinks = data ? data.links : [];
  const [personLinks, setPersonLinks] = useState([]);

  // Update links when data changes
  useEffect(() => {
    if (initialLinks) {
      setPersonLinks(initialLinks);
    }
  }, [data]);

  // Other states and methods
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [leadMode, setLeadMode] = useState(false);
  const [directMode, setDirectMode] = useState(false);
  const [showLink, setShowLink] = useState(false);

  const [currentLink, setCurrentLink] = useState(null);
  const [currentIcon, setCurrentIcon] = useState(null);

  const handleOnDragEnd = (result) => {
    const { destination, source } = result;
    if (!destination || destination.index === source.index) return;
    const reorderedLinks = Array.from(personLinks);
    const [movedLink] = reorderedLinks.splice(source.index, 1);
    reorderedLinks.splice(destination.index, 0, movedLink);
    setPersonLinks(reorderedLinks);
  };

  const toggleModal = () => setIsOpen(!isOpen);
  const openSidebar = () => setIsSidebarOpen(true);
  const closeSidebar = () => setIsSidebarOpen(false);
  const toggleSocialLinks = () => setShowSocialLinks(!showSocialLinks);
  const toggleSocialLinksForm = () =>
    setShowSocialLinksForm(!showSocialLinksForm);
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formValues = Object.fromEntries(formData);
    console.log(formValues);
    toggleModal();
  };
  // console.log(personLinks)

  return (
    <AppContext.Provider
      value={{
        persons,
        isSidebarOpen,
        openSidebar,
        closeSidebar,
        toggleModal,
        isOpen,
        handleSubmit,
        leadMode,
        setLeadMode,
        id,
        setId,
        handleOnDragEnd,
        name,
        showLink,
        setShowLink,
        directMode,
        setDirectMode,
        personLinks,
        setPersonLinks,
        data,
        toggleSocialLinks,
        showSocialLinks,
        toggleSocialLinksForm,
        showSocialLinksForm,
        currentLink,
        setCurrentLink,
        currentIcon,
        setCurrentIcon,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useGlobalContext must be used within an AppProvider');
  }
  return context;
};

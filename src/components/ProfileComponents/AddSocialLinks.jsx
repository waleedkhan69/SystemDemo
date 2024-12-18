import { useState } from 'react';
import {
  IoLogoWhatsapp,
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoMdAdd,
} from 'react-icons/io';
import {
  MdEmail,
  MdLocalPhone,
  MdModeEdit,
  MdOutlineTextFields,
} from 'react-icons/md';
import { CgWebsite } from 'react-icons/cg';
import { FaGithub, FaSnapchatGhost } from 'react-icons/fa';
import { useGlobalContext } from '../../context/context';
import { IoClose } from 'react-icons/io5';
import AddSocialLinksForm from './AddSocialLinksForm';

const AddSocialLinks = () => {
  const {
    toggleSocialLinksForm,
    showSocialLinksForm,
    personLinks,
    setCurrentLink,
    setCurrentIcon,
    toggleSocialLinks,
  } = useGlobalContext();

  const [isEditing, setIsEditing] = useState(false); // Add state to track editing mode

  const socialMediaLinks = [
    {
      name: 'Facebook',
      icon: <IoLogoFacebook className='h-5 w-5' />,
    },
    {
      name: 'Twitter',
      icon: <IoLogoTwitter className='h-5 w-5' />,
    },
    {
      name: 'Instagram',
      icon: <IoLogoInstagram className='h-5 w-5' />,
    },
    {
      name: 'LinkedIn',
      icon: <IoLogoLinkedin className='h-5 w-5' />,
    },
    {
      name: 'Snapchat',
      icon: <FaSnapchatGhost className='h-5 w-5' />,
    },
    {
      name: 'Github',
      icon: <FaGithub className='h-5 w-5' />,
    },
  ];

  const contactLinks = [
    {
      name: 'Whatsapp',
      icon: <IoLogoWhatsapp className='h-5 w-5' />,
    },
    { name: 'Email', icon: <MdEmail className='h-5 w-5' /> },
    { name: 'Phone', icon: <MdLocalPhone className='h-5 w-5' /> },
    {
      name: 'Text',
      icon: <MdOutlineTextFields className='h-5 w-5' />,
    },
    { name: 'Portfolio', icon: <CgWebsite className='h-5 w-5' /> },
  ];

  // social media links
  const socialMediaNames = personLinks
    .filter((link) =>
      socialMediaLinks.some((social) => social.name === link.label)
    )
    .map((link) => link.label);

  // contact links
  const contactNames = personLinks
    .filter((link) =>
      contactLinks.some((contact) => contact.name === link.label)
    )
    .map((link) => link.label);

  return (
    <div className='fixed -inset-40 flex items-center justify-center bg-gray-600 bg-opacity-50 z-50'>
      <div className='lg:max-w-[50%] lg:max-h-[50%] max-w-[47%]'>
        <div className='bg-white rounded-lg shadow-lg'>
          <div className='flex justify-end p-4'>
            <button
              onClick={toggleSocialLinks}
              className='text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center'
            >
              <IoClose className='font-bold text-3xl' />
            </button>
          </div>

          <div
            className='p-4 space-y-4 overflow-y-auto hide-scrollbar'
            style={{ maxHeight: '440px' }}
          >
            <h1 className='font-bold text-2xl mb-4 text-gray-800'>
              Add Social Links
            </h1>
            <p className='text-gray-600 mb-6 text-left'>
              Select from our wide variety of links and contact info below.
            </p>

            {/* Contact Icons */}
            <div className='mb-6'>
              <h2 className='text-lg font-semibold text-gray-700 mb-3 text-left'>
                Contact
              </h2>
              <div className='flex items-center gap-10 gap-y-4 flex-wrap'>
                {contactLinks.map((contact, idx) => (
                  <div
                    key={idx}
                    className='flex items-center justify-between bg-gray-100 p-2 rounded-xl'
                  >
                    <div className='flex items-center gap-7'>
                      <div className='bg-gray-200  rounded-full p-2'>
                        {contact.icon}
                      </div>
                      <p className='text-gray-800'>{contact.name}</p>
                    </div>
                    <button
                      className=' pl-3 hover:text-gray-800'
                      onClick={() => {
                        setCurrentLink(contact.name); // Set current link name
                        setCurrentIcon(contact.icon); // Set current icon
                        setIsEditing(contactNames.includes(contact.name)); // Set editing mode based on whether the link exists
                        toggleSocialLinksForm(); // Open form
                      }}
                    >
                      {contactNames?.find((item) => item === contact.name) ? (
                        <MdModeEdit />
                      ) : (
                        <IoMdAdd />
                      )}
                    </button>
                  </div>
                ))}
                {showSocialLinksForm && (
                  <AddSocialLinksForm isEditing={isEditing} />
                )}
              </div>
            </div>

            {/* Social Media Icons */}
            <div>
              <h2 className='text-lg font-semibold text-gray-700 mb-3 text-left'>
                Social Media
              </h2>
              <div className='flex items-center gap-10 gap-y-4 flex-wrap'>
                {socialMediaLinks.map((social, idx) => (
                  <div
                    key={idx}
                    className='flex items-center justify-between bg-gray-100 p-2 rounded-xl'
                  >
                    <div className='flex items-center gap-7'>
                      <div className='bg-gray-200 rounded-full p-2'>
                        {social.icon}
                      </div>
                      <p className='text-gray-800'>{social.name}</p>
                    </div>
                    <button
                      className='text-gray-600 pl-3 hover:text-gray-800'
                      onClick={() => {
                        setCurrentLink(social.name); // Set current link name
                        setCurrentIcon(social.icon); // Set current icon
                        setIsEditing(socialMediaNames.includes(social.name)); // Set editing mode based on whether the link exists
                        toggleSocialLinksForm(); // Open form
                      }}
                    >
                      {socialMediaNames?.find(
                        (item) => item === social.name
                      ) ? (
                        <MdModeEdit />
                      ) : (
                        <IoMdAdd />
                      )}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddSocialLinks;

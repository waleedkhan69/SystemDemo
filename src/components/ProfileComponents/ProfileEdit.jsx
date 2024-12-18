import { RxDragHandleDots2 } from 'react-icons/rx';
import { Link } from 'react-router-dom';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { ChevronLeft, Plus, Share2 } from 'lucide-react';
import { useGlobalContext } from '../../context/context';
import AddSocialLinks from './AddSocialLinks';
import { useState } from 'react';

const ProfileEdit = () => {
  const {
    handleOnDragEnd,
    name,
    showLink,
    setShowLink,
    directMode,
    setDirectMode,
    leadMode,
    setLeadMode,
    personLinks,
    toggleSocialLinks,
    showSocialLinks,
    setPersonLinks,
  } = useGlobalContext();
  const [activeIndex, setActiveIndex] = useState(0);

  const handleMakeDirect = (index) => {
    // Move the selected link to the first index
    const updatedLinks = [...personLinks];
    const selectedLink = updatedLinks.splice(index, 1)[0];
    console.log(selectedLink); // Remove the clicked link
    updatedLinks.unshift(selectedLink); // Insert it at the first index

    // Update the state to reflect the changes
    setPersonLinks(updatedLinks);
    setActiveIndex(0); // The newly moved link is now the active one at index 0
  };

  const handleDirectMode = () => {
    setDirectMode(!directMode);
  };

  const handleRemoveLink = (index) => {
    const updatedLinks = personLinks.filter((_, i) => i !== index);
    setPersonLinks(updatedLinks);
  };

  return (
    <div className='bg-gray-100'>
      <div className='max-w-6xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden'>
        {/* Header */}
        <div className='flex justify-between items-center p-4 border-b'>
          <div className='flex items-center'>
            <Link to={'/profile/overview'}>
              <ChevronLeft className='w-6 h-6 mr-2' />
            </Link>
            <span className='text-gray-500'>{name}</span>
          </div>
          <button className='bg-white text-black border border-gray-300 rounded-full px-4 py-2 flex items-center'>
            <Share2 className='w-4 h-4 mr-2' />
            Share Card
          </button>
        </div>

        {/* Main editor area */}
        <div className='flex-grow p-4'>
          <div className='mb-4 flex items-center justify-between flex-wrap gap-2'>
            <div className='flex items-center mr-4 flex-wrap lg:flex-nowrap gap-2 lg:gap-0'>
              <span className='mr-2'>Lead Mode</span>
              <button
                className={`w-12 h-6 rounded-full ${
                  leadMode ? 'bg-gray-900' : 'bg-gray-300'
                } transition-colors duration-200 ease-in-out`}
                onClick={() => setLeadMode(!leadMode)}
              >
                <div
                  className={`w-4 h-4 rounded-full bg-white shadow-md transform transition-transform duration-200 ease-in-out ${
                    leadMode ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
            <div className='flex items-center'>
              <span className='mr-2'>Direct</span>
              <button
                className={`w-12 h-6 rounded-full ${
                  directMode ? 'bg-gray-900' : 'bg-gray-300'
                } transition-colors duration-200 ease-in-out`}
                onClick={handleDirectMode}
              >
                <div
                  className={`w-4 h-4 rounded-full bg-white shadow-md transform transition-transform duration-200 ease-in-out ${
                    directMode ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            <button
              className='bg-black text-white rounded-md px-4 py-2 flex items-center'
              onClick={toggleSocialLinks}
            >
              <Plus className='w-4 h-4 mr-2' />
              Add Links
            </button>
          </div>

          {/* Display AddSocialLinks only when not in Direct Mode */}
          {showSocialLinks && <AddSocialLinks />}

          {/* Show "Add Links" button only when not in Direct Mode */}

          <button
            onClick={() => setShowLink(!showLink)}
            className='border border-gray-300 rounded-full p-4 mb-4 flex items-center justify-center text-gray-400 w-full'
          >
            <Plus className='w-4 h-4 mr-2' />
            Add Links and Contacts
          </button>

          {/* Links section */}
          {showLink && !directMode && (
            <DragDropContext onDragEnd={handleOnDragEnd} key={name}>
              <Droppable droppableId='droppable'>
                {(provided) => (
                  <div ref={provided.innerRef} {...provided.droppableProps}>
                    {personLinks?.map(({ icon, label, singleLink }, index) => (
                      <Draggable
                        key={index}
                        draggableId={`draggable-${index}`}
                        index={index}
                      >
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className='mb-6'
                          >
                            <div className='rounded-full shadow-md flex max-w-md justify-center sm:justify-between flex-wrap md:flex-row items-center p-4 mx-auto'>
                              <div className='flex items-center gap-2'>
                                <div>
                                  <RxDragHandleDots2 />
                                </div>
                                <div className='bg-black text-white p-2 rounded-full'>
                                  {icon}
                                </div>
                                <div>
                                  <p className='font-medium'>{label}</p>
                                </div>
                              </div>
                              <div className='flex md:flex-row items-center gap-2 mt-4 md:mt-0'>
                                <button
                                  className='px-4 py-1 border-black border-[1px] rounded-full w-full md:w-auto'
                                  onClick={() => handleRemoveLink(index)}
                                >
                                  Remove
                                </button>
                                <a
                                  target='_'
                                  href={singleLink}
                                  className='bg-yellow-500 rounded-full text-white font-semibold px-4 py-2 w-full md:w-auto text-[12px]'
                                >
                                  Open Link
                                </a>
                              </div>
                            </div>
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder} {/* Placeholder for spacing */}
                  </div>
                )}
              </Droppable>
            </DragDropContext>
          )}

          {/* Direct Mode Links */}
          {directMode && (
            <div>
              {personLinks?.map(({ icon, label }, index) => (
                <div
                  key={index}
                  className={`mb-6 ${index !== activeIndex ? '' : ''}`} // No need for background change here
                >
                  <div className='rounded-full shadow-md flex max-w-md justify-between flex-wrap md:flex-row items-center p-4 mx-auto text-white'>
                    <div className='flex items-center gap-2'>
                      {/* Icon color conditionally styled based on active state */}
                      <div
                        className={`${
                          index === activeIndex ? 'bg-black' : 'bg-gray-400 '
                        } p-2 rounded-full`}
                      >
                        {icon}
                      </div>
                      <div>
                        {/* Text color conditionally styled based on active state */}
                        <p
                          className={`font-medium ${
                            index === activeIndex
                              ? 'text-black'
                              : 'text-gray-400'
                          }`}
                        >
                          {label}
                        </p>
                      </div>
                    </div>
                    <div className='flex md:flex-row items-center gap-2 mt-4 md:mt-0'>
                      {index !== activeIndex && (
                        <button
                          className='px-4 py-1 rounded-full w-full bg-yellow-500 text-white md:w-auto'
                          onClick={() => handleMakeDirect(index)}
                        >
                          Make Direct
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileEdit;

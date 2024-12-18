import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { FaAngleLeft } from "react-icons/fa";
import { useGlobalContext } from "../../context/context";
import Mobile from "./Mobile";

const AddSocialLinksForm = ({ isEditing }) => {
  const {
    toggleSocialLinksForm,
    currentLink,
    currentIcon,
    personLinks,
    setPersonLinks,
  } = useGlobalContext();

  const [newLink, setNewLink] = useState(""); // State for link input
  const [error, setError] = useState(""); // Error message for validation

  const handleAddOrEditLink = (e) => {
    e.preventDefault();

    // Validate the link
    if (!newLink.startsWith("https://")) {
      setError("Link must start with 'https:// or http://'");
      return;
    }

    setError(""); // Clear any error messages

    if (isEditing) {
      // Editing an existing link
      const updatedLinks = personLinks.map((link) =>
        link.label === currentLink ? { ...link, singleLink: newLink } : link
      );
      setPersonLinks(updatedLinks);
    } else {
      // Adding a new link
      setPersonLinks([
        ...personLinks,
        { label: currentLink, singleLink: newLink, icon: currentIcon },
      ]);
    }

    // Close form after saving
    toggleSocialLinksForm();
  };

  const handleDeleteLink = () => {
    const updatedLinks = personLinks.filter((link) => link.label !== currentLink);
    setPersonLinks(updatedLinks);
    
    // Close the form after deleting
    toggleSocialLinksForm();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-600 bg-opacity-50 z-50 overflow-y-auto ">
      <div className="w-full max-w-[90%] md:max-w-[70%] lg:max-w-[65%]  bg-white rounded-lg shadow-lg flex flex-col h-[95%]">
        {/* Header Section */}
        <div className="flex justify-between items-center p-4 border-b">
          <h1
            className="text-lg font-semibold cursor-pointer flex items-center gap-1"
            onClick={toggleSocialLinksForm}
          >
            <FaAngleLeft /> Back
          </h1>
          <button
            className="text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center"
            onClick={toggleSocialLinksForm}
          >
            <IoClose className="font-bold text-3xl" />
          </button>
        </div>

        {/* Content Section */}
        <div className="flex flex-row md:flex-row px-4 py-5 lg:py-1 space-y-4 md:space-y-5 md:space-x-4 md:items-start flex-wrap overflow-y-auto hide-scrollbar"  >
          <div className="flex flex-col flex-grow">
            <div className="flex flex-col mb-4">
              <div className="bg-gray-200  h-12 w-12 rounded-full flex items-center justify-center">
                {currentIcon} {/* Display the selected icon */}
              </div>
              <h2 className="text-lg font-semibold ">{currentLink}</h2>
            </div>
            <input
              type="text"
              className="border border-gray-300 rounded-md p-2 mb-4 outline-none"
              placeholder={`Enter your ${currentLink} link`}
              value={newLink}
              onChange={(e) => setNewLink(e.target.value)} // Update input value
              required
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}{" "}
            {/* Show error */}
            <div className="flex justify-center items-center flex-col gap-3 md:justify-between lg:justify-between lg:flex-row md:flex-row">
              <div className="flex justify-center flex-col space-y-3 lg:space-y-0 lg:flex-row md:flex-row md:space-x-2">
                <button
                  className="bg-gray-200 text-gray-900 font-semibold rounded-full py-2 px-4 w-28 max-w-xs"
                  onClick={toggleSocialLinksForm}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-yellow-500 text-white font-semibold rounded-full py-2 px-4 w-28  max-w-xs"
                  onClick={handleAddOrEditLink} // Handle add or edit
                >
                  {isEditing ? "Edit" : "Add"} {/* Dynamic button label */}
                </button>
              </div>
              <button className="bg-red-500 text-white font-semibold rounded-full w-28 flex justify-center items-center gap-2 py-2 px-4  max-w-xs"
              onClick={handleDeleteLink}
              >
                <MdDelete /> Delete
              </button>
            </div>
          </div>

          {/* Mobile Section */}

          <Mobile />
        </div>
      </div>
    </div>
  );
};

export default AddSocialLinksForm;

import { createContext, useState } from 'react';
import { FiEdit } from 'react-icons/fi';

export const colorContext = createContext();

export const ColorProvider = ({ children }) => {
  // State to hold the array of color types
  const [colorArray, setColorArray] = useState([
    {
      typecolor: 'Card Color',
      Edit: <FiEdit />,
      colors: ['Red', 'LightGreen', 'Blue', 'Black', 'Yellow', 'Aqua', 'Green'],
    },
    {
      typecolor: 'Text Color',
      Edit: <FiEdit />,
      colors: ['Red', 'LightGreen', 'Blue', 'Black', 'Yellow', 'Aqua', 'Green'],
    },
    {
      typecolor: 'Save Button Color',
      Edit: <FiEdit />,
      colors: ['Red', 'LightGreen', 'Blue', 'Black', 'Yellow', 'Aqua', 'Green'],
    },
    {
      typecolor: 'Share Button Color',
      Edit: <FiEdit />,
      colors: ['Red', 'LightGreen', 'Blue', 'Black', 'Yellow', 'Aqua', 'Green'],
    },
    {
      typecolor: 'Link Background',
      Edit: <FiEdit />,
      colors: ['Red', 'LightGreen', 'Blue', 'Black', 'Yellow', 'Aqua', 'Green'],
    },
    // {
    //   typecolor: 'Link Color',
    //   Edit: <FiEdit />,
    //   colors: ['Red', 'LightGreen', 'Blue', 'Black', 'Yellow', 'Aqua', 'Green'],
    // },
  ]);
  const [selectedColors, setSelectedColors] = useState({});
  // State to manage the selected colors for each type
  // Map typecolor strings to state keys
  const colorMapping = {
    'Card Color': 'cardColor',
    'Text Color': 'textColor',
    'Save Button Color': 'saveButtonColor',
    'Share Button Color': 'shareButtonColor',
    'Link Background': 'linkBackground',
    'Link Color': 'linkColor',
  };

  // Function to handle color change based on type
  const handleColorChange = (typecolor, color) => {
    const colorKey = colorMapping[typecolor]; // Map typecolor to state key
    if (colorKey) {
      setSelectedColors((prevColors) => ({
        ...prevColors,
        [colorKey]: color, // Update the correct property
      }));
    }
  };

  // console.log(selectedColors);

  return (
    <colorContext.Provider
      value={{ colorArray, selectedColors, handleColorChange }}
    >
      {children}
    </colorContext.Provider>
  );
};

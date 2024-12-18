import { Fragment } from "react";
import { IoAddCircleOutline } from "react-icons/io5";
import { BsQrCode } from "react-icons/bs";

const ProfileSecurity = () => {
  const colorArray = [
    {
      title: "Card Color",
      colors: ["black", "yellow", "green", "red", "blue","aqua","darkred"], // Adjusted for array name consistency
    },
  ];

  return (
    <Fragment>
      <div className="flex justify-start  mt-4">
        <button className="bg-gray-200 font-semibold px-6 py-2 sm:px-8 rounded-full">QR Code</button>
      </div>
      <div className="h-auto sm:h-[80vh] flex flex-col justify-center items-center w-full px-4 sm:px-0">
        <div className="rounded relative h-24 w-24 sm:h-32 sm:w-32 mt-8 sm:mt-0">
          <BsQrCode className="h-full w-full" />
          <IoAddCircleOutline className="absolute -right-2 sm:-right-2 bg-white p-1 rounded-full -top-2 text-xl sm:text-2xl" />
        </div>
        <h1 className="font-medium text-lg sm:text-xl mt-4">Add Custom Logo</h1>
        <p className="text-center font-normal text-sm sm:text-base mt-2">
          Add Custom logo to be displayed in the middle <br className="hidden sm:block" /> of the QR code
        </p>

        {colorArray.map((item, index) => (
          <div key={index} className="mt-6 flex flex-col sm:flex-row items-center bg-gray-200 px-4 py-2 rounded-full gap-2 sm:gap-4 w-full max-w-xs sm:max-w-md">
            <h1 className="text-sm sm:text-base">{item.title}</h1>
            <div className="flex gap-3 mt-2 sm:mt-0">
              {item.colors.map((color, idx) => (
                <div
                  key={idx}
                  className="h-6 w-6 rounded-full cursor-pointer"
                  style={{ backgroundColor: color }}
                  title={color} 
                ></div>
              ))}
            </div>
          </div>
        ))}
        <button className="  rounded-full">Choose color</button>
        <div className="flex justify-center gap-5 mt-6 sm:mt-7 w-full">
          <button className="px-6 py-3 sm:px-8 bg-yellow-500 text-white font-semibold rounded-full">Update</button>
          <button className="px-6 py-3 sm:px-8 border-[1px] border-black rounded-full font-semibold">Cancel</button>
        </div>
      </div>
    </Fragment>
  );
};

export default ProfileSecurity;
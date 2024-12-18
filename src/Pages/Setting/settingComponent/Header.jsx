import React from 'react'
import { Fragment } from 'react'
import { IoIosHelpCircleOutline } from "react-icons/io";

const Header = () => {
  return (
    <Fragment>
        <div>
            <div className=' flex justify-between p-4'>
                <button className='bg-gray-200 px-6 py-1 rounded-full'>Setting</button>
                <button className='flex gap-2 items-center bg-gray-200 px-6 border-zinc-600 border-2 py-2 rounded-full '><IoIosHelpCircleOutline />Help</button>

            </div>

        </div>
    </Fragment>
  )
}

export default Header
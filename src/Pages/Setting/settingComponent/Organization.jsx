import React, { Fragment } from "react";

const Organization = () => {
  return (
    <Fragment>
      <div className="p-4">
        <h1 className="text-yellow-500 text-3xl font-semibold">Organization</h1>
        <hr className="mt-4" />
      </div>
      <div className="max-w-2xl mx-auto p-4 md:p-8">
        <div>
          <h1 className="font-bold">Admin Account</h1>
          <p>You can assign accounts as adminestrative accounts</p>
        </div>
        <div className=" rounded-3xl flex justify-between p-6 shadow-xl">
          <div>
            <div className="font-semibold">Avicenna Enterprises</div>
            <div>a@bc.com</div>
          </div>
          <button className="border-yellow-500 border-[1px] px-8 py-2 rounded-full">
            Admin
          </button>
        </div>
      </div>
      <div className="max-w-2xl mx-auto p-4 md:p-8">
        <div>
          <h1 className="font-bold text-zinc-700">Invite User</h1>
          <p>
            Admin have full access to enter the dashbord and all the other
            account
          </p>
        </div>
        <div>
          <h1 className="font-semibold">Email</h1>
          <input
            type="email"
            className="border-black border-[1px]  w-full rounded-full py-3"
          />
        </div>
        <div className="flex justify-end mt-4 bg-gray-200 rounded-full">
          <button
            type="submit"
            className="font-medium text-white px-12  py-3 rounded-full bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Invite
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default Organization;

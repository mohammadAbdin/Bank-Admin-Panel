import React, { useContext } from "react";
import { UserManagmentContext } from "../../Context/UserManagmentContext";
// import { User } from "../../Api/HttpsRequest";
// interface UserRowProps {
//   user: User;
// }

const UserDetails = () => {
  const { user } = useContext(UserManagmentContext);

  return (
    <div className="user-details-container">
      <div className="flow-root rounded-lg border border-gray-100 py-3 shadow-sm">
        <dl className="-my-3 divide-y divide-gray-100 text-sm">
          <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-gray-900">Name</dt>
            <dd className="text-gray-700 sm:col-span-2">{user.Name}</dd>
          </div>

          <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-gray-900">Email</dt>
            <dd className="text-gray-700 sm:col-span-2">{user.Email}</dd>
          </div>

          <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-gray-900">Age</dt>
            <dd className="text-gray-700 sm:col-span-2">{user.Age}</dd>
          </div>

          <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-gray-900">Cash</dt>
            <dd className="text-gray-700 sm:col-span-2">${user.Cash}</dd>
          </div>

          <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-gray-900">Credit</dt>
            <dd className="text-gray-700 sm:col-span-2">${user.Credit}</dd>
          </div>

          <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-gray-900">Address</dt>
            <dd className="text-gray-700 sm:col-span-2">{user.Address}</dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default UserDetails;

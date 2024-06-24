import React from "react";
import { User } from "../Api/HttpsRequest";
interface UserRowProps {
  user: User;
}
const Row: React.FC<UserRowProps> = ({ user }) => {
  return (
    <tr>
      <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900"></td>
      <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
        {user.Name}
      </td>
      <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
        {user.Email}
      </td>
      <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
        {user.PassaportId}
      </td>
      <td className="whitespace-nowrap px-4 py-2 text-gray-700">{user.Age}</td>
      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
        {user.Address}
      </td>
      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
        ${user.Cash}
      </td>
      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
        ${user.Credit}
      </td>

      <td className="whitespace-nowrap px-4 py-2">
        <a
          href={`/User/${user.id}`}
          className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
        >
          View
        </a>
      </td>
    </tr>
  );
};

export default Row;

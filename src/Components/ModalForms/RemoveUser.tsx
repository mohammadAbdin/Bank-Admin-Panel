import React from "react";
import { User } from "../../Api/HttpsRequest";
import { useNavigate } from "react-router-dom";

interface RemoveUserProps {
  user: User;
  deleteAUserFromDB: (id: string | undefined) => Promise<User | undefined>;
}
const RemoveUser: React.FC<RemoveUserProps> = ({ user, deleteAUserFromDB }) => {
  const naviagate = useNavigate();
  const handleDelete = async () => {
    const deletedUser = await deleteAUserFromDB(user.id); // Assuming user.id is the identifier
    if (deletedUser) {
      console.log("User deleted:", deletedUser);
      alert("User deleted:" + deletedUser.Name);
      naviagate("/");
    } else {
      console.error("Failed to delete user.");
    }
  };

  return (
    <form>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2" htmlFor="name">
          Are you sure you want to delete {user.Name}?
        </label>
      </div>
      <div className="flex gap-4">
        <button
          type="button"
          onClick={handleDelete}
          className="w-full bg-blue-500 text-white py-2 rounded"
        >
          Yes
        </button>
      </div>
    </form>
  );
};

export default RemoveUser;

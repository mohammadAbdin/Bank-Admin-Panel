import { ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";

import { User } from "../../Api/HttpsRequest";
const details = ["Name", "Email", "PassaportId", "Age", "Address"];
interface EditUserFormProps {
  user: User;
  handleChangeInput: (e: ChangeEvent) => any;
  editAUserFromDb: (user: User) => Promise<User | undefined>;
  onClose: any;
}
const EditUserForm: React.FC<EditUserFormProps> = ({
  user,
  handleChangeInput,
  editAUserFromDb,
  onclose,
}) => {
  const navigate = useNavigate();

  return (
    <form>
      <div className="mb-4">
        {details.map((detail, index) => (
          <div key={index}>
            <label className="block text-gray-700 mb-2" htmlFor="name">
              {detail}
            </label>
            <input
              type="text"
              id={`${detail}`}
              value={user[`${detail}`]}
              onChange={(e) => handleChangeInput(e)}
              className="w-full px-3 py-2 border rounded"
              placeholder={`Enter ${detail}`}
            />
          </div>
        ))}
      </div>
      <button
        onClick={(e) => {
          editAUserFromDb(user);
          setTimeout(() => {}, 1000);
          navigate(`/User/${user.id}`);
          onClose();
          e.preventDefault();
        }}
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded"
      >
        Edit
      </button>
    </form>
  );
};

export default EditUserForm;

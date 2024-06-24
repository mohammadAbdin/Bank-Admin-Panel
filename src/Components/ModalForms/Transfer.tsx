import { useEffect, useRef, useState } from "react";
import { User } from "../../Api/HttpsRequest";
import { useNavigate } from "react-router-dom";

interface DepositFormProps {
  user: User;
  getAllUsersFromDB: () => Promise<User[] | undefined>;
  onClose: any;
  users: User[] | undefined;
  setUsers: any;
  transferMoneyBetweenUsersFromDB: (
    reciever: User | undefined,
    amount: number
  ) => Promise<User | undefined>;
}
const Transfer: React.FC<DepositFormProps> = ({
  user,
  getAllUsersFromDB,
  onClose,
  users,
  setUsers,
  transferMoneyBetweenUsersFromDB,
}) => {
  // const [users, setUsers] = useState<User[] | undefined>([]);
  const navigate = useNavigate();
  const [selectedUser, setSelectedUser] = useState<User>();
  const [selectedUserName, setSelectedUserName] = useState<string | undefined>(
    undefined
  );

  const amount = useRef<HTMLInputElement>(null);
  const handleUserChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = users[parseFloat(e.target.value) - 1];
    console.log(selectedValue);
    setSelectedUser(selectedValue);
  };
  useEffect(() => {
    const fetchingData = async () => {
      getAllUsersFromDB().then((data: User[] | undefined) => {
        setUsers(data);
      });
    };
    fetchingData();
  }, []);
  return (
    <form>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2" htmlFor="name">
          How much you want to transfer
        </label>
        <input
          type="number"
          id="name"
          className="w-full px-3 py-2 border rounded"
          placeholder="Enter Value"
          ref={amount}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2" htmlFor="user-select">
          Select User
        </label>
        <select
          id="user-select"
          className="w-full px-3 py-2 border rounded"
          onChange={handleUserChange}
          value={selectedUserName}
        >
          <option value="" disabled>
            Select a user
          </option>
          {users
            ? users.map((user) => (
                <option key={user.id} value={user.id}>
                  {`${user.Name} (${user.PassaportId})`}
                </option>
              ))
            : null}
        </select>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded"
        onClick={(e) => {
          transferMoneyBetweenUsersFromDB(
            selectedUser,
            parseFloat(amount.current?.value || "0")
          );
          navigate(`/User/${user.id}`);
          onClose();
          e.preventDefault();
        }}
      >
        Transfer
      </button>
    </form>
  );
};

export default Transfer;

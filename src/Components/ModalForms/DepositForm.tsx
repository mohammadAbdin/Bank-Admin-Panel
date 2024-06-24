import { useRef } from "react";
import { User } from "../../Api/HttpsRequest";
import { useNavigate } from "react-router-dom";

interface DepositFormProps {
  user: User;
  depositeToAUserFromDB: (
    id: string | undefined,
    amount: number
  ) => Promise<User | undefined>;
  onClose: any;
}
const DepositForm: React.FC<DepositFormProps> = ({
  user,
  depositeToAUserFromDB,
  onClose,
}) => {
  const navigate = useNavigate();
  const amount = useRef<HTMLInputElement>(null);

  return (
    <form>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2" htmlFor="name">
          How much you want to deposite
        </label>
        <input
          type="number"
          id="name"
          className="w-full px-3 py-2 border rounded"
          placeholder="Enter name"
          ref={amount}
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded"
        onClick={(e) => {
          depositeToAUserFromDB(
            user.id,
            parseFloat(amount.current?.value || "0")
          );
          setTimeout(() => {}, 1000);
          navigate(`/User/${user.id}`);
          onClose();
          e.preventDefault();
        }}
      >
        Deposite
      </button>
    </form>
  );
};

export default DepositForm;

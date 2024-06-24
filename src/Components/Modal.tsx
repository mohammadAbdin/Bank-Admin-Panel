import React, { useContext } from "react";
import EditUserForm from "./ModalForms/EditUserForm"; // Import your form components
import DepositForm from "./ModalForms/DepositForm";
import WithdrawForm from "./ModalForms/WithdrawForm";
import Transfer from "./ModalForms/Transfer";
import RemoveUser from "./ModalForms/RemoveUser";
import { FormType } from "../Pages/UserIssues/UserOperations";
import UpdateCredit from "./ModalForms/UpdateCredit";
import { UserManagmentContext } from "../Context/UserManagmentContext";
interface ModalProps {
  onClose: () => void;
  formType: FormType | null;
}

const Modal: React.FC<ModalProps> = ({ onClose, formType }) => {
  const {
    user,
    deleteAUserFromDB,
    depositeToAUserFromDB,
    withdrawFromUserFromDB,
    updateCreditToUserFromDB,
    getAllUsersFromDB,
    users,
    setUsers,
    handleChangeInput,
    transferMoneyBetweenUsersFromDB,
    editAUserFromDb,
  } = useContext(UserManagmentContext);

  const renderForm = () => {
    switch (formType) {
      case "editUser":
        return (
          <EditUserForm
            user={user}
            handleChangeInput={handleChangeInput}
            editAUserFromDb={editAUserFromDb}
            onClose={onClose}
          />
        );
      case "deposit":
        return (
          <DepositForm
            onClose={onClose}
            depositeToAUserFromDB={depositeToAUserFromDB}
            user={user}
          />
        );
      case "withdraw":
        return (
          <WithdrawForm
            onClose={onClose}
            withdrawFromUserFromDB={withdrawFromUserFromDB}
            user={user}
          />
        );
      case "transfer":
        return (
          <Transfer
            transferMoneyBetweenUsersFromDB={transferMoneyBetweenUsersFromDB}
            setUsers={setUsers}
            users={users}
            onClose={onClose}
            getAllUsersFromDB={getAllUsersFromDB}
            user={user}
          />
        );
      case "updateCredit":
        return (
          <UpdateCredit
            onClose={onClose}
            updateCreditToUserFromDB={updateCreditToUserFromDB}
            user={user}
          />
        );
      case "removeUser":
        return <RemoveUser deleteAUserFromDB={deleteAUserFromDB} user={user} />;

      default:
        return null;
    }
  };

  return (
    <div className="Modal fixed inset-0 z-50 flex items-center justify-center bg-gray-800">
      <div className="bg-white p-8 rounded-lg shadow-lg w-11/12 max-w-md relative">
        <button
          className="absolute top-4 right-4 text-gray-700"
          onClick={onClose}
        >
          &times;
        </button>
        {renderForm()}
      </div>
    </div>
  );
};

export default Modal;

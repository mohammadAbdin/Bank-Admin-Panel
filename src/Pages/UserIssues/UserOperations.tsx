import React, { useState } from "react";
// import { User } from "../../Api/HttpsRequest";
import { Button } from "flowbite-react";
import Modal from "../../Components/Modal";
import {
  FaPencilAlt,
  FaPlus,
  FaMinus,
  FaExchangeAlt,
  FaCreditCard,
  FaTrash,
} from "react-icons/fa";

export type FormType =
  | "editUser"
  | "deposit"
  | "withdraw"
  | "transfer"
  | "updateCredit"
  | "removeUser";

const UserOperations = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formType, setFormType] = useState<FormType | null>(null);

  const handleOpenModal = (type: FormType) => {
    setFormType(type);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setFormType(null);
  };
  const iconStyle = { fontSize: "1rem" };

  return (
    <div className="operation-container grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-8">
      <Button
        color="warning"
        pill
        className="operation-button h-20 rounded-full justify-center flex items-center"
        onClick={() => handleOpenModal("editUser")}
      >
        <FaPencilAlt style={iconStyle} />
        Edit User
      </Button>
      <Button
        color="success"
        pill
        className="operation-button h-20 rounded-full justify-center flex items-center"
        onClick={() => handleOpenModal("deposit")}
      >
        <FaPlus style={iconStyle} />
        Deposite
      </Button>
      <Button
        color="dark"
        pill
        className="operation-button h-20 rounded-full justify-center flex items-center"
        onClick={() => handleOpenModal("withdraw")}
      >
        <FaMinus style={iconStyle} />
        Withdraw
      </Button>

      <Button
        color="blue"
        pill
        className="operation-button h-20 rounded-full justify-center flex items-center"
        onClick={() => handleOpenModal("transfer")}
      >
        <FaExchangeAlt style={iconStyle} />
        Transfer
      </Button>
      <Button
        color="purple"
        pill
        className="operation-button h-20 rounded-full justify-center flex items-center"
        onClick={() => handleOpenModal("updateCredit")}
      >
        <FaCreditCard style={iconStyle} />
        Update Credit
      </Button>
      <Button
        color="failure"
        pill
        className="operation-button h-20 rounded-full justify-center flex items-center"
        onClick={() => handleOpenModal("removeUser")}
      >
        <FaTrash style={iconStyle} />
        Remove User
      </Button>
      {isModalOpen && <Modal onClose={handleCloseModal} formType={formType} />}
    </div>
  );
};

export default UserOperations;

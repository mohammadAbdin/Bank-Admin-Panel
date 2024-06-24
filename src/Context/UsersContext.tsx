// import React, { createContext, useContext, useState, useEffect } from "react";
import React, { createContext, ReactNode, useState } from "react";
import { useNavigate } from "react-router-dom";
import { User, addUserToDB, getAllUsers } from "../Api/HttpsRequest";

export const UserContext = createContext<any | undefined>(undefined);

interface UserContextProps {
  children: ReactNode;
}

export const UserProvider: React.FC<UserContextProps> = ({ children }) => {
  //   const [users, setUsers] = useState<User[] | undefined | Promise<User[]>>([]);
  const [formData, setFormData] = useState({
    Name: "",
    PassaportId: "",
    Email: "",
    Age: 18,
    Address: "",
    Cash: 0,
    Credit: 100,
  });

  const updateFormData = (input: string, value: string | number) => {
    setFormData((prevData) => {
      return {
        ...prevData,
        [input]: value,
      };
    });
    // console.log(formData);
  };

  const navigate = useNavigate();
  const toAddUser = () => {
    navigate("/Add-User");
  };
  const getAllUsersFromDB = async (): Promise<User[] | undefined> => {
    try {
      const users = await getAllUsers();
      return users;
    } catch (error) {
      console.error(error);
      return undefined;
    }
  };

  const addAUser = () => {
    if (formData.Age < 18) {
      alert("You must be at least 18 years old");
      return;
    } else if (
      formData.Name.length < 3 ||
      formData.PassaportId.length < 5 ||
      formData.Email.length < 5 ||
      formData.Address.length < 5
    ) {
      alert("You must fill your Personal Information");
    } else {
      console.log(formData.PassaportId.length);

      addUserToDB(formData);
      alert(`User is added successfully`);
      navigate("/");
      console.log("it is ok");
    }
  };

  const contextValue: any = {
    updateFormData,
    toAddUser,
    addAUser,
    formData,

    getAllUsersFromDB,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

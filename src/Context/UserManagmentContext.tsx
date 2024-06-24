import React, { ChangeEvent, createContext, ReactNode, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  User,
  getAllUsers,
  deleteAUser,
  getAUser,
  depositeToAUser,
  updateCreditToUser,
  editAUser,
} from "../Api/HttpsRequest";

export const UserManagmentContext = createContext<any | undefined>(undefined);

interface UserManagmentContextProps {
  children: ReactNode;
}
export const UserManagmentProvider: React.FC<UserManagmentContextProps> = ({
  children,
}) => {
  const [user, setUser] = useState<User | undefined>();
  const [users, setUsers] = useState<User[] | undefined>([]);

  const getAUserFromDB = async (id: string): Promise<User | undefined> => {
    try {
      const user = await getAUser(id);
      return user;
    } catch (error) {
      console.error(error);
      return undefined;
    }
  };
  const deleteAUserFromDB = async (
    id: string | undefined
  ): Promise<User | undefined> => {
    try {
      const user = await deleteAUser(id);
      return user;
    } catch (error) {
      console.error(error);
      return undefined;
    }
  };
  const depositeToAUserFromDB = async (
    id: string | undefined,
    amount: number
  ): Promise<User | undefined> => {
    try {
      if (user != undefined) {
        const updatedUser: User = { ...user, Cash: amount + user.Cash };
        await setUser((prevUser) => ({
          ...prevUser,
          Cash: prevUser.Cash + amount,
        }));
        // console.log(amount);
        console.log(user);
        const newUser = await depositeToAUser(updatedUser);
        return newUser;
      }
    } catch (error) {
      console.error(error);
      return undefined;
    }
  };

  const withdrawFromUserFromDB = async (
    id: string | undefined,
    amount: number
  ): Promise<User | undefined> => {
    try {
      if (user != undefined && user.Cash + user.Credit - amount >= 0) {
        const updatedUser: User = { ...user, Cash: user.Cash - amount };
        console.log(updatedUser + " minus");

        await setUser((prevUser) => ({
          ...prevUser,
          Cash: prevUser.Cash - amount,
        }));
        // console.log(amount);
        console.log(user);
        const newUser = await depositeToAUser(updatedUser);
        return newUser;
      } else {
        alert("you do not have enough money");
      }
    } catch (error) {
      console.error(error);
      return undefined;
    }
  };

  const updateCreditToUserFromDB = async (
    id: string | undefined,
    amount: number
  ): Promise<User | undefined> => {
    try {
      if (user != undefined) {
        const updatedUser: User = { ...user, Credit: amount };
        console.log(updatedUser + " minus");

        await setUser((prevUser) => ({
          ...prevUser,
          Credit: amount,
        }));
        const newUser = await updateCreditToUser(updatedUser);
        return newUser;
      }
    } catch (error) {
      console.error(error);
      return undefined;
    }
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

  const transferMoneyBetweenUsersFromDB = async (
    reciever: User | undefined,
    amount: number
  ): Promise<User | undefined> => {
    try {
      if (user != undefined && user.Cash + user.Credit - amount >= 0) {
        console.log(reciever, "the reciever");

        const updatedUser: User = { ...user, Cash: user.Cash - amount };
        const updatedReciever: User = {
          ...reciever,
          Cash: reciever.Cash + amount,
        };

        await setUser((prevUser) => ({
          ...prevUser,
          Cash: prevUser.Cash - amount,
        }));
        // console.log(user);
        await depositeToAUser(updatedReciever);
        const newUser = await depositeToAUser(updatedUser);
        return newUser;
      } else {
        alert("you do not have enough money");
      }
    } catch (error) {
      console.error(error);
      return undefined;
    }
  };
  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;

    setUser((prevUser) => {
      if (prevUser) {
        return {
          ...prevUser,
          [id]: value,
        };
      }
      return {
        ...user,
        [id]: value,
      } as User;
    });
    console.log(user);
  };
  const editAUserFromDb = async (user: User): Promise<User | undefined> => {
    try {
      console.log("hi");
      const newUser = await editAUser(user);
      return newUser;
    } catch (error) {
      console.error(error);
      return undefined;
    }
  };

  //functions and states to be declared and defined

  const contextValue: any = {
    //functions and states to be exported
    getAUserFromDB,
    user,
    setUser,
    users,
    setUsers,
    deleteAUserFromDB,
    depositeToAUserFromDB,
    withdrawFromUserFromDB,
    updateCreditToUserFromDB,
    getAllUsersFromDB,
    transferMoneyBetweenUsersFromDB,
    handleChangeInput,
    editAUserFromDb,
  };
  return (
    <UserManagmentContext.Provider value={contextValue}>
      {children}
    </UserManagmentContext.Provider>
  );
};

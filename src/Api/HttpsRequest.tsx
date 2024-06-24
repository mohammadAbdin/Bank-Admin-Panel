const apiUrl = "https://66752edda8d2b4d072ef029b.mockapi.io/users";
import axios, { AxiosResponse } from "axios";

export interface User {
  id?: string;
  Name: string;
  PassaportId: string;
  Age: number;
  Address: string;
  Credit?: number;
  Cash?: number;
  Email: string;
}
export const depositeToAUser = async (user: User): Promise<any> => {
  const url = `${apiUrl}/${user.id}`;
  try {
    const response: AxiosResponse<User> = await axios.put<User>(url, user);
    return response.data;
  } catch (error) {
    console.error("Error updating the user:", error);
    throw error;
  }
};
export const updateCreditToUser = async (user: User): Promise<any> => {
  const url = `${apiUrl}/${user.id}`;
  try {
    const response: AxiosResponse<User> = await axios.put<User>(url, user);
    return response.data;
  } catch (error) {
    console.error("Error updating the user:", error);
    throw error;
  }
};
export const editAUser = async (user: User): Promise<any> => {
  console.log("lo");

  const url = `${apiUrl}/${user.id}`;
  try {
    const response: AxiosResponse<User> = await axios.put<User>(url, user);
    return response.data;
  } catch (error) {
    console.error("Error updating the user:", error);
    throw error;
  }
};

export const deleteAUser = async (
  id: string | undefined
): Promise<User | undefined> => {
  const url = `${apiUrl}/${id}`;
  try {
    const response: AxiosResponse<User> = await axios.delete<User>(url);
    return response.data;
  } catch (error) {
    console.error("Error deleting user:", error);
    return undefined;
  }
};
export const getAUser = async (id: string): Promise<User | undefined> => {
  try {
    const response: AxiosResponse<User> = await axios.get<User>(
      `${apiUrl}/${id}`
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    return;
  }
};
export const getAllUsers = async (): Promise<User[]> => {
  try {
    const response: AxiosResponse<User[]> = await axios.get<User[]>(apiUrl);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
export const addUserToDB = async (obj: User): Promise<User | void> => {
  try {
    console.log(obj);
    const response: any = await axios.post<User>(`${apiUrl}`, obj);
    console.log(response.data);
    // return response.data;
  } catch (error) {
    console.error("Error adding user:", error);
    throw error;
  }
};

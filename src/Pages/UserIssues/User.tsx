import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { User } from "../../Api/HttpsRequest";
import { UserManagmentContext } from "../../Context/UserManagmentContext";
import UserDetails from "./UserDetails";
import UserOperations from "./UserOperations";
import GoldPricesChart from "../../Components/GoldPriceChart";
const UserPage: React.FC = () => {
  const { getAUserFromDB, user, setUser } = useContext(UserManagmentContext);
  const { userId } = useParams<{ userId: string }>();

  const base = "USD";

  // console.log(userId);
  useEffect(() => {
    getAUserFromDB(userId).then((res: User) => {
      setUser(res);
    });
  }, [userId]);

  // console.log(user);

  return (
    <div className="user-container">
      {user ? (
        <div>
          <div className="flex flex-row justify-between">
            <UserDetails />
            <main className="flex-grow px-4 py-4">
              <GoldPricesChart base={base} />
            </main>
          </div>
          <UserOperations />
        </div>
      ) : (
        <div
          className="spinner inline-block h-8 w-8 animate-spin rounded-full border-4 border-t-4 border-red-200 border-t-black"
          role="status"
        >
          <span className="sr-only">Loading...</span>
        </div>
      )}
    </div>
  );
};

export default UserPage;

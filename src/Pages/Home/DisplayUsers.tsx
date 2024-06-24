import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../Context/UsersContext";
import { User } from "../../Api/HttpsRequest";
import Row from "../../Components/Row";
function DisplayUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const { getAllUsersFromDB } = useContext(UserContext);
  useEffect(() => {
    const fetchingData = async () => {
      getAllUsersFromDB().then((data: User[]) => {
        setUsers(data);
      });
    };
    fetchingData();
  }, []);
  const titles = [
    "",
    "Name",
    "Email",
    "PassaportId",
    "Age",
    "Address",
    "Cash",
    "Credit",
    "",
  ];
  return (
    <div className=" flex align-center justify-center ">
      {users.length > 0 ? (
        <div className="users-table  flex justify-center align-center">
          <table className="users-table divide-y-2 divide-gray-200 bg-white text-sm">
            <thead className="ltr:text-left rtl:text-right">
              <tr>
                {users.length > 0
                  ? titles.map((title, index) => (
                      <th
                        key={index}
                        className="whitespace-nowrap px-4 py-2 font-medium text-gray-900"
                      >
                        {title}
                      </th>
                    ))
                  : null}
                <th className="px-4 py-2"></th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              {users.map((user, index) => {
                return <Row user={user} key={index} />;
              })}
            </tbody>
          </table>
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
}

export default DisplayUsers;

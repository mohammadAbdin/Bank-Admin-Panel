import { useContext } from "react";
import { Button } from "flowbite-react";
import DisplayUsers from "./DisplayUsers";
// import { Button } from "flowbite-react";
import { UserContext } from "../../Context/UsersContext";
function Home() {
  const { toAddUser } = useContext(UserContext);
  return (
    <div className="h-1/2 flex flex-col xl:gap-24 justify-between">
      <div className="flex flex-wrap gap-2 mt-4">
        <Button onClick={toAddUser} color="warning" pill>
          Add User
        </Button>
      </div>
      <DisplayUsers />
    </div>
  );
}

export default Home;

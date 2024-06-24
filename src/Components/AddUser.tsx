import React, { useContext } from "react";
import InputComp from "./InputComp";
import { Button } from "flowbite-react";
import { UserContext } from "../Context/UsersContext";

interface AddUserProps {
  todo: string | number;
  button: string;
}

const AddUser: React.FC<AddUserProps> = ({ todo, button }) => {
  const { addAUser } = useContext(UserContext);

  return (
    <div className="add/editForm-container self-center flex flex-col justify-center align-center h-1/1 w-1/1 ">
      <h1 className="self-center title-shoe">{todo}</h1>
      <form
        className="add/editForm self-center flex flex-col w-6/10 justify-center align-center h-1/2"
        action="submit"
      >
        <InputComp input="Name" />
        <InputComp input="PassaportId" />
        <InputComp input="Email" />
        <InputComp input="Address" />
        <InputComp input="Age" />
        <div className="w-32 self-center">
          <Button
            onClick={() => {
              addAUser();
            }}
            color="warning"
            pill
          >
            {button}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddUser;

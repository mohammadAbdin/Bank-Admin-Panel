import React, { useContext, ChangeEvent } from "react";
import { UserContext } from "../Context/UsersContext";
interface InputCompProps {
  input: string;
}
const InputComp: React.FC<InputCompProps> = ({ input }) => {
  const { formData, updateFormData } = useContext(UserContext);
  //   console.log(formData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target.value);
    updateFormData(input, e.target.value);
  };
  return (
    <label
      htmlFor="UserEmail"
      className="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
    >
      <input
        type="email"
        id="UserEmail"
        onChange={handleChange}
        placeholder={input}
        value={formData[`${input}`]}
        className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
      />

      <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
        {input}
      </span>
    </label>
  );
};

export default InputComp;

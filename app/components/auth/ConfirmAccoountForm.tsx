"use client"
import { PinInput, PinInputField } from "@chakra-ui/pin-input";
import { useActionState, useState } from "react";
import { confirmAccount } from "@/actions/confirm-account-action";

const initialState = {
      errors: [],
};

const ConfirmAccoountForm = () => {
      const [token, setToken] = useState('');
      const [state, dispatch] = useActionState(confirmAccount, initialState)

      const handleChange = (token: string) => {
            setToken(token);
      };

      const handleComplete = () => {
            dispatch();
      };

      return (
            <div className="flex justify-center gap-5 my-10">
                  <PinInput
                        value={token}
                        onChange={handleChange}
                        onComplete={handleComplete}
                  >
                        <PinInputField className="w-10 h-10 border-gray-300 shadow rounded-lg text-center placeholder-white" />
                        <PinInputField className="w-10 h-10 border-gray-300 shadow rounded-lg text-center placeholder-white" />
                        <PinInputField className="w-10 h-10 border-gray-300 shadow rounded-lg text-center placeholder-white" />
                        <PinInputField className="w-10 h-10 border-gray-300 shadow rounded-lg text-center placeholder-white" />
                        <PinInputField className="w-10 h-10 border-gray-300 shadow rounded-lg text-center placeholder-white" />
                        <PinInputField className="w-10 h-10 border-gray-300 shadow rounded-lg text-center placeholder-white" />
                  </PinInput>
            </div>
      )
}

export default ConfirmAccoountForm
"use client"
import { PinInput, PinInputField } from "@chakra-ui/pin-input";
import { useActionState, useEffect, useState } from "react";
import { confirmAccount } from "@/actions/confirm-account-action";
import ErrorMessage from "../ui/ErrorMessage";
import SuccessMessage from "../ui/SuccessMessage";

const initialState = {
      errors: [],
      success: ''
};

const ConfirmAccoountForm = () => {
      const [isComplete, setIsComplete] = useState(false);
      const [token, setToken] = useState('');

      const confirmAccountWithToken = confirmAccount.bind(null, token);
      const [state, dispatch] = useActionState(confirmAccountWithToken, initialState);

      useEffect(() => {
            if (isComplete) {
                  dispatch();
            };
      }, [isComplete]);

      const handleChange = (token: string) => {
            setToken(token);
      };

      const handleComplete = () => {
            setIsComplete(true);
      };

      return (
            <>
                  {state.errors.map(error => <ErrorMessage key={error}>{error}</ErrorMessage>)}
                  {state.success && <SuccessMessage>{state.success}</SuccessMessage>}

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
            </>
      )
}

export default ConfirmAccoountForm
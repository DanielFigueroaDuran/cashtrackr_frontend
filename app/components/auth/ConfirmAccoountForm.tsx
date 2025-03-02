"use client"
import { PinInput, PinInputField } from "@chakra-ui/pin-input";
import { startTransition, useActionState, useEffect, useState } from "react";
import { confirmAccount } from "@/actions/confirm-account-action";
import ErrorMessage from "../ui/ErrorMessage";
import SuccessMessage from "../ui/SuccessMessage";
import { set } from "zod";

const initialState = {
      errors: [],
      success: ''
};

const ConfirmAccoountForm = () => {
      //const [isComplete, setIsComplete] = useState(false);
      //const [token, setToken] = useState('');

      //const confirmAccountWithToken = confirmAccount.bind(null, token);
      const [state, dispatch] = useActionState(confirmAccount, initialState);

      // useEffect(() => {
      //       if (isComplete) {
      //             dispatch();
      //       };
      // }, [isComplete]);

      const handleChange = (value: string) => {
            // setToken(value);
      };

      const handleComplete = (value: string) => {
            // setIsComplete(true);
            //console.log(value);
            //setToken(value);

            startTransition(() => {
                  dispatch(value);
            });
      };


      return (
            <>
                  {state.errors.map(error => <ErrorMessage key={error}>{error}</ErrorMessage>)}
                  {state.success && <SuccessMessage>{state.success}</SuccessMessage>}

                  <div className="flex justify-center gap-5 my-10">
                        <PinInput
                              // value={token}
                              //onChange={handleChange}
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
import { Dispatch, SetStateAction, startTransition, useActionState, useEffect, useState } from "react";
import { PinInput, PinInputField } from "@chakra-ui/pin-input";
import { toast } from "react-toastify";
import { validateToken } from "@/actions/validate-token.action";

type ValidateTokenFormProps = {
      setIsValidToken: Dispatch<SetStateAction<boolean>>,
      token: string,
      setToken: Dispatch<SetStateAction<string>>
};

const initialState = {
      errors: [],
      success: ''
}

export default function ValidateTokenForm({ setIsValidToken, token, setToken }: ValidateTokenFormProps,) {
      //const [isComplete, setIsComplete] = useState(false);
      //const validateTokenInput = validateToken.bind(null, token);
      const [state, dispatch] = useActionState(validateToken, initialState);

      // useEffect(() => {
      //       if (isComplete) {
      //             dispatch();
      //       };
      // }, [isComplete]); 

      useEffect(() => {
            if (state.errors) {
                  state.errors.forEach(error => {
                        toast.error(error);
                  });
            };
            if (state.success) {
                  toast.success(state.success);
                  setIsValidToken(true);
            };
      }, [state]);

      const handleChange = (token: string) => {
            // setIsComplete(false);
            // if (value.length <= 6) {
            //       setToken(value);
            // };
            setToken(token);

      };

      const handleComplete = (token: string) => {
            //setIsComplete(true);
            if (token.length === 6) {
                  startTransition(() => {
                        dispatch(token);
                  });
            };

      };

      return (
            <div className="flex justify-center gap-5 my-10">
                  <PinInput
                        value={token}
                        onChange={handleChange}
                        onComplete={handleComplete}
                  >
                        <PinInputField className="h-10 w-10 text-center border border-gray-300 shadow rounded-lg placeholder-white" />
                        <PinInputField className="h-10 w-10 text-center border border-gray-300 shadow rounded-lg placeholder-white" />
                        <PinInputField className="h-10 w-10 text-center border border-gray-300 shadow rounded-lg placeholder-white" />
                        <PinInputField className="h-10 w-10 text-center border border-gray-300 shadow rounded-lg placeholder-white" />
                        <PinInputField className="h-10 w-10 text-center border border-gray-300 shadow rounded-lg placeholder-white" />
                        <PinInputField className="h-10 w-10 text-center border border-gray-300 shadow rounded-lg placeholder-white" />
                  </PinInput>
            </div>
      )
}

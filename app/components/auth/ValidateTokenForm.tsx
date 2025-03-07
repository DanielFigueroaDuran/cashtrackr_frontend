import { validateToken } from "@/actions/validate-token.action";
import { PinInput, PinInputField } from "@chakra-ui/pin-input";
import { startTransition, useActionState, useEffect, useState } from "react";

const initialState = {
      errors: [],
      success: ''
}

export default function ValidateTokenForm() {
      const [token, setToken] = useState('');
      //const [isComplete, setIsComplete] = useState(false);
      //const validateTokenInput = validateToken.bind(null, token);
      const [state, dispatch] = useActionState(validateToken, initialState);

      // useEffect(() => {
      //       if (isComplete) {
      //             dispatch();
      //       };
      // }, [isComplete]);

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

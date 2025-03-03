"use client"
import { startTransition, useActionState, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { PinInput, PinInputField } from "@chakra-ui/pin-input";
import { confirmAccount } from "@/actions/confirm-account-action";

const initialState = {
      errors: [],
      success: ''
};

const ConfirmAccoountForm = () => {
      //const [isComplete, setIsComplete] = useState(false);
      //const [token, setToken] = useState('');

      //const confirmAccountWithToken = confirmAccount.bind(null, token);
      const router = useRouter();
      const [state, dispatch] = useActionState(confirmAccount, initialState);

      useEffect(() => {
            if (state.errors) {
                  state.errors.forEach(error => {
                        toast.error(error)
                  });
            };
            if (state.success) {
                  toast.success(state.success, {
                        onClose: () => {
                              router.push('/auth/login')
                        }
                  });
            };
      }, [state]);


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
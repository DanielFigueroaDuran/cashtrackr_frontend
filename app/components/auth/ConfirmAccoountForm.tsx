"use client"
import { PinInput, PinInputField } from "@chakra-ui/pin-input";

const ConfirmAccoountForm = () => {
      return (
            <div className="flex justify-center gap-5 my-10">
                  <PinInput>
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
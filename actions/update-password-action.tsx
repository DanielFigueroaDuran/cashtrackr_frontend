"use server"

import { UpdatePassworsShema } from "@/src/shemas";
import { requestFormReset } from "react-dom";

type ActionStateType = {
      errors: string[],
      success: string
};

export const updatePassword = async (prevstate: ActionStateType, formData: FormData) => {
      const userPassword = UpdatePassworsShema.safeParse({
            current_password: formData.get('current_password'),
            password: formData.get('password'),
            password_confirmation: formData.get('password_confirmation')
      });

      if (!userPassword.success) {
            return {
                  errors: userPassword.error.issues.map(issue => issue.message),
                  success: ''
            };
      };

      return {
            errors: [],
            success: ''
      };
};
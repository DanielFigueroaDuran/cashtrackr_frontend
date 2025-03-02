"use server"

import { TokenShema } from "@/src/shemas";

type ActionStateType = {
      errors: string[]
};

export const confirmAccount = async (token: string, prevState: ActionStateType) => {
      const confirmToken = TokenShema.safeParse(token);
      if (!confirmToken.success) {
            return {
                  errors: confirmToken.error.issues.map(issue => issue.message),
                  success: ''
            };
      };

      console.log(confirmToken.data);

      return {
            errors: []
      };
};
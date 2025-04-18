"use server"

import { ErrorResponseSchema, SuccessShema, TokenShema } from "@/src/shemas";


type ActionStateType = {
      errors: string[],
      success: string
}

export const validateToken = async (token: string, prevState: ActionStateType) => {

      const resetPasswordToken = TokenShema.safeParse(token);
      if (!resetPasswordToken.success) {
            return {
                  errors: resetPasswordToken.error.issues.map(issue => issue.message),
                  success: ''
            };
      };

      const url = `${process.env.API_URL}/api/auth/validate-token`;
      const req = await fetch(url, {
            method: 'POST',
            headers: {
                  'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                  token: resetPasswordToken.data
            })
      });

      const json = await req.json();
      //console.log(json);
      if (!req.ok) {
            const { error } = ErrorResponseSchema.parse(json);
            return {
                  errors: [error],
                  success: ''
            };
      };

      const success = SuccessShema.parse(json);

      return {
            errors: [],
            success
      }
};
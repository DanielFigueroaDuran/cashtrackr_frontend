"use server"

import { ErrorResponseSchema, ResetPasswordSchema, SuccessShema } from "@/src/shemas";

type ActionStateType = {
      errors: string[],
      success: string
}

export const resetPassword = async (Token: string, prevState: ActionStateType, formData: FormData) => {
      // console.log(Token);
      const resetPasswordInput = {
            password: formData.get('password'),
            password_confirmation: formData.get('password_confirmation')
      };

      const resetPassword = ResetPasswordSchema.safeParse(resetPasswordInput);
      if (!resetPassword.success) {
            return {
                  errors: resetPassword.error?.issues.map(issue => issue.message),
                  success: ''
            };
      };

      const url = `${process.env.API_URL}/api/auth/reset-password/${Token}`;
      const req = await fetch(url, {
            method: 'POST',
            headers: {
                  'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                  password: resetPasswordInput.password
            })
      });

      const json = await req.json();
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
      };
};
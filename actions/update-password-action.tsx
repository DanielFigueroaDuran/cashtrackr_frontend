"use server"

import { ErrorResponseSchema, SuccessShema, UpdatePassworsShema } from "@/src/shemas";
import { cookies } from "next/headers";
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

      const token = (await cookies()).get('CASHTRACKR_TOKEN')?.value;
      const url = `${process.env.API_URL}/api/auth/update-password`;
      const req = await fetch(url, {
            method: 'POST',
            headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                  current_password: userPassword.data.current_password,
                  password: userPassword.data.password
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
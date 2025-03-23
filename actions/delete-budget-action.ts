"use server"

import { Budget, ErrorResponseSchema, PasswordValidationShema } from "@/src/shemas";
import { cookies } from "next/headers";

type ActionStateType = {
      errors: string[],
};

export const deleteBudget = async (budgetId: Budget['id'], prevState: ActionStateType, formData: FormData) => {
      const currentPassword = PasswordValidationShema.safeParse(formData.get('password'));
      if (!currentPassword.success) {
            return {
                  errors: currentPassword.error.issues.map(issue => issue.message)
            };
      };

      //Check Password
      const token = (await cookies()).get('CASHTRACKR_TOKEN')?.value;
      const checkPasswordUrl = `${process.env.API_URL}/api/auth/check-password`;
      const checkPasswordReq = await fetch(checkPasswordUrl, {
            method: 'POST',
            headers: {
                  'Authorization': `Bearer ${token}`,
                  'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                  password: currentPassword.data
            })
      });

      const checkPasswordJson = await checkPasswordReq.json();
      // console.log(checkPasswordJson);
      if (!checkPasswordReq.ok) {
            const { error } = ErrorResponseSchema.parse(checkPasswordJson);
            return {
                  errors: [error]
            };
      };

      return {
            errors: [],
      };
};
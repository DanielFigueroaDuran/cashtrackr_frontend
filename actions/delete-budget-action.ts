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

      //Delete budget
      const deleteBudgetUrl = `${process.env.API_URL}/api/budgets/${budgetId}`;
      const deleteBudgetReq = await fetch(deleteBudgetUrl, {
            method: 'DELETE',
            headers: {
                  'Authorization': `Bearer ${token}`
            }
      });

      const deleteBudgetJson = deleteBudgetReq.json();

      if (!deleteBudgetReq.ok) {
            const { error } = ErrorResponseSchema.parse(deleteBudgetJson);
            return {
                  errors: [error]
            };
      };


      return {
            errors: [],
      };
};
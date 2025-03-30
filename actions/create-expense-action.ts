"use server"

import { DraftExpenseShema, ErrorResponseSchema, SuccessShema } from "@/src/shemas";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

type ActionEstateType = {
      errors: string[],
      success: string
};

export const createExpense = async (budgetId: number, prevState: ActionEstateType, formData: FormData) => {
      const expenseData = {
            name: formData.get('name'),
            amount: formData.get('amount')
      };

      const expense = DraftExpenseShema.safeParse(expenseData);

      if (!expense.success) {
            return {
                  errors: expense.error.issues.map(issue => issue.message),
                  success: ''
            };
      };

      //generate expense
      const token = (await cookies()).get('CASHTRACKR_TOKEN')?.value;

      const url = `${process.env.API_URL}/api/budgets/${budgetId}/expenses`;

      const req = await fetch(url, {
            method: 'POST',
            headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                  name: expense.data.name,
                  amount: expense.data.amount
            })
      });

      const json = await req.json();

      if (!req.ok) {
            const { error } = ErrorResponseSchema.parse(json);
            return {
                  errors: [error],
                  success: ''
            }
      };

      const success = SuccessShema.parse(json);
      revalidatePath(`/admin/budgets/${budgetId}`);

      return {
            errors: [],
            success
      };
};
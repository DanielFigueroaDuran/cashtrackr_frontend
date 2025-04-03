"use server"

import { Budget, ErrorResponseSchema, Expense, SuccessShema } from "@/src/shemas";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

type BudgetAndExpenseIdType = {
      budgetId: Budget['id'],
      expenseId: Expense['id']
};

type ActionStateType = {
      errors: string[],
      success: string
}

export const DeleteExpense = async (
      { budgetId, expenseId }: BudgetAndExpenseIdType,
      prevState: ActionStateType
) => {
      const token = (await cookies()).get('CASHTRACKR_TOKEN')?.value;
      const url = `${process.env.API_URL}/api/budgets/${budgetId}/expenses/${expenseId}`;
      const req = await fetch(url, {
            method: 'DELETE',
            headers: {
                  'Authorization': `Bearer ${token}`
            }
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
      revalidatePath(`/admin/budgets/${budgetId}`);

      return {
            errors: [],
            success
      }
};
"use server"
import { cookies } from "next/headers";
import { Budget, DraftExpenseShema, ErrorResponseSchema, SuccessShema } from "@/src/shemas";
import { revalidatePath } from "next/cache";

type BudgetAndExpenseIdType = {
      budgetId: Budget['id'],
      expenseId: Budget['id']
};

type ActionStateType = {
      errors: string[],
      success: string
};

export const editExpense = async (
      { budgetId, expenseId }: BudgetAndExpenseIdType,
      prevState: ActionStateType,
      formData: FormData) => {

      //console.log(budgetId);
      //console.log(expenseId);
      const expense = DraftExpenseShema.safeParse({
            name: formData.get('name'),
            amount: formData.get('amount')
      });

      if (!expense.success) {
            return {
                  errors: expense.error.errors.map(issue => issue.message),
                  success: ''
            };
      };

      //update expense
      const token = (await cookies()).get('CASHTRACKR_TOKEN')?.value;
      const url = `${process.env.API_URL}/api/budgets/${budgetId}/expenses/${expenseId}`;
      const req = await fetch(url, {
            method: 'PUT',
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
            };
      };

      const success = SuccessShema.parse(json);
      //revalidatePath(`/admin/budgets/${budgetId}`);

      return {
            errors: [],
            success
      };
};
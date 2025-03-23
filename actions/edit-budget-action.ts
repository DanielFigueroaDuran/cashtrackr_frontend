"use server"
import { Budget, DraftBudgetSchema, ErrorResponseSchema, SuccessShema } from '@/src/shemas';
import { cookies } from 'next/headers';

type ActionStateType = {
      errors: string[],
      success: string
}

export const editBudget = async (budgetId: Budget['id'], prevState: ActionStateType, formData: FormData) => {
      const budgetData = {
            name: formData.get('name'),
            amount: formData.get('amount')
      };
      const budget = DraftBudgetSchema.safeParse(budgetData);

      if (!budget.success) {
            return {
                  errors: budget.error.issues.map(issue => issue.message),
                  success: ''
            };
      };

      const token = (await cookies()).get('CASHTRACKR_TOKEN')?.value;
      const url = `${process.env.Api_url}/api/budgets/${budgetId}`;
      const req = await fetch(url, {
            method: 'PUT',
            headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                  name: budget.data.name,
                  amount: budget.data.amount
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
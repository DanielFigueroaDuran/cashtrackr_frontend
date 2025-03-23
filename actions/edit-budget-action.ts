"use server"
import { Budget, DraftBudgetSchema } from '@/src/shemas';

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

      return {
            errors: [],
            success: ''
      };
};
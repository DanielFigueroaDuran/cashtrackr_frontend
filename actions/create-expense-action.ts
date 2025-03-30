"use server"

import { DraftExpenseShema } from "@/src/shemas";

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

      return {
            errors: [],
            success: ''
      }
};
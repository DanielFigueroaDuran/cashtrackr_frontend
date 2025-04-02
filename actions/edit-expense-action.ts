"use server"

import { Budget } from "@/src/shemas";

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

      console.log(budgetId);
      console.log(expenseId);


      return {
            errors: [],
            success: ''
      }
};
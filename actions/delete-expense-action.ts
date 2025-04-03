"use server"

import { Budget, Expense } from "@/src/shemas";

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
      console.log(budgetId);
      console.log(expenseId);


      return {
            errors: [],
            success: ''
      }
};
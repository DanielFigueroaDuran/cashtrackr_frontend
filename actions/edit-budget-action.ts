import { Budget } from '@/src/shemas';
import { formaDate } from '@/src/utlis';
import { error } from 'console';
"use server"

type ActionStateType = {
      error: string,
      success: string
}

export const editBudget = async (budgetId: Budget['id'], prevState: ActionStateType, formaDate: FormData) => {
      console.log(budgetId);

      return {
            error: [],
            success: ''
      };
};
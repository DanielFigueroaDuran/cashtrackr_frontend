"use server"

import { Budget } from "@/src/shemas";

type ActionStateType = {
      errors: string[],
};

export const deleteBudget = async (budgetId: Budget['id'], prevState: ActionStateType, formData: FormData) => {
      console.log(formData.get('password'));
      console.log(budgetId);

      return {
            errors: [],
      };
};
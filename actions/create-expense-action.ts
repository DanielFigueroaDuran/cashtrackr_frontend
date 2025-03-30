"use server"

type ActionEstateType = {
      errors: string[],
      success: string
};

export const createExpense = async (budgetId: number, prevState: ActionEstateType, formData: FormData) => {
      console.log(budgetId);

      return {
            errors: [],
            success: ''
      }
};
"use server"

import { DraftBudgetSchema, SuccessShema } from "@/src/shemas";
import { cookies } from "next/headers";

type ActionStateType = {
      errors: string[],
      success: string
};

export const createBudget = async (prevState: ActionStateType, formData: FormData) => {

      const budget = DraftBudgetSchema.safeParse({
            name: formData.get('name'),
            amount: formData.get('amount')
      });
      if (!budget.success) {
            return {
                  errors: budget.error.issues.map(issue => issue.message),
                  success: ''
            };
      };

      const token = (await cookies()).get('CASHTRACKR_TOKEN')?.value;
      console.log('daniel', token);


      const url = `${process.env.API_URL}/api/budgets`;
      const req = await fetch(url, {
            method: 'POST',
            headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer  ${token}`
            },
            body: JSON.stringify({
                  name: budget.data.name,
                  amount: budget.data.amount
            })

      });

      const json = await req.json();

      console.log('JSON CLG', json);

      //const success = SuccessShema.parse(json);


      return {
            errors: [],
            success: ''
      };
};
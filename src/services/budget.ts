import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import { cache } from "react";
import { BudgetAPIResponseSchema } from "../shemas";

export const getBudget = cache(async (budgetId: string) => {
      const token = (await cookies()).get('CASHTRACKR_TOKEN')?.value;
      const url = `${process.env.API_URL}/api/budgets/${budgetId}`;

      const req = await fetch(url, {
            headers: {
                  'Authorization': `Bearer ${token}`
            }
      });
      const json = await req.json();

      if (!req.ok) {
            notFound();
      };

      const budget = BudgetAPIResponseSchema.parse(json);
      return budget;
});
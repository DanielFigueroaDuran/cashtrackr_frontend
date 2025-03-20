import { cookies } from "next/headers";

const getBudget = async (budgetId: string) => {
      const token = (await cookies()).get('CASHTRACKR_TOKEN')?.value;
      const url = `${process.env.API_URL}/api/budgets/${budgetId}`;

      const req = await fetch(url, {
            headers: {
                  'Authorization': `Bearer ${token}`
            }
      });
      const json = await req.json();
      //console.log(req.ok);

      if (!req.ok) {

      };

      return json;
};

const EditBudgetPage = async ({ params }: { params: { id: string } }) => {
      const { id } = await params;
      const budget = await getBudget(id);

      return (
            <div>EditBudgetPage</div>
      )
}

export default EditBudgetPage
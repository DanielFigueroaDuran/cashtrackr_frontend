import AddExpenseButton from "@/app/components/expenses/AddExpenseButton";
import { getBudget } from "@/src/services/budget";
import { Metadata } from "next";

export const generateMetadata = async ({ params }: { params: { id: string } }): Promise<Metadata> => {
      const { id } = await params;
      const budget = await getBudget(id);

      return {
            title: `CashTrackr - ${budget.name}`,
            description: `CashTrackr - ${budget.name}`
      };
};

const BudgetDetailPage = async ({ params }: { params: { id: string } }) => {
      const { id } = await params;
      const budget = await getBudget(id);

      return (
            <>
                  <div className='flex justify-between items-center'>
                        <div>
                              <h1 className="font-black text-4xl text-purple-950">{budget.name}</h1>
                              <p className="text-xl font-bold">Administra tus {''} <span className="text-amber-500">gastos</span></p>
                        </div>
                        <AddExpenseButton />
                  </div>
            </>
      )
}

export default BudgetDetailPage
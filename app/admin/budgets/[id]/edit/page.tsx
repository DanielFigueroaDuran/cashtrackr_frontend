import EditBudgetForm from "@/app/components/budgets/EditBudgetForm";
import { BudgetAPIResponseSchema } from "@/src/shemas";
import { cookies } from "next/headers";
import Link from "next/link";
import { notFound } from "next/navigation";

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
            notFound();
      };

      const budget = BudgetAPIResponseSchema.parse(json)
      return budget;
};

const EditBudgetPage = async ({ params }: { params: { id: string } }) => {
      const { id } = await params;
      const budget = await getBudget(id);

      return (
            <>
                  <div className='flex flex-col-reverse md:flex-row md:justify-between items-center'>
                        <div className='w-full md:w-auto'>
                              <h1 className='font-black text-4xl text-purple-950 my-5'>
                                    Editar Presupuesto: {budget.name}
                              </h1>
                              <p className="text-xl font-bold">Llena el formulario y crea un nuevo {''}
                                    <span className="text-amber-500">presupuesto</span>
                              </p>
                        </div>
                        <Link
                              href={'/admin'}
                              className='bg-amber-500 p-2 rounded-lg text-white font-bold w-full md:w-auto text-center'
                        >
                              Volver
                        </Link>
                  </div>
                  <div className='p-10 mt-10  shadow-lg border '>
                        <EditBudgetForm />
                  </div>
            </>
      )
}

export default EditBudgetPage
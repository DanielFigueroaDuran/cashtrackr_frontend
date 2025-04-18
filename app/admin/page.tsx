//import { verifySession } from "@/src/auth/dal"
//import { getToken } from "@/src/auth/token";
import { BudgetsAPIResponseSchema } from "@/src/shemas";
import { formatDate, formatCurrencyEu } from "@/src/utlis";
import { Metadata } from "next"
import { cookies } from "next/headers";
import Link from "next/link"
import BudgetMenu from "../components/budgets/BudgetMenu";
import DeleteBudgetModal from "../components/budgets/DeleteBudgetModal";


export const metadata: Metadata = {
      title: "CashTrackr - Panel de Administración",
      description: "CashTrackr - Panel de Administración"
};

const getUserBudgets = async () => {
      const token = (await cookies()).get('CASHTRACKR_TOKEN')?.value;

      //const token = getToken();
      const url = `${process.env.API_URL}/api/budgets`;
      const req = await fetch(url, {
            headers: {
                  'Authorization': `Bearer ${token}`
            },
            next: {
                  tags: ['all-budgets']
            }
      });

      const json = await req.json();
      //console.log("Respuesta de la API:", json);
      const budgets = BudgetsAPIResponseSchema.parse(json);
      //console.log( budgets);
      return budgets;
};

const AdminPage = async () => {
      // await verifySession();
      const budgets = await getUserBudgets();
      //await getUserBudgets();

      return (
            <>
                  <div className='flex flex-col-reverse md:flex-row md:justify-between items-center'>
                        <div className='w-full md:w-auto'>
                              <h1 className="font-black text-4xl text-purple-950 my-5">Mis Presupuestos</h1>
                              <p className="text-xl font-bold">Maneja y administra tus {''}
                                    <span className="text-amber-500">presupuestos</span>
                              </p>
                        </div>
                        <Link
                              href={'/admin/budgets/new'}
                              className='bg-amber-500 p-2 rounded-lg text-white font-bold w-full md:w-auto text-center'
                        >
                              Crear Presupuesto
                        </Link>
                  </div>
                  {budgets.length ? (
                        <>
                              <ul role="list" className="divide-y divide-gray-300 border shadow-lg mt-10 ">
                                    {budgets.map((budget) => (
                                          <li key={budget.id} className="flex justify-between gap-x-6 p-5 ">
                                                <div className="flex min-w-0 gap-x-4">
                                                      <div className="min-w-0 flex-auto space-y-2">
                                                            <p className="text-sm font-semibold leading-6 text-gray-900">
                                                                  <Link
                                                                        href={`/admin/budgets/${budget.id}`}
                                                                        className="cursor-pointer hover:underline text-2xl font-bold"
                                                                  >
                                                                        {budget.name}
                                                                  </Link>
                                                            </p>
                                                            <p className="text-xl font-bold text-amber-500">
                                                                  {formatCurrencyEu(+budget.amount)}
                                                            </p>
                                                            <p className='text-gray-500  text-sm'>
                                                                  Ultima Actualización: {''}
                                                                  <span className="font-bold">{formatDate(budget.updatedAt)}</span>
                                                            </p>
                                                      </div>
                                                </div>
                                                <div className="flex shrink-0 items-center gap-x-6">
                                                      <BudgetMenu
                                                            budgetId={budget.id}
                                                      />
                                                </div>
                                          </li>
                                    ))}
                              </ul>
                              <DeleteBudgetModal />
                        </>
                  )
                        : (
                              <p className="text-center py-20">
                                    no hay presupuesto aún {''}
                                    <Link
                                          className="text-purple-950 font-bold"
                                          href={'/admin/budgets/new'}
                                    >
                                          Comíenza creando uno
                                    </Link>
                              </p>
                        )
                  }
            </>
      )
}


export default AdminPage
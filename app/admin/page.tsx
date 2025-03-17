//import { verifySession } from "@/src/auth/dal"
import { getToken } from "@/src/auth/token";
import { BudgetsAPIResponseSchema } from "@/src/shemas";
import { Metadata } from "next"
import { cookies } from "next/headers";
import Link from "next/link"


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
            }
      });

      const json = await req.json();
      console.log(json);
      const budgets = BudgetsAPIResponseSchema.parse(json);
      return budgets;
};

const AdminPage = async () => {
      // await verifySession();
      const budgets = await getUserBudgets();
      // await getUserBudgets();

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


            </>
      )
}
// {budgets.length ? (
//       <p>Sí hay...</p>
// )
//       : (
//             <p className="text-center py-20">
//                   no hay presupuesto aún {''}
//                   <Link
//                         className="text-purple-950 font-bold"
//                         href={'/admin/budgets/new'}
//                   >
//                         Comíenza creando uno
//                   </Link>
//             </p>
//       )
// }
export default AdminPage
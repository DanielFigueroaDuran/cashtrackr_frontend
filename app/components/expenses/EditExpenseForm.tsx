import { DialogTitle } from "@headlessui/react";
import { useEffect } from "react";
import { useParams, useSearchParams } from "next/navigation";
import ExpenseForm from "./ExpenseForm";

const EditExpenseForm = ({ closeModal }: { closeModal: () => void }) => {
      const { id: budgetId } = useParams();
      console.log(budgetId);

      const searchParams = useSearchParams();
      const expenseId = searchParams.get('editExpenseId');

      console.log(expenseId);

      useEffect(() => {
            const url = `${process.env.NEXT_PUBLIC_URL}/admin/api/budgets/${budgetId}/expenses/${expenseId}`
            //console.log(url);/api/budgets/1/expenses/1
            fetch(url)
                  .then(res => res.json())
                  .then(data => console.log(data))
      }, []);

      return (
            <>
                  <DialogTitle
                        as="h3"
                        className="font-black text-4xl text-purple-950 my-5"
                  >
                        Editar Gasto
                  </DialogTitle>
                  <p className="text-xl font-bold">Edita los detalles de un {''}
                        <span className="text-amber-500">gasto</span>
                  </p>
                  <form
                        className="bg-gray-100 shadow-lg rounded-lg p-10 mt-10 border"
                        noValidate
                  >
                        <ExpenseForm />

                        <input
                              type="submit"
                              className="bg-amber-500 w-full p-3 text-white uppercase font-bold hover:bg-amber-600 cursor-pointer transition-colors"
                              value='Guardar Cambios'
                        />
                  </form>
            </>
      )
}

export default EditExpenseForm
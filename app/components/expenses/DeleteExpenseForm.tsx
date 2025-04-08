
import { useParams, useSearchParams } from "next/navigation";
import { DialogTitle } from "@headlessui/react";
import { startTransition, useActionState, useCallback, useEffect } from "react";
import { DeleteExpense } from "@/actions/delete-expense-action";
import ErrorMessage from "../ui/ErrorMessage";
import { toast } from "react-toastify";

type DeleteExpenseForm = {
      closeModal: () => void
}

const initialState = {
      errors: [],
      success: ''
};

const DeleteExpenseForm = ({ closeModal }: DeleteExpenseForm) => {
      const { id: budgetId } = useParams()
      const searchParams = useSearchParams()
      const expenseId = searchParams.get('deleteExpenseId')!
      const newCloseModal = useCallback(closeModal, [closeModal]);

      const deleteexpenseWhitBudgetId = DeleteExpense.bind(null, {
            budgetId: Number(budgetId),
            expenseId: +expenseId
      });
      const [state, dispatch] = useActionState(deleteexpenseWhitBudgetId, initialState);

      useEffect(() => {
            if (state.success) {
                  toast.success(state.success);
                  newCloseModal();
            };
      }, [state, newCloseModal]);

      useEffect(() => {
            if (!Number.isInteger(Number(budgetId)) || !Number.isInteger(+expenseId)) {
                  newCloseModal();
            };
      }, [budgetId, expenseId, newCloseModal]);

      return (
            <>
                  <DialogTitle
                        as="h3"
                        className="font-black text-4xl text-purple-950 my-5"
                  >
                        Eliminar Gasto
                  </DialogTitle>

                  {state.errors.map(error => <ErrorMessage key={error}>{error}</ErrorMessage>)}

                  <p className="text-xl font-bold">Confirma para eliminar, {''}
                        <span className="text-amber-500">el gasto</span>
                  </p>
                  <p className='text-gray-600 text-sm'>(Un gasto eliminado no se puede recuperar)</p>
                  <div className="grid grid-cols-2 gap-5 mt-10">
                        <button
                              className="bg-amber-500 w-full p-3 text-white uppercase font-bold hover:bg-amber-600 cursor-pointer transition-colors"
                              onClick={closeModal}
                        >Cancelar</button>
                        <button
                              type='button'
                              className="bg-red-500 w-full p-3 text-white uppercase font-bold hover:bg-red-600 cursor-pointer transition-colors"
                              onClick={() => {
                                    startTransition(() => {
                                          dispatch();
                                    });
                              }}
                        >
                              Eliminar
                        </button>
                  </div>
            </>
      )
}

export default DeleteExpenseForm
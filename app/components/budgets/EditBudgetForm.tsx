"use client"
import { useRouter } from 'next/navigation';
import { useActionState, useEffect } from 'react';
import { editBudget } from "@/actions/edit-budget-action";
import { toast } from 'react-toastify';
import ErrorMessage from '../ui/ErrorMessage';
import { Budget } from "@/src/shemas"
import BudgetForm from "./BudgetForm"

const initialState = {
      errors: [],
      success: ''
};

const EditBudgetForm = ({ budget }: { budget: Budget }) => {
      const router = useRouter();
      const editBudgeWithId = editBudget.bind(null, budget.id);
      const [state, dispatch] = useActionState(editBudgeWithId, initialState);

      useEffect(() => {
            if (state.success) {
                  toast.success(state.success);
                  router.push('/admin');
            };
      }, [state, router]);

      return (
            <>
                  <form
                        className="mt-10 space-y-3"
                        noValidate
                        action={dispatch}
                  >
                        {state.errors.map(error => <ErrorMessage key={error}>{error}</ErrorMessage>)}
                        <BudgetForm
                              budget={budget}
                        />
                        <input
                              type="submit"
                              className="bg-amber-500 w-full p-3 text-white uppercase font-bold hover:bg-amber-600 cursor-pointer transition-colors"
                              value='Guardar Cambios'
                        />
                  </form>
            </>
      )
}

export default EditBudgetForm
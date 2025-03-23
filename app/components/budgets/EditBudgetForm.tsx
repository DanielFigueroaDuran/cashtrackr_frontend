"use client"
import { useActionState } from 'react';
import { editBudget } from "@/actions/edit-budget-action";
import ErrorMessage from '../ui/ErrorMessage';
import { Budget } from "@/src/shemas"
import BudgetForm from "./BudgetForm"

const initialState = {
      errors: [],
      success: ''
};

const EditBudgetForm = ({ budget }: { budget: Budget }) => {
      const editBudgeWithId = editBudget.bind(null, budget.id);
      const [state, dispatch] = useActionState(editBudgeWithId, initialState);

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
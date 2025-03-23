"use client"
import { useActionState, Dispatch } from 'react';
import { Budget } from "@/src/shemas"
import BudgetForm from "./BudgetForm"
import { editBudget } from "@/actions/edit-budget-action";

const initialState = {
      error: [],
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
"use client"
import { Budget } from "@/src/shemas"
import BudgetForm from "./BudgetForm"

const EditBudgetForm = ({ budget }: { budget: Budget }) => {
      return (
            <>
                  <form
                        className="mt-10 space-y-3"
                        noValidate
                        action={() => { }}
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
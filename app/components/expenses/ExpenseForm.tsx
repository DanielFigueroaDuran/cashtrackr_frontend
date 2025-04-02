import { DraftExpense } from "@/src/shemas";

type ExpenseFormProps = {
      expense?: DraftExpense
};

const ExpenseForm = ({ expense }: ExpenseFormProps) => {
      return (
            <>
                  <div className="mb-5">
                        <label htmlFor="name" className="text-sm uppercase font-bold">
                              Nombre Gasto
                        </label>
                        <input
                              id="name"
                              className="w-full p-3  border border-gray-100  bg-white"
                              type="text"
                              placeholder="Nombre del Gasto"
                              name="name"
                              defaultValue={expense?.name}
                        />
                  </div>

                  <div className="mb-5">
                        <label htmlFor="amount" className="text-sm uppercase font-bold">
                              Cantidad Gasto
                        </label>
                        <input
                              id="amount"
                              className="w-full p-3  border border-gray-100 bg-white"
                              type="number"
                              placeholder="Cantidad Gasto"
                              name="amount"
                              defaultValue={expense?.amount}
                        />
                  </div>
            </>
      )
};

export default ExpenseForm;
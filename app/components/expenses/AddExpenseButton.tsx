"use client"

import { useRouter } from "next/navigation"

const AddExpenseButton = () => {
      const router = useRouter();
      return (
            <button
                  type="button"
                  className="bg-amber-500 px-10 py-2 rounded-lg text-white font-bold  hover:bg-amber-600 cursor-pointer transition-colors"
                  onClick={() => router.push(location.pathname + '?addExpense=true&showModal=true')}
            >
                  Agregar Gasto
            </button>
      )
}

export default AddExpenseButton
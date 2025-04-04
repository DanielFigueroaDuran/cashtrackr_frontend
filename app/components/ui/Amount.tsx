import { formatCurrencyEu } from "@/src/utlis";

type AmountProps = {
      label: string,
      amount: number
};

const Amount = ({ label, amount }: AmountProps) => {
      return (
            <p className="text-2xl font-bold">
                  {label}: {''}
                  <span className="text-amber-500">{formatCurrencyEu(amount)}</span>
            </p>
      )
}

export default Amount
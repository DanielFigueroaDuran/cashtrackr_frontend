
const SuccessMessage = ({ children }: { children: React.ReactNode }) => {
      return (
            <div className="text-center my-4 bg-amber-600 text-white font-bold p-3 uppercase text-sm">
                  {children}
            </div>
      )
}

export default SuccessMessage
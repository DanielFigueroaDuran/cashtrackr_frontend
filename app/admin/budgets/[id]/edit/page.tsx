

const EditBudgetPage = async ({ params }: { params: { id: string } }) => {
      const { id } = await params;
      console.log(id);
      return (
            <div>EditBudgetPage</div>
      )
}

export default EditBudgetPage
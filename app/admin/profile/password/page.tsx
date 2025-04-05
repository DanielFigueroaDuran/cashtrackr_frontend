import ChangePasswordForm from "@/app/components/profile/ChangePasswordForm";


const ChangePasswordPage = async () => {
      return (
            <>
                  <h1 className="font-black text-4xl text-purple-950 my-5">Cambiar Password</h1>
                  <p className="text-xl font-bold">Aquí puedes cambiar tu {''}
                        <span className="text-amber-500">password</span>
                  </p>
                  <ChangePasswordForm />
            </>
      )
}


export default ChangePasswordPage;
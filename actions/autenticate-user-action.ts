"use server"
import { LoginSchema } from "@/src/shemas";

type ActionStatetype = {
      errors: string[]
};

export const authenticate = async (prevState: ActionStatetype, formData: FormData) => {

      const loginCredentials = {
            email: formData.get('email'),
            password: formData.get('password')
      };

      // console.log('LoginCredential', loginCredentials);

      const auth = LoginSchema.safeParse(loginCredentials);
      if (!auth.success) {
            return {
                  errors: auth.error.errors.map(issue => issue.message)
            };
      };

      return {
            errors: []
      };
};
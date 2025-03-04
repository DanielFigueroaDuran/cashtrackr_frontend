"use server"

import { LoginSchema } from "@/src/shemas";

export const authenticate = async (prevState: any, formData: FormData) => {

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
};
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

      const url = `${process.env.API_URL}/api/auth/login`;
      const req = await fetch(url, {
            method: 'POST',
            headers: {
                  'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                  password: auth.data.password,
                  email: auth.data.email
            })
      });

      const json = await req.json();

      console.log('req.ok', req.ok);
      console.log('json', json);

      return {
            errors: []
      };
};
"use server"

import { ErrorResponseSchema, RegisterSchema, SuccessShema } from "@/src/shemas";

type ActionStateType = {
      errors: string[],
      success: string
};

export const register = async (prevState: ActionStateType, formData: FormData) => {
      //console.log(formData);
      const registerData = {
            email: formData.get('email'),
            name: formData.get('name'),
            password: formData.get('password'),
            password_confirmation: formData.get('password_confirmation')
      }

      //console.log(registerData);

      //Validate
      const register = RegisterSchema.safeParse(registerData);
      // console.log(register.error?.message);

      if (!register.success) {
            const errors = register.error.errors.map(error => error.message);
            return {
                  errors,
                  success: prevState.success
            };
      };

      // console.log(register);

      // Register the user

      const url = `${process.env.API_URL}/api/auth/create-account`;
      console.log(url);
      const req = await fetch(url, {
            method: 'POST',
            headers: {
                  'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                  name: register.data.name,
                  password: register.data.password,
                  email: register.data.email
            })
      });

      const json = await req.json();

      if (req.status === 409) {
            const { error } = ErrorResponseSchema.parse(json);
            return {
                  errors: [error],
                  success: prevState.success
            };
      };

      const success = SuccessShema.parse(json);
      // console.log(success);

      return {
            errors: [],
            success
      };
};


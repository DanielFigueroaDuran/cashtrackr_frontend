"use server"

import { RegisterSchema } from "@/src/shemas";

export const register = async (formData: FormData) => {
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

      const errors = register.error?.errors.map(error => error.message);
      console.log(errors);
      console.log(register);

      // Register the user
};


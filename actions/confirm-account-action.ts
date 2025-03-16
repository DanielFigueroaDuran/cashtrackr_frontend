"use server"

import { ErrorResponseSchema, SuccessShema, TokenShema } from "@/src/shemas";

type ActionStateType = {
      errors: string[],
      // success: string
};

export const confirmAccount = async (token: string, prevState: ActionStateType) => {
      console.log(token);
      // const confirmToken = TokenShema.safeParse(token);
      // if (!confirmToken.success) {
      //       return {
      //             errors: confirmToken.error.issues.map(issue => issue.message),
      //             success: ''
      //       };
      // };

      // //confirm user

      // const url = `${process.env.API_URL}/api/auth/confirm-account`;
      // console.log(url);
      // const req = await fetch(url, {
      //       method: 'POST',
      //       headers: {
      //             'Content-Type': 'application/json',
      //       },
      //       body: JSON.stringify({
      //             token: confirmToken.data
      //       })
      // });

      // const json = await req.json();

      // if (!req.ok) {
      //       const { error } = ErrorResponseSchema.parse(json);
      //       return {
      //             errors: [error],
      //             success: ''
      //       };
      // };

      // const success = SuccessShema.parse(json);

      return {
            errors: [],
            //success: ''
      };
};
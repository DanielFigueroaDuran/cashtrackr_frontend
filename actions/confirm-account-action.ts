"use server"

type ActionStateType = {
      errors: string[]
};

export const confirmAccount = async (token: string, prevState: ActionStateType) => {
      console.log(`desde ConfirmAccount $`,);
      console.log(token);

      return {
            errors: []
      };
};
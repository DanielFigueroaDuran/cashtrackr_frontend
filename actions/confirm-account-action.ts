"use server"

type ActionStateType = {
      errors: string[]
};

export const confirmAccount = async (prevState: ActionStateType) => {
      console.log(`desde ConfirmAccount $`,);

      return {
            errors: []
      };
};
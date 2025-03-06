"use server"

type ActionStateType = {
      errors: string[],
      success: string
};

export const forgotPassword = async (prevState: ActionStateType, formData: FormData) => {
      console.log('desde forgotPassword');

      return {
            errors: [],
            success: ''
      };
};
"use server"

type ActionStateType = {
      errors: string[],
      success: string
}

export const validateToken = async (prevState: ActionStateType, token: string) => {
      console.log('desde validateToken', token);

      return {
            errors: [],
            success: ''
      }
};
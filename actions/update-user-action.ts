"use server"

import { ErrorResponseSchema, ProfileFormSchema, SuccessShema } from "@/src/shemas";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

type ActionStateType = {
      errors: string[],
      success: string
};

export const updateUser = async (prevState: ActionStateType, formData: FormData) => {

      const profile = ProfileFormSchema.safeParse({
            name: formData.get('name'),
            email: formData.get('email')
      });

      if (!profile.success) {
            return {
                  errors: profile.error.issues.map(issue => issue.message),
                  success: ''
            };
      };

      const token = (await cookies()).get('CASHTRACKR_TOKEN')?.value;
      const url = `${process.env.Api_url}/api/auth/user`;
      const req = await fetch(url, {
            method: 'PUT',
            headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                  name: profile.data.name,
                  email: profile.data.email
            })
      });

      const json = await req.json();

      if (!req.ok) {
            const { error } = ErrorResponseSchema.parse(json);
            return {
                  errors: [error],
                  success: ''
            };
      };

      revalidatePath('/admin/profile/settings');
      const success = SuccessShema.parse(json);

      return {
            errors: [],
            success
      };
};
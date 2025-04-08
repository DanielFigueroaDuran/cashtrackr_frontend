// Data-Access-Layer
import "server-only"
import { cache } from "react";
import { redirect } from "next/navigation";
import { UserSchema } from "../shemas";
import { cookies } from "next/headers";

export const verifySession = cache(async () => {
      const token = (await cookies()).get('CASHTRACKR_TOKEN')?.value;


      if (!token) {
            redirect('/auth/login');
      };

      const url = `${process.env.API_URL}/api/auth/user`
      const req = await fetch(url, {
            headers: {
                  Authorization: `Bearer ${token}`
            }
      });

      const session = await req.json();
      const result = UserSchema.safeParse(session);
      // console.log(result);

      if (!result.success) {
            redirect('/auth/login');
      };

      return {
            user: result.data,
            isAuth: true
      };
});
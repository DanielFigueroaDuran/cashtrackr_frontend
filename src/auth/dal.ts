// Data-Access-Layer

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const verifySession = async () => {
      const token = (await cookies()).get('CASHTRACKR_TOKEN')?.value;
      //console.log('Token', token);

      if (!token) {
            redirect('/auth/login');
      };
};
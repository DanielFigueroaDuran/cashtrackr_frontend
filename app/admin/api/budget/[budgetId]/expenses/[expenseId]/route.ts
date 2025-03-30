import { verifySession } from "@/src/auth/dal";

export const GET = async () => {
      await verifySession();
      return Response.json('Hola Mundo');
};
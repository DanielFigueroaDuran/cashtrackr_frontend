import { NextRequest } from "next/server";
import { verifySession } from "@/src/auth/dal";
import { cookies } from "next/headers";


export async function GET(
      request: NextRequest,
      { params }: { params: Promise<{ budgetId: string, expenseId: string }> }) {

      await verifySession();

      const { budgetId, expenseId } = await params;

      const token = (await cookies()).get('CASHTRACKR_TOKEN')?.value;
      const url = `${process.env.API_URL}/api/budgets/${budgetId}/expenses/${expenseId}`;
      //console.log(url);
      const req = await fetch(url, {
            headers: {
                  'Authorization': `Bearer ${token}`
            }
      });

      const json = await req.json();

      if (!req.ok) {
            return Response.json(json.error, { status: 403 });
      };

      return Response.json(json);
      //return Response.json('Hola mundo');

      // /api/budgets/10/expenses/20
};
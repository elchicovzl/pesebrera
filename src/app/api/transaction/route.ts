import { NextResponse } from 'next/server';
import { getServerSession } from "next-auth";
import { CustomSession, authOptions } from "../auth/[...nextauth]/options";


export async function POST(
    req: Request,
  ) {
    const session: CustomSession | null = await getServerSession(authOptions);

    try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL;
        const store = process.env.NEXT_PUBLIC_LANDING_STORE;

        if (!session) {
            return NextResponse.json({ status: 401, message: "UnAuthorized" });
        }

        const userId = session.user?.id;
        const body = await req.json();

        const { transactionId, qtyTickets, price, gatewayId, giveawayId } = body;
        
        
        const fullname = session.user?.name;
        const emailObj = session.user?.email;

        console.log("fullname:", session.user?.name);
        console.log("email:", emailObj);
        
        if (!userId) {
            return new NextResponse("Unauthorized", { status: 403 });
        }
        
        if (!giveawayId) {
          return new NextResponse("Sorteo es requerido", { status: 400 });
        }
  
        if (!transactionId) {
            return new NextResponse("Transaccion es requerida", { status: 400 });
        }

        const res = await fetch(`${apiUrl}/api/${store}/giveways/${giveawayId}/transactions`, {
        method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            transactionId,
            qtyTickets,
            total:price,
            user:userId,
            email:emailObj,
            fullname,
            gatewayId
          }),
        })
       
        const data = await res.json()
    
        return NextResponse.json(data);
    } catch (error) {
        console.log(error);
        return new NextResponse("Internal error", { status: 500 });
    }
};
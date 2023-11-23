import { NextResponse } from 'next/server';

export async function POST(
    req: Request,
  ) {
    try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL;
        const store = process.env.NEXT_PUBLIC_LANDING_STORE;

        const body = await req.json();

        const { event, data, signature, environment } = body;
        
        if (event != "transaction.updated") {
            return NextResponse.json({ success: true });
        }

        const referenceArr = data.transaction.reference.split('!');
        const giveawayId = referenceArr[1];

        const res = await fetch(`${apiUrl}/api/${store}/giveways/${giveawayId}/transactions/${data.transaction.reference}/checkout`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                status:data.transaction.status,
                gatewayId: data.transaction.id,
                fullname: data.transaction.customer_data?.full_name,
                email: data.transaction.customer_email
            }),
        });

        return NextResponse.json({ success: true })
    } catch (error) {
        console.log(error);
        return new NextResponse("Internal error", { status: 500 });
    }
};
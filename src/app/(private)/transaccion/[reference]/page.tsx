import { getGivewayFeatured } from '@/actions/get-giveways';
import getTransaction from '@/actions/get-transaction';
import Checkout from './components/checkout';
import { getServerSession } from "next-auth";
import { authOptions, CustomSession } from "@/app/api/auth/[...nextauth]/options";
import { useSearchParams } from 'next/navigation';

const CheckoutPage = async ({
    params
}:{
    params: { reference: string }
}) => {
    const session: CustomSession | null = await getServerSession(authOptions);
    const user = session?.user;
    const userId = session?.user?.id?.toString();

    if (!userId) {
        return null;
    }

    if (!params?.reference) {
        return null;
    }

    const referenceArr = params.reference.split('!');
    const reference = params.reference;
    const giveawqyId = referenceArr[1];

    const transaction = await getTransaction(giveawqyId, reference);

    if (!transaction) {
        return (
          <div className="h-screen">
            <h2 className="text-white text-xl mt-20 text-center">No se encontro transaccion.</h2>
          </div>
        )
    }
    
    const giveway = await getGivewayFeatured();
    console.log("Transaccion:", transaction)

    return (
        <Checkout transaction={transaction} giveway={giveway} user={user} />
    );
}
 
export default CheckoutPage;
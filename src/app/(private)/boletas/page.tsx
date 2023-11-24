import TicketSold from "@/components/ticket-sold";
import { getServerSession } from "next-auth";
import { authOptions, CustomSession } from "../../api/auth/[...nextauth]/options";
import { getGivewayFeatured } from "@/actions/get-giveways";
import {getTicketsByUser} from "@/actions/get-tickets";
import { Ticket } from "@/types";

const BoletasPage = async () => {
    const session: CustomSession | null = await getServerSession(authOptions);
    const userId = session?.user?.id?.toString();

    if (!userId) {
        return null;
    }

    //const giveway = await getGivewayFeatured();
    const giveway = null;

    if (!giveway) {
        return (
            <div className="h-screen">
              <h2 className="text-[#cbd272] text-4xl font-bold mt-20 text-center px-3">No hay sorteo participando en este momento.</h2>
            </div>
        )
    }

    const tickets = await getTicketsByUser(giveway.id, userId);

    if (tickets && tickets.length == 0) {
        return (
          <div className="h-screen">
            <h2 className="text-[#cbd272] text-4xl font-bold mt-20 text-center px-3">No hay boletas participando en este momento.</h2>
          </div>
        )
    }

    return (
        <div className="">
            <h2 className="text-[#cbd272] text-4xl font-bold mt-20 text-center px-3">Boletass activas en las que se encuentra participando.</h2>
            <div className="grid grid-cols-1 gap-2 mt-10">
                {tickets.map((ticket:Ticket) => 
                    (
                        <TicketSold key={ticket.id} data={ticket} giveway={giveway} />
                    )) 
                }
            </div>
        </div>
     );
}
 
export default BoletasPage;
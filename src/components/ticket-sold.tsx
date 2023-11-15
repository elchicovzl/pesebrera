"use client";

import { Ticket, GiveWay } from "@/types";
import { format } from "date-fns";
import { es } from 'date-fns/locale'
interface TicketProps {
    data: Ticket;
    giveway: GiveWay;
  }

const TicketSold : React.FC<TicketProps> = ({
    data,
    giveway
  }) => {
    return ( 
        <section className="w-full flex-grow flex items-center justify-center p-4">
            <div className="flex w-full sm:max-w-2xl  text-zinc-900 h-44 sm:h-52">
                <div className="h-full bg-white flex flex-col items-center justify-center px-8 rounded-l-3xl">
                    <span className="text-sm sm:text-sm">Número</span>
                    <span className="text-xl sm:text-3xl font-bold">{data.ticketNumber}</span>
                </div>
                <div className="relative h-full flex flex-col items-center border-dashed justify-between border-2 bg-white border-zinc-900">
                    <div className="absolute rounded-full w-8 h-8 bg-zinc-900 -top-5"></div>
                    <div className="absolute rounded-full w-8 h-8 bg-zinc-900 -bottom-5"></div>
                </div>
                <div className="h-full py-8 px-10 bg-white flex-grow rounded-r-3xl flex flex-col">
                    <div className="flex w-full justify-between items-center">
                        <div className="flex flex-col items-center">
                            <span className="text-zinc-500 text-xs sm:text-lg">Participas por</span>
                            <span className="text-sm sm:text-3xl font-bold text-center">{giveway.name}</span>
                        </div>
                    </div>
                    <div className="flex w-full mt-auto justify-between">
                        <div className="flex flex-col">
                            <span className="text-xs sm:text-lg text-zinc-400">fecha del sorteo:</span>
                            <span className="font-mono text-xs sm:text-xl">{ format(Date.parse(giveway.giveawayDate), "MMMM dd, yyyy", {locale:es})}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
         
    );
}
 
export default TicketSold;
import { Ticket } from "@/types";

const URL=`${process.env.NEXT_PUBLIC_API_URL}/api`;
const store = process.env.NEXT_PUBLIC_LANDING_STORE;
export const fetchCache = 'force-no-store'

const getTicketsByUser = async (idGiveway: string, userId: string): Promise<Ticket> => {

  const route = `${URL}/${store}/giveways/${idGiveway}/tickets/${userId}`;
  
  const res = await fetch(route);
  
  return res.json();
};

const getTickets = async (idGiveway: string): Promise<Ticket[]> => {

  const route = `${URL}/${store}/giveways/${idGiveway}/tickets`;
  
  const res = await fetch(route, { next: { revalidate:0 } });
  
  return res.json();
};

export  {getTicketsByUser, getTickets};
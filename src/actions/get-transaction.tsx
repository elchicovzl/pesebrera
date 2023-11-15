import { Transaction } from "@/types";

const URL=`${process.env.NEXT_PUBLIC_API_URL}/api`;
const store = process.env.NEXT_PUBLIC_LANDING_STORE;

const getTransaction = async (idGiveway: string, reference: string): Promise<Transaction> => {

  const route = `${URL}/${store}/giveways/${idGiveway}/transactions/${reference}`;
  
  const res = await fetch(route);

  return res.json();
};

export default getTransaction;
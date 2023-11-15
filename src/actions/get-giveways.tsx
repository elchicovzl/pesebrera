import { GiveWay } from "@/types";

const URL=`${process.env.NEXT_PUBLIC_API_URL}/api`;
const store = process.env.NEXT_PUBLIC_LANDING_STORE;

const getGivewayFeatured = async (): Promise<GiveWay> => {

  const route = `${URL}/${store}/giveways/featured`;
  
  const res = await fetch(route);
  
  return res.json();
};

const getGiveawayById = async (id: string): Promise<GiveWay> => {
  const route = `${URL}/${store}/giveways/${id}`;

  const res = await fetch(route);

  return res.json();
}

export { getGivewayFeatured };
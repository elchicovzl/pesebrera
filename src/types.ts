type RegisterAPIType = {
  name?: string;
  email?: string;
  password?: string;
  password_confirmation?: string;
};

type AuthValidationType = {
  name?: string;
  email?: string;
  password?: string;
};

type UIValidationType = {
  title?: string;
  description?: string;
  image?: string;
};

interface UiApiType {
  id: number;
  user_id: number;
  title: string;
  description: string;
  image: string;
  created_at: string;
  user: {
    name: string;
  };
}

export interface Ticket {
  id: string;
  name: string;
  ticketNumber: string;
};

export interface GiveWay {
  id: string;
  name: string;
  description: string;
  imageSrc: string;
  price:string;
  giveawayDate:string;
  tickets: Ticket[]
};

export interface Transaction {
  id: string;
  code: string;
  gatewayId?: string;
  fullname?: string;
  email?: string;
  isPaid: boolean;
  total: string;
  tickets?: Ticket[]
}



import { StaticImageData } from "next/image";

export type SuccessProps = {
  title: string;
  text: string;
  route: string;
  button: string;
};

export type SignupData = {
  name: string;
  email: string;
  password: string;
};

export type LoginData = {
  email: string;
  password: string;
};

export type User = {
  avatar: string;
  email: string;
  id: string;
  token: string;
  username: string;
};

export type EventCardProps = {
  img: StaticImageData | string;
  title: string;
  location: string;
  time: string;
  month: string;
  day: string;
  isLive: boolean;
  cost: number;
};
export type FormState = {
  name: string;
  event_image?: string | undefined;
  description: string;
  startDate: string;
  startTime: string;
  endDate: string;
  endTime: string;
  location: string;
  isPaidEvent: string;
  ticketPrice: string;
  numberOfAvailableTickets: string;
  registrationClosingDate: string;
  tags: Array<string>;
}
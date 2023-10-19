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
  startTime: string;
  month: string;
  cost: number;
  endTime: string;
  id: string;
};

export interface initialValues {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  gender: string;
  howDidYouHear: string;
  paymentMethod: string;
}

export interface EventProps {
  id: string;
  name: string;
  description: string;
  image: string;
  startTime: string;
  endTime: string;
  startDate: string;
  endDate: string;
  tags: string[];
  ticketPrice: number;
  isPaidEvent: boolean;
  eventType: string;
  location: string;
  eventLink: string | null;
  registrationClosingDate: string;
  numberOfAvailableTickets: number;
  organizerId: string;
}

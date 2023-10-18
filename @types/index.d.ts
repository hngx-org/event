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

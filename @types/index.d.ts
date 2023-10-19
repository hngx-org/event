import { StaticImageData } from "next/image";

export type SuccessProps = {
  title: string;
  text: string;
  route: string;
  button: string;
};

export type EventManagementModalType = {
  title: string;
  text: string;
  route: string;
  button: string;
  message: string;
  onclose: () => void;
  onNext: () => void;
};

export type SimilarEventsType = {
  imgSrc: StaticImageData | string,
  name: string,
  location: string,
  time: string,
  date: string,
  live: string,
  amount: string
}

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
  dateString: string;
  cost: number;
};

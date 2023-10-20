import { StaticImageData } from "next/image";
import { ReactNode } from "react";

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

export type SearchFilterProps = {
	setIsFilterOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export type EventsPageTitleProps = {
	children: ReactNode;
	setIsFilterOpen: React.Dispatch<React.SetStateAction<boolean>>;
	isFilterOpen: boolean;
};

export type EventCardProps = {
	img: StaticImageData | string;
	title: string;
	location: string;
	dateString: string;
	cost: number;
};

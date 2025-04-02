import { StaticImageData } from "next/image";

export type SignUpAsCardProps = {
  title: string;
  description: string;
  link: string;
  img: StaticImageData;
  delay?: number;
};

// User Register body type
export interface IRegisterUserBodyType {
  lga: string;
  zone: string;
  email: string;
  state: string;
  address: string;
  fullName: string;
  password: string;
  userType: string;
  phoneNumber: string;
  referalCode: string;
  nearestBusStop: string;
  confirmPassword: string;
}

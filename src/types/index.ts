import { StaticImageData } from "next/image";

export type SignUpAsCardProps = {
  title: string;
  description: string;
  link: string;
  img: StaticImageData;
  delay?: number;
};

import { IconType } from "react-icons";

export type THowItWorkCard = {
  Icon: IconType;
  title: string;
  description: string;
};

const HowItWorkCard = ({ description, Icon, title }: THowItWorkCard) => {
  return (
    <div className="rounded-2xl pt-10 px-7 pb-16 w-full bg-[#DCFCE7] font-satoshi">
      <Icon size={34} className="float text-black" />

      <h2 className="font-medium text-lg md:text-xl text-[#222] mt-5">
        {title}
      </h2>

      <p className="text-sm text-gray-600 mt-3">{description}</p>
    </div>
  );
};

export default HowItWorkCard;

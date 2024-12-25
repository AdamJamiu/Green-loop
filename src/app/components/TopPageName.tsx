type ITopPageProps = {
  title: string;
};

const TopPageName = ({ title }: ITopPageProps) => {
  return (
    <div className="absolute top-0 right-0 left-0 z-10 bg-[#1A1F1A] flex justify-center items-end h-[35vh] font-satoshi pb-10">
      <h1 className="w-full text-center text-white text-4xl">{title}</h1>
    </div>
  );
};

export default TopPageName;

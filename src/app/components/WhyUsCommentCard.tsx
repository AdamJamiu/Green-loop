import QuoteSvg from "./QuoteSvg";

const WhyUsCommentCard = ({ comment }: any) => {
  return (
    <div className="rounded-md bg-white shadow-md px-4 m:px-6 py-4 pb-16 font-satoshi relative">
      <div className="flex flex-col justify-center items-center">
        <div className="rounded-full py-2 px-3 flex justify-center items-center bg-black text-white text-base md:text-lg lg:text-lg">
          {comment?.name?.split("")[0].toUpperCase()}
          {comment?.name?.split("")[1].toUpperCase()}
        </div>
        <p className="text-lg md:text-xl mt-2 font-semibold">{comment?.name}</p>

        <p className="mt-7 text-[#6b7280]">{comment?.comment}</p>

        <QuoteSvg className="absolute text-black opacity-10 text-3xl md:text-4xl top-[35%] left-3" />
        <QuoteSvg className="absolute text-black opacity-10 rotate-180 text-4xl md:text-5xl bottom-4 right-3" />
      </div>
    </div>
  );
};

export default WhyUsCommentCard;

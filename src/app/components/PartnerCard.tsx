type TPartnerCard = {
  image: string;
  title: string;
  description: string;
  link?: string;
};

const PartnerCard = ({ description, image, title, link }: TPartnerCard) => {
  return (
    <div className="relative font-satoshi group ">
      <div className="rounded-3xl overflow-hidden">
        <div
          className="min-h-[360px] bg-center md:min-h-[420px] relative layer-bg bg-cover rounded-lg group"
          style={{
            backgroundImage: `url(${image})`,
          }}
        >
          <div className=" sm:p-10 py-12 px-5 absolute inset-0 bg-black/50 z-[1] text-white flex flex-col">
            <h2 className="text-white text-2xl md:text-3xl font-medium z-[90] group">
              {title}
            </h2>

            <p className="text-gray-50 z-[90] mt-10 font-satoshi_Variable group-hover:translate-y-0 md:translate-y-20 ease-linear transition-all duration-200 md:invisible md:opacity-0 group-hover:visible group-hover:opacity-100">
              {description}
            </p>

            <button className="delay-75 w-max z-[90] mt-8 border border-gray-100 py-2 rounded-full px-5 text-gray-50 ease transition-all duration-200 hover:bg-gray-50 hover:text-gray-800 group-hover:translate-y-0 md:translate-y-20 ease-linear md:invisible md:opacity-0 group-hover:visible group-hover:opacity-100">
              Read more
            </button>
          </div>

          {/* <div className="absolute inset-0 bg-black opacity-50 rounded-3xl z-10"></div> */}
        </div>
      </div>
    </div>
  );
};

export default PartnerCard;

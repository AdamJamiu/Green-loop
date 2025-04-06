import { GoArrowDownLeft, GoArrowUpRight } from "react-icons/go";

const WalletBalanceCard = () => {
  return (
    <div className="p-4 md:p-5 w-full bg-white rounded-lg gilroy h-full">
      <h2 className="font-semibold text-neutral-900 text-lg lg:text-xl">
        Wallet balance
      </h2>

      <p className="font-black text-neutral-900 text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-5">
        ₦20,000
      </p>

      <div className="flex justify-start items-center gap-4 mb-10 mt-14 w-full">
        <button
          //   onClick={onOpenModal}
          className="text-sm md:text-base flex justify-start items-center gap-2 border border-primary text-primary h-10 px-6 rounded-lg ease transition-all duration-200 hover:opacity-55"
        >
          <GoArrowDownLeft />
          <p>Withdraw</p>
        </button>
        <button
          //   onClick={onOpenModal}
          className="text-sm md:text-base flex justify-start items-center gap-2 border border-primary text-primary h-10 px-6 rounded-lg ease transition-all duration-200 hover:opacity-55"
        >
          <GoArrowUpRight />
          <p>Bills and airtime</p>
        </button>
      </div>
    </div>
  );
};

export default WalletBalanceCard;

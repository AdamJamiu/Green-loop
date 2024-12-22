import { BsArrowRight } from "react-icons/bs";

const Newsletter = () => {
  return (
    <form className="mt-16 flex flex-row justify-start gap-4 md:items-center flex-wrap">
      <input
        className="rounded-full w-full sm:w-56 py-3 pl-6 border-none outline-none bg-success_opacity text-gray-800 placeholder:text-gray-700 focus:outline-[#cce6cc] active:outline-[#cce6cc] outline-2 outline-transparent ease transition-all"
        placeholder="Full name"
      />
      <input
        type="email"
        className="gap-2 rounded-full w-full sm:w-64 py-3 pl-6 border-none outline-none bg-success_opacity text-gray-800 placeholder:text-gray-700 focus:outline-[#cce6cc] active:outline-[#cce6cc] outline-2 outline-transparent ease transition-all"
        placeholder="Email address"
      />
      <button
        type="submit"
        aria-label="Subscribe"
        className="flex gap-2 w-max items-center rounded-full bg-white text-gray-800 py-3 px-6 hover:opacity-75 ease transition-all"
      >
        <span>Subscribe</span>
        <BsArrowRight />
      </button>
    </form>
  );
};

export default Newsletter;

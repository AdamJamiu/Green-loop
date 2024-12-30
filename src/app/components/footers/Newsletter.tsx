import { BsArrowRight } from "react-icons/bs";

const Newsletter = () => {
  return (
    <form className="mt-16 flex flex-col sm:flex-row justify-start gap-4 md:items-center flex-wrap w-full sm:w-max">
      <input
        className="rounded-full w-full sm:w-56 py-3 pl-6 border-none outline-none bg-white text-gray-800 placeholder:text-gray-500 focus:outline-[#cce6cc] active:outline-[#cce6cc] outline-2 outline-transparent ease transition-all"
        placeholder="Full name"
      />
      <input
        type="email"
        className="gap-2 rounded-full w-full sm:w-64 py-3 pl-6 border-none outline-none bg-white text-gray-800 placeholder:text-gray-500 focus:outline-[#cce6cc] active:outline-[#cce6cc] outline-2 outline-transparent ease transition-all"
        placeholder="Email address"
      />
      <button
        type="submit"
        aria-label="Subscribe"
        className="flex gap-2 w-full text-center sm:w-max justify-center group items-center rounded-full bg-white text-gray-800 py-3 px-6 hover:opacity-75 ease transition-all"
      >
        <span>Subscribe</span>
        <BsArrowRight className="ease transition-all duration-200 group-hover:translate-x-2" />
      </button>
    </form>
  );
};

export default Newsletter;

import { FaWhatsapp } from "react-icons/fa";

const WhatsappStickyButton = () => {
  return (
    <button className="fixed bottom-5 right-5 rounded-full px-5 py-2 bg-[#25D366] text-white font-satoshi flex justify-center items-center gap-2 z-[100]">
      <FaWhatsapp size={24} />
      <p className="text-base md:text-lg">How can I help you?</p>
    </button>
  );
};

export default WhatsappStickyButton;

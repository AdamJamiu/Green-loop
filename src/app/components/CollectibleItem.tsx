import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

interface CollectibleItem {
  name: string;
  img: string | StaticImport;
}

const CollectibleItem = ({ name, img }: CollectibleItem) => {
  return (
    <div className="w-full flex justify-center items-center gap-5 px-7 py-2.5 bg-[#EDF1FA]">
      <p className="text-gray-700">{name}</p>
      <div className="p-2 rounded-full bg-white">
        <Image src={img} alt={name} width={40} height={40} />
      </div>
    </div>
  );
};

export default CollectibleItem;

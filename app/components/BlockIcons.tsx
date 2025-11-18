import Image from "next/image";

import icon1 from "@/public/icon1.svg";
import icon2 from "@/public/icon2.svg";
import icon3 from "@/public/icon3.png";
import icon4 from "@/public/icon4.svg";
import icon5 from "@/public/icon5.svg";
import icon6 from "@/public/icon6.svg";

const iconsInfo = [
  {
    imageUrl: icon1,
    text: "Makeup-artist",
  },
  {
    imageUrl: icon2,
    text: "Wellnesscenter",
  },
  {
    imageUrl: icon3,
    text: "Barbersalon",
  },
  {
    imageUrl: icon4,
    text: "Frisørsalon",
  },
  {
    imageUrl: icon5,
    text: "Massageklinik",
  },
  {
    imageUrl: icon6,
    text: "Fodterapeut",
  },
];
function BlockIcons() {
  return (
    <ul className="flex justify-between items-center">
      {iconsInfo.map((icon) => {
        return (
          <li key={icon.text} className="relative flex items-center flex-col">
            <span className="bg-[#f7e5c17c] w-24 h-24 rounded-full absolute -top-3 -left-3"></span>
            <Image src={icon.imageUrl} alt="icon" className=" mb-3" />
            <span className="font-bold text-lg">{icon.text}</span>
          </li>
        );
      })}
    </ul>
  );
}

export default BlockIcons;

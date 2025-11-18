import Image, { StaticImageData } from "next/image";
import map from "../../public/map.svg";
import star from "../../public/start.png";
import Link from "next/link";
type CardProps = {
  imageUrl: StaticImageData;
  rating: number;
  reviews: number;
  name: string;
  address: string;
  slug: string;
};
function Card({ card }: { card: CardProps }) {
  return (
    <div className="border border-[#0000001e] rounded-4xl max-w-80 min-h-[490px] flex flex-col justify-between">
      <Image
        src={card.imageUrl}
        alt={card.name}
        className=" rounded-tl-4xl rounded-tr-4xl"
        width="384"
        height="275"
      />
      <div className="p-6 flex flex-col justify-between flex-1">
        <div className="flex  justify-between  items-center font-bold">
          <div className="flex items-center">
            <Image
              className="w-5 h-5 mr-2"
              src={star}
              alt="s"
              width={20}
              height={20}
            />
            {card.rating}
          </div>
          <div>{card.reviews} reviews</div>
        </div>
        <div className="mt-3 font-bold text-xl">{card.name}</div>
        <div className="mt-3 text-sm flex items-center">
          <span className="mr-3">
            <Image src={map} alt="map" />
          </span>{" "}
          {card.address}
        </div>
        <Link
          href={`/salons/${card.slug}`}
          className="text-center w-full mt-5 p-4  bg-[#BA7894] text-white hover:bg-white hover:text-[#BA7894] rounded-4xl cursor-pointer border transition-all border-transparent  hover:border-[#0000001e]"
        >
          BOOK NOW
        </Link>
      </div>
    </div>
  );
}

export default Card;

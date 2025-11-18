import { notFound } from "next/navigation";
import { Playfair_Display } from "next/font/google";
import { cardsData } from "../../lib/salonsData";
import SalonPageClient from "./SalonPageClient";

const playfairDisplay = Playfair_Display({ subsets: ["latin"] });

type PageProps = {
  params: Promise<{ slug: string }>;
};
export default async function SalonPage({ params }: PageProps) {
  const { slug } = await params;
  const salon = cardsData.find((item) => item.slug === slug);
  if (!salon) {
    return notFound();
  }
  return (
    <SalonPageClient
      salon={salon}
      playfairClassName={playfairDisplay.className}
    />
  );
}

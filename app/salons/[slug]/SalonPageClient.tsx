"use client";
import { bookingSalon } from "@/app/action";
import ButtonBookNow from "@/app/components/ButtonBookNow";
import Container from "@/app/components/Container";
import Title from "@/app/components/Title";
import { cardsData } from "@/app/lib/salonsData";
import Image from "next/image";
import { useActionState, useEffect } from "react";
import toast from "react-hot-toast";

type Salon = (typeof cardsData)[number];
type Props = {
  salon: Salon;
  playfairClassName: string;
};
const initialState = { message: "" };
function SalonPageClient({ salon, playfairClassName }: Props) {
  const [state, formAction] = useActionState(bookingSalon, initialState);

  useEffect(() => {
    if (!state.message) return;

    if (state.message === "Booking created successfully") {
      toast.success(state.message);
    } else {
      toast.error(state.message);
    }
  }, [state.message]);

  return (
    <main className="pb-20">
      <section className="relative min-h-[480px] flex items-end text-white">
        <Image
          src={salon.imageUrl}
          alt={salon.name}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#422A3C]/80" />

        <Container>
          <div className="relative z-10 max-w-2xl py-16 ">
            <p className="uppercase tracking-[0.2em] text-sm text-[#F7E5C1]">
              Beauty &amp; Wellness Salon
            </p>
            <h1
              className={`${playfairClassName} text-5xl md:text-6xl font-bold mt-4`}
            >
              {salon.name}
            </h1>
            <p className="mt-4 text-lg text-[#F7E5C1]">{salon.address}</p>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-yellow-300 text-xl">★</span>
                <span className="font-semibold">{salon.rating}</span>
                <span className="text-gray-200">({salon.reviews} reviews)</span>
              </div>
              <span className="h-4 w-px bg-white/40" />
              <span className="text-gray-200">Open daily · By appointment</span>
            </div>
          </div>
        </Container>
      </section>

      <section className="mt-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[2fr,1fr] items-start">
            <div>
              <Title>About {salon.name}</Title>

              <p className="mt-6 text-gray-600 leading-relaxed">
                {salon.name} is a curated beauty space in New York focused on
                hair, skin and wellness rituals. Our stylists and therapists
                work with high–end products and tailor every visit to your
                needs. Book a treatment to refresh your look, prepare for a
                special event or simply reset after a long week.
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                The salon is located at {salon.address}. Use the booking form to
                choose a date and time that works for you, and our team will
                confirm your appointment by email or phone.
              </p>

              <div className="mt-40 grid gap-6 md:grid-cols-3">
                <div className="rounded-3xl bg-[#FBF2E0] p-6">
                  <h3 className="font-semibold text-lg text-[#422A3C]">
                    Services
                  </h3>
                  <p className="mt-3 text-sm text-gray-600">
                    Hair styling, coloring, treatments, make–up and express
                    beauty rituals.
                  </p>
                </div>
                <div className="rounded-3xl bg-[#F2E8F4] p-6">
                  <h3 className="font-semibold text-lg text-[#422A3C]">
                    Atmosphere
                  </h3>
                  <p className="mt-3 text-sm text-gray-600">
                    Soft lighting, calm music and a private treatment area so
                    you can fully relax.
                  </p>
                </div>
                <div className="rounded-3xl bg-[#EBF3F5] p-6">
                  <h3 className="font-semibold text-lg text-[#422A3C]">
                    Extras
                  </h3>
                  <p className="mt-3 text-sm text-gray-600">
                    Complimentary drinks, Wi-Fi and after–care recommendations
                    for every visit.
                  </p>
                </div>
              </div>
            </div>

            <aside className="rounded-3xl bg-[#FBF2E0] p-8 mt-10">
              <h2
                className={`${playfairClassName} text-2xl font-bold text-[#422A3C]`}
              >
                Book an appointment
              </h2>
              <p className="mt-3 text-sm text-gray-600">
                Choose a date and time and we&apos;ll get back to you with a
                confirmation.
              </p>

              <form action={formAction} className="mt-6 flex flex-col gap-4">
                <input
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  className="border border-[#ECBFD3] rounded-2xl px-4 py-3 text-sm text-black"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="border border-[#ECBFD3] rounded-2xl px-4 py-3 text-sm text-black"
                />
                <input
                  type="phone"
                  name="phone"
                  placeholder="Phone"
                  className="border border-[#ECBFD3] rounded-2xl px-4 py-3 text-sm text-black"
                />
                <input
                  name="date"
                  type="date"
                  className="border border-[#ECBFD3] rounded-2xl px-4 py-3 text-sm text-black"
                />
                <textarea
                  name="message"
                  placeholder="Notes for stylist"
                  className="border border-[#ECBFD3] rounded-2xl px-4 py-3 text-sm text-black  resize-none"
                />
                <input
                  type="text"
                  name="address"
                  hidden
                  defaultValue={salon.address}
                />
                <ButtonBookNow />
              </form>

              <div className="mt-6 text-xs text-gray-500">
                By submitting this form you agree to be contacted regarding your
                appointment.
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </main>
  );
}

export default SalonPageClient;

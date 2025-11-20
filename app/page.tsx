"use client";
import { useActionState, useEffect } from "react";
import bg from "../public/mainImage.jpg";
import Container from "./components/Container";
import Title from "./components/Title";

import Image from "next/image";
import iconTitle from "../public/icon-title.png";

import img1 from "@/public/pic1.jpg";
import img2 from "@/public/pic2.jpg";
import img3 from "@/public/pic3.jpg";
import img4 from "@/public/pic4.jpg";
import img5 from "@/public/pic5.jpg";

import subscribe from "@/public/subscribe.jpg";

import Card from "./components/Card";
import SliderReview from "./components/SliderReview";
import { cardsData } from "./lib/salonsData";
import BlockIcons from "./components/BlockIcons";

import { Playfair_Display } from "next/font/google";
import ButtonBookNow from "./components/ButtonBookNow";
import { bookingSalon } from "./action";
import toast from "react-hot-toast";
const playfairDisplay = Playfair_Display({ subsets: ["latin"] });

const initialState = { message: "" };

export default function Home() {
  const now = new Date();
  const minDate = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;
  const maxDate = `${now.getFullYear()}-${now.getMonth() + 1}-${
    now.getDate() + 7
  }`;

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
    <>
      <main>
        <div
          className="min-h-[832px] bg-no-repeat bg-center bg-cover flex items-center text-white"
          style={{ backgroundImage: `url(${bg.src})` }}
        >
          <Container>
            <div className="max-w-[500px] w-full mb-8 lg:mb-0">
              <div className="mb-3">
                <Image src={iconTitle} alt="H" className="inline mr-2" />
                <span>Hair Salon, Masseuse, Beauty Salon</span>
              </div>

              <h1
                className={`${playfairDisplay.className} text-[#F7E5C1] text-4xl sm:text-5xl lg:text-7xl mb-3`}
              >
                Find a service close to you
              </h1>
              <p className="mb-10 text-sm sm:text-base">
                There are many variation of passages are Ipsum available,
                majority have suffered alteration in some form.
              </p>
            </div>
            <div className="bg-white p-4 sm:p-6 rounded-4xl max-w-7xl w-full">
              <form
                action={formAction}
                className="flex flex-col gap-4 xl:flex-row md:items-center md:justify-between"
              >
                <input
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  className="text-black border-b p-2 w-full xl:w-auto md:ml-5"
                  required
                />
                <input
                  type="phone"
                  name="phone"
                  placeholder="Phone"
                  className="text-black border-b p-2 w-full xl:w-auto md:ml-5"
                  required
                />
                <select
                  className="text-black border-b p-2 w-full xl:w-auto"
                  name="address"
                >
                  {cardsData.map((option) => (
                    <option key={option.address} value={option.address}>
                      {option.address}
                    </option>
                  ))}
                </select>
                <input
                  min={minDate}
                  max={maxDate}
                  type="date"
                  name="date"
                  className="text-black border-b p-2 w-full xl:w-auto"
                  required
                />
                <div className="w-full md:w-auto flex justify-center md:justify-end">
                  <ButtonBookNow />
                </div>
              </form>
            </div>
          </Container>
        </div>
        <Container>
          <div className="mt-12 sm:mt-20">
            <BlockIcons />
          </div>
        </Container>
      </main>
      <section className="bg-[#ebf3f570] py-12 sm:py-16 mt-20">
        <Container>
          <Title>We are Experienced in making you very Beautiful</Title>

          <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid-rows-2 min-h-[510px] mt-10 sm:mt-20">
            <div className="row-span-2 h-full">
              <Image
                src={img1}
                alt="img"
                className="h-full w-full object-cover rounded-2xl"
              />
            </div>
            <div>
              <Image
                src={img2}
                alt="img"
                className="h-full w-full object-cover rounded-2xl"
              />
            </div>
            <div>
              <Image
                src={img3}
                alt="img"
                className="h-full w-full object-cover rounded-2xl"
              />
            </div>
            <div>
              <Image
                src={img4}
                alt="img"
                className="h-full w-full object-cover rounded-2xl"
              />
            </div>
            <div>
              <Image
                src={img5}
                alt="img"
                className="h-full w-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </Container>
      </section>
      <section className="mt-20 sm:mt-30">
        <Container>
          <div className="text-center text-[#BA7894]">Our Services</div>
          <Title>Recommended</Title>
          <div className="mt-10 sm:mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 justify-center">
            {cardsData.map((card) => {
              return <Card key={card.address} card={card} />;
            })}
          </div>
        </Container>
      </section>
      <section className="mt-16 sm:mt-20 bg-gray-100 py-16 sm:py-20">
        <Container>
          <div className="text-center text-[#BA7894] ">Testimonials</div>
          <Title>What our Customers says...</Title>
          <div className="rounded-4xl bg-[#422A3C] min-h-[400px] sm:min-h-[688px] flex mt-8 sm:mt-10 py-12 sm:py-28 px-4">
            <SliderReview />
          </div>
        </Container>
      </section>
      <section>
        <div className="max-w-7xl my-16 sm:my-20 mx-auto flex flex-col gap-10 lg:flex-row lg:justify-around lg:items-center px-4 sm:px-0">
          <div className="w-full lg:w-auto flex justify-center">
            <Image
              src={subscribe}
              alt="subscribe"
              width={600}
              className="w-full max-w-[600px] object-cover rounded-2xl"
            />
          </div>
          <div className="w-full max-w-[550px]">
            <div
              className={`text-3xl sm:text-4xl lg:text-5xl font-bold ${playfairDisplay.className}`}
            >
              Subscribe to newsletter
            </div>
            <p className="mt-4 text-sm sm:text-base">
              Sign up for our newsletter to stay up-to-date on the latest
              promotions, discounts, and new features releases.
            </p>
            <form action="" className="relative mt-5 flex flex-col gap-3">
              <input
                type="email"
                placeholder="Enter your mail"
                className="border-[#ECBFD3] border rounded-4xl w-full p-4"
              />
              <button
                type="submit"
                className="bg-black py-3 px-8 border-none rounded-4xl cursor-pointer text-white w-full sm:w-auto sm:absolute sm:right-2 sm:top-1"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

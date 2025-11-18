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
    if (state.message === "Booking created successfully") {
      toast.success(state.message);
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
            <div className="max-w-[500px] w-full">
              <div className="mb-3">
                <Image src={iconTitle} alt="H" className="inline mr-2" />
                <span>Hair Salon, Masseuse, Beauty Salon</span>
              </div>

              <h1
                className={`${playfairDisplay.className} text-[#F7E5C1] text-7xl mb-3`}
              >
                Find a service close to you
              </h1>
              <p className="mb-10">
                There are many variation of passages are Ipsum available,
                majority have suffered alteration in some form.
              </p>
            </div>
            <div className="bg-white p-3  rounded-4xl max-w-6xl ">
              <form
                action={formAction}
                className="flex justify-between items-center"
              >
                <input
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  className="text-black border-b ml-5 p-2"
                  required
                />
                <input
                  type="phone"
                  name="phone"
                  placeholder="Phone"
                  className="text-black border-b ml-5 p-2"
                  required
                />
                <select className="text-black border-b p-2" name="address">
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
                  className="text-black border-b p-2"
                  required
                />
                <ButtonBookNow />
              </form>
            </div>
          </Container>
        </div>
        <Container>
          <div className="mt-20">
            <BlockIcons />
          </div>
        </Container>
      </main>
      <section className="bg-[#ebf3f570] py-16 mt-30">
        <Container>
          <Title>We are Experienced in making you very Beautiful</Title>

          <div className="grid  gap-6 grid-cols-3 grid-rows-2 min-h-[510px] mt-20">
            <div className="row-span-2 h-full">
              <Image src={img1} alt="img" className="h-full" />
            </div>
            <div className="">
              <Image src={img2} alt="img" className="h-full" />
            </div>
            <div className="">
              <Image src={img3} alt="img" className="h-full" />
            </div>
            <div className="">
              <Image src={img4} alt="img" className="h-full" />
            </div>
            <div className="">
              <Image src={img5} alt="img" className="h-full" />
            </div>
          </div>
        </Container>
      </section>
      <section className="mt-30">
        <Container>
          <div className="text-center text-[#BA7894]">Our Services</div>
          <Title>Recommended</Title>
          <div className="flex justify-between items-center mt-20">
            {cardsData.map((card) => {
              return <Card key={card.address} card={card} />;
            })}
          </div>
        </Container>
      </section>
      <section className="mt-20 bg-gray-100 py-20">
        <Container>
          <div className="text-center text-[#BA7894] ">Testimonials</div>
          <Title>What our Customers says...</Title>
          <div className="rounded-4xl bg-[#422A3C] min-h-[688px] flex mt-10 py-28 ">
            <SliderReview />
          </div>
        </Container>
      </section>
      <section>
        <div className="max-w-7xl my-20 mx-auto flex justify-around items-center">
          <div className="">
            <Image
              src={subscribe}
              alt="subscribe"
              width={600}
              className="w-[600px] object-cover rounded-2xl"
            />{" "}
          </div>
          <div className="w-full max-w-[550px]">
            <div className={`text-5xl font-bold ${playfairDisplay.className}`}>
              Subscribe to newsletter
            </div>
            <p className="mt-4">
              Sign up for our newsletter to stay up-to-date on the latest
              promotions, discounts, and new features releases.
            </p>
            <form action="" className="relative mt-5">
              <input
                type="email"
                placeholder="Enter your mail"
                className="border-[#ECBFD3] border rounded-4xl w-full p-4"
              />
              <button
                type="submit"
                className="bg-black py-3 px-8 border-none rounded-4xl cursor-pointer text-white absolute right-2 top-1"
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

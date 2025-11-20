import Image from "next/image";
import { Playfair_Display } from "next/font/google";

import Container from "../components/Container";
import Title from "../components/Title";

import picLeft from "@/public/pic1.jpg";
import picRight from "@/public/pic4.jpg";
import Link from "next/link";
import SliderReview from "../components/SliderReview";

const playfairDisplay = Playfair_Display({ subsets: ["latin"] });

export default function AboutPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="bg-[#422A3C] text-white py-16 sm:py-20 lg:py-28">
        <Container>
          <div className="max-w-3xl mx-auto text-center px-4">
            <span className="text-xs sm:text-sm tracking-[0.25em] uppercase">
              Short story about us
            </span>
            <h1
              className={`${playfairDisplay.className} font-bold text-3xl sm:text-4xl lg:text-5xl mt-4`}
            >
              The big story behind, our beautyness center
            </h1>
          </div>
        </Container>
      </section>

      {/* VALUES */}
      <section className="py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="text-center mb-10 sm:mb-14">
            <span className="text-xs sm:text-sm tracking-[0.25em] uppercase text-[#BA7894]">
              Our values
            </span>
            <Title>The work values we thrive for</Title>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="flex gap-4 rounded-2xl border border-[#F0DFE9] bg-[#FFF9F5] p-5">
              <div className="mt-1 h-12 w-12 rounded-full bg-[#F7E5C1]" />
              <div>
                <h3 className="font-semibold text-lg text-[#422A3C]">
                  Beauty Experts
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  The majority have suffered alteration in some form, buying to
                  injected humour, or randomised words which desktop publishing
                  packages.
                </p>
              </div>
            </div>

            <div className="flex gap-4 rounded-2xl border border-[#F0DFE9] bg-[#FFF9F5] p-5">
              <div className="mt-1 h-12 w-12 rounded-full bg-[#F7E5C1]" />
              <div>
                <h3 className="font-semibold text-lg text-[#422A3C]">
                  Great Services
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  The majority have suffered alteration in some form, buying to
                  injected humour, or randomised words which desktop publishing
                  packages.
                </p>
              </div>
            </div>

            <div className="flex gap-4 rounded-2xl border border-[#F0DFE9] bg-[#FFF9F5] p-5">
              <div className="mt-1 h-12 w-12 rounded-full bg-[#F7E5C1]" />
              <div>
                <h3 className="font-semibold text-lg text-[#422A3C]">
                  100% Genuine
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  The majority have suffered alteration in some form, buying to
                  injected humour, or randomised words which desktop publishing
                  packages.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#FBF2E0] py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="relative">
              <div className="hidden sm:block absolute -left-6 top-8 bottom-8 w-6 bg-[#422A3C]" />
              <Image
                src={picLeft}
                alt="About us"
                className="relative z-10 w-fullw-[420px] object-cover rounded-3xl"
              />
            </div>
            <div className="bg-[#422A3C] text-white rounded-3xl p-8 sm:p-10 lg:max-w-2/3 max-w-10/12">
              <span className="text-xl tracking-[0.25em] uppercase text-[#F7E5C1]">
                About us
              </span>
              <h2
                className={`${playfairDisplay.className} mt-4 text-2xl sm:text-3xl lg:text-4xl font-bold`}
              >
                It&apos;s the bridge between service companies and consumers.
              </h2>
              <p className="mt-4  sm:text-base text-[#F7E5C1]">
                ServiceMarket.dk is a Copenhagen-based technology company known
                for our online platform. Our aim is to simplify and improve
                everyday life for citizens in Denmark by bringing all services
                together in one controlled environment.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* JOURNEY SECTION */}
      <section className="py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.3fr,1fr] items-center">
            <div>
              <span className="text-xs sm:text-sm tracking-[0.25em] uppercase text-[#BA7894]">
                What includes?
              </span>
              <h2
                className={`${playfairDisplay.className} mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold text-[#422A3C]`}
              >
                The start of the journey
              </h2>
              <p className="mt-4 text-sm sm:text-base text-gray-700 leading-relaxed">
                ServiceMarket.dk was founded in 2021 by two young entrepreneurs
                who saw a problem with the fragmented service industry in
                Denmark. There were thousands of small businesses offering
                services, but it was difficult for consumers to find them and
                know which ones to choose.
              </p>

              <div className="flex mt-10 flex-col xl:flex-row">
                <div className="mt-6 space-y-4 text-sm sm:text-base text-gray-700">
                  <div>
                    <div className="font-semibold text-[#422A3C]">
                      The Assessment Stage
                    </div>
                    <p>
                      The point of using Lorem Ipsum is that it has a
                      more-or-less normal letters.
                    </p>
                  </div>
                  <div>
                    <div className="font-semibold text-[#422A3C]">
                      The Initialisation Stage
                    </div>
                    <p>
                      The point of using Lorem Ipsum is that it has a
                      more-or-less normal letters.
                    </p>
                  </div>
                  <div>
                    <div className="font-semibold text-[#422A3C]">
                      The Treatment Stage
                    </div>
                    <p>
                      The point of using Lorem Ipsum is that it has a
                      more-or-less normal letters.
                    </p>
                  </div>
                </div>
                <div className="relative w-full max-h-max xl:max-w-[520px] mr-auto ml-0 xl:ml-auto mt-5 xl:mt-0">
                  <Image
                    src={picRight}
                    alt="Treatment"
                    className=" rounded-3xl object-cover w-full"
                    width={520}
                  />
                  <Link
                    href="https://www.youtube.com"
                    className="absolute  inset-0 m-auto h-16 w-16 rounded-full bg-white/90 flex items-center justify-center text-[#422A3C] shadow-lg"
                  >
                    ▶
                  </Link>
                </div>
              </div>
            </div>
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
    </main>
  );
}

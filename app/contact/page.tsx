import block2 from "@/public/contact-2-block.png";
import iconContzct1 from "@/public/IconContact1.png";
import iconContzct2 from "@/public/IconContact2.png";
import iconContzct3 from "@/public/IconContact3.png";

import { Playfair_Display } from "next/font/google";
import Image from "next/image";
const playfairDisplay = Playfair_Display({ subsets: ["latin"] });

function page() {
  return (
    <main>
      <section className="min-h-[300px] sm:min-h-[400px] lg:min-h-[500px] bg-[#422A3C] flex justify-center items-center text-white px-4">
        <div className="max-w-[650px] w-full text-center">
          <span className="text-xs sm:text-sm tracking-[0.2em]">
            GET IN TOUCH WITH US
          </span>
          <h1
            className={`${playfairDisplay.className} font-bold text-3xl sm:text-4xl lg:text-6xl mt-4 sm:mt-5`}
          >
            We Are Ready To Assist You In 24x7
          </h1>
        </div>
      </section>

      <section className="mt-16 sm:mt-24 lg:mt-40 mb-16 lg:mb-20 px-4">
        <div className="max-w-[1200px] w-full flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-0 mx-auto">
          <div className="w-full lg:min-w-[50%] flex justify-center">
            <Image
              src={block2}
              alt="salon"
              width={545}
              height={611}
              className="w-full max-w-[545px] h-auto object-cover rounded-2xl"
            />
          </div>
          <div className="w-full lg:ml-10">
            <span className="text-[#422A3C] font-semibold uppercase text-sm">
              Get in Touch!
            </span>
            <h2
              className={`${playfairDisplay.className} font-bold text-3xl sm:text-4xl lg:text-6xl mt-3`}
            >
              We are here to help you always...
            </h2>
            <p className="mt-6 sm:mt-10 text-sm sm:text-base text-gray-700">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, buying to
              many desktop publishing packages.
            </p>
            <ul className="mt-8 sm:mt-10 flex flex-col gap-y-4">
              <li className="flex gap-x-3 items-start">
                <Image src={iconContzct1} alt="home" width={65} height={65} />
                <div>
                  <div className="text-xl sm:text-2xl text-[#141414]">
                    Visit Us :
                  </div>
                  <div className="text-sm sm:text-base">
                    Mariendalsvej 50D 2 2000 Frederiksberg.
                  </div>
                </div>
              </li>
              <li className="flex gap-x-3 items-start">
                <Image src={iconContzct2} alt="home" width={65} height={65} />
                <div>
                  <div className="text-xl sm:text-2xl text-[#141414]">
                    Drop Us :
                  </div>
                  <div className="text-sm sm:text-base">
                    support@beautyness.com
                  </div>
                </div>
              </li>
              <li className="flex gap-x-3 items-start">
                <Image src={iconContzct3} alt="home" width={65} height={65} />
                <div>
                  <div className="text-xl sm:text-2xl text-[#141414]">
                    Call Us :
                  </div>
                  <div className="text-sm sm:text-base">
                    Call: 1-800-123-9999
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-[#FBF2E0] py-16 sm:py-20 lg:py-28 px-4">
        <div className="text-center max-w-[500px] mx-auto">
          <span className="text-[#BA7894] text-xs sm:text-sm tracking-[0.2em]">
            SCHEDULE YOUR PRESENCE
          </span>
          <h2 className="text-[#422A3C] font-bold text-3xl sm:text-4xl lg:text-6xl mt-3">
            Get in touch
          </h2>
          <p className="text-gray-500 mt-3 text-sm sm:text-base">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form.
          </p>
        </div>
        <form
          action=""
          className="mt-10 sm:mt-14 lg:mt-20  max-w-[1010px] w-full mx-auto flex flex-col gap-y-4 sm:gap-y-5 bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-8 lg:p-12 shadow-lg"
        >
          <input
            className="w-full border p-3 rounded-lg text-sm sm:text-base"
            type="text"
            placeholder="Name"
            required
          />
          <input
            className="w-full border p-3 rounded-lg text-sm sm:text-base"
            type="email"
            placeholder="Email"
          />
          <input
            className="w-full border p-3 rounded-lg text-sm sm:text-base"
            type="tel"
            placeholder="Phone"
            required
          />
          <textarea
            placeholder="Any Note For Us"
            className="w-full border p-3 rounded-lg text-sm sm:text-base  sm:min-h-[200px]"
          ></textarea>
          <button className="w-full bg-[#422A3C] p-4 sm:p-5 rounded-lg border-none cursor-pointer text-white text-sm sm:text-base font-semibold">
            Submit
          </button>
        </form>
      </section>
    </main>
  );
}

export default page;

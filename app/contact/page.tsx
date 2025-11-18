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
      <section className="min-h-[500px] bg-[#422A3C] flex justify-center items-center text-white">
        <div className="max-w-[650px] w-full text-center">
          <span>GET IN TOUCH WITH US</span>
          <h1
            className={`${playfairDisplay.className} font-bold text-6xl mt-5`}
          >
            We Are Ready To Assist You In 24x7
          </h1>
        </div>
      </section>
      <section className="mt-40 mb-20">
        <div className="max-w-[1200px] w-full flex justify-between mx-auto">
          <div className="min-w-1/2">
            <Image
              src={block2}
              alt="salon"
              width={545}
              height={611}
              className="w-[545px]"
            />
          </div>
          <div className="ml-10">
            <span className="text-[#422A3C] font-semibold uppercase">
              Get in Touch!
            </span>
            <h2
              className={`${playfairDisplay.className} font-bold text-6xl mt-2`}
            >
              We are here to help you always...
            </h2>
            <p className="mt-10">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, buying to
              many desktop publishing packages.
            </p>
            <ul className="mt-10 flex flex-col gap-y-4">
              <li className="flex gap-x-3">
                <Image src={iconContzct1} alt="home" width={65} height={65} />
                <div className="">
                  <div className="text-2xl text-[#141414] ">Visit Us :</div>
                  <div className="">
                    Mariendalsvej 50D 2 2000 Frederiksberg.
                  </div>
                </div>
              </li>
              <li className="flex gap-x-3">
                <Image src={iconContzct2} alt="home" width={65} height={65} />
                <div className="">
                  <div className="text-2xl text-[#141414] ">Drop Us :</div>
                  <div className="">support@beautyness.com</div>
                </div>
              </li>
              <li className="flex gap-x-3">
                <Image src={iconContzct3} alt="home" width={65} height={65} />
                <div className="">
                  <div className="text-2xl text-[#141414] ">Call Us :</div>
                  <div className="">Call: 1-800-123-9999</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="bg-[#FBF2E0] py-28">
        <div className="text-center max-w-[500px] mx-auto">
          <span className="text-[#BA7894]">SCHEDULE YOUR PRESENCE</span>
          <h2 className="text-[#422A3C] font-bold text-6xl mt-3">
            Get in touch
          </h2>
          <p className="text-gray-500  mt-3 ">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form.
          </p>
        </div>
        <form
          action=""
          className="p-[100px] max-w-[1010px] w-full mx-auto flex flex-col gap-y-5 bg-white mt-20"
        >
          <input
            className="w-full border p-3 rounded-lg"
            type="text"
            placeholder="Name"
            required
          />
          <input
            className="w-full border p-3 rounded-lg"
            type="Email"
            placeholder="Email"
          />
          <input
            className="w-full border p-3 rounded-lg"
            type="Phone"
            placeholder="Phone"
            required
          />
          <textarea
            placeholder="Any Note For Us"
            className="w-full border p-3 rounded-lg"
            cols={70}
            rows={8}
          ></textarea>
          <button className="w-full bg-[#422A3C]  p-5 rounded-lg border-none cursor-pointer text-white">
            Submit
          </button>
        </form>
      </section>
    </main>
  );
}

export default page;

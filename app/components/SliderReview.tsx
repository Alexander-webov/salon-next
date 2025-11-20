"use client";
import ava from "../../public/ava.jpg";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import Image from "next/image";

export default function SliderReview() {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="max-w-6xl m-auto w-full flex items-center justify-between h-full lg:flex-row flex-col mx-5">
            <div className="relative flex items-center">
              <span className="hidden lg:block w-[70px] h-[228px] bg-white rounded-4xl absolute"></span>
              <span className="hidden  lg:block w-[70px] h-[443px] bg-white rounded-4xl absolute left-24"></span>
              <Image
                src={ava}
                alt="ava"
                width={280}
                height={280}
                className="w-[280px] h-[280px] rounded-full relative ml-0 md:ml-28"
              />
            </div>
            <div className="md:ml-10 ml-0 text-white max-w-[600px] w-full">
              <div className="text-xl font-semibold">
                Leslie Alexander
                <span className="text-lg block font-light italic">
                  Moncton, Canada
                </span>
              </div>
              <div className="text-sm  mt-5">
                <h3 className="text-2xl  mb-2">
                  Neque porro quisquam est qui dolum
                </h3>
                “ It is a long established fact that a reader will be tracked
                distracted by the readable content of a page is when looking at
                its layout. The point of using Lorem of distribution it look
                like readable English “
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="max-w-6xl m-auto w-full flex items-center justify-between h-full lg:flex-row flex-col mx-5">
            <div className="relative flex items-center">
              <span className="hidden lg:block w-[70px] h-[228px] bg-white rounded-4xl absolute"></span>
              <span className="hidden  lg:block w-[70px] h-[443px] bg-white rounded-4xl absolute left-24"></span>
              <Image
                src={ava}
                alt="ava"
                width={280}
                height={280}
                className="w-[280px] h-[280px] rounded-full relative ml-0 md:ml-28"
              />
            </div>
            <div className="md:ml-10 ml-0 text-white max-w-[600px] w-full">
              <div className="text-xl font-semibold">
                Leslie Alexander
                <span className="text-lg block font-light italic">
                  Moncton, Canada
                </span>
              </div>
              <div className="text-sm  mt-5">
                <h3 className="text-2xl  mb-2">
                  Neque porro quisquam est qui dolum
                </h3>
                “ It is a long established fact that a reader will be tracked
                distracted by the readable content of a page is when looking at
                its layout. The point of using Lorem of distribution it look
                like readable English “
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="max-w-6xl m-auto w-full flex items-center justify-between h-full lg:flex-row flex-col mx-5">
            <div className="relative flex items-center">
              <span className="hidden lg:block w-[70px] h-[228px] bg-white rounded-4xl absolute"></span>
              <span className="hidden  lg:block w-[70px] h-[443px] bg-white rounded-4xl absolute left-24"></span>
              <Image
                src={ava}
                alt="ava"
                width={280}
                height={280}
                className="w-[280px] h-[280px] rounded-full relative ml-0 md:ml-28"
              />
            </div>
            <div className="md:ml-10 ml-0 text-white max-w-[600px] w-full">
              <div className="text-xl font-semibold">
                Leslie Alexander
                <span className="text-lg block font-light italic">
                  Moncton, Canada
                </span>
              </div>
              <div className="text-sm  mt-5">
                <h3 className="text-2xl  mb-2">
                  Neque porro quisquam est qui dolum
                </h3>
                “ It is a long established fact that a reader will be tracked
                distracted by the readable content of a page is when looking at
                its layout. The point of using Lorem of distribution it look
                like readable English “
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

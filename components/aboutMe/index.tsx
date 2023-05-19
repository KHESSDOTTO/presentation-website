import { ReactNode, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  FreeMode,
  Scrollbar,
  Mousewheel,
} from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import AboutMeCurrStack from "../aboutMeCurrStack";
import AboutMeDescription from "../aboutMeDescription";
import AboutMeWorkStack from "../aboutMeWorkStack";
import ApiHere from "../apiHere";
import { PaginationOptions } from "swiper/types";
import AboutMeExperience from "../aboutMeExperience";
import { Fade } from "react-awesome-reveal";

export default function AboutMe() {
  let [nav, setNav] = useState<boolean>(false),
    [pag, setPag] = useState<boolean | PaginationOptions>(false);

  useEffect(() => {
    if (window.screen.width < 768) {
      // setPag({ dynamicBullets: true });
      setPag(true);
      setNav(false);
    } else {
      setPag({ type: "fraction" });
      setNav(true);
    }
  }, []);

  return (
    <section
      id="aboutMe"
      className="min-h-screen pt-16 grid grid-rows-5 border-b-4 border-gray-400 border-b-gray-200 bg-gradient-to-b from-10% from-gray-300 to-white md:pt-20 md:bg-gradient-to-r md:from-white md:via-gray-300 md:to-gray-500/70 md:h-[120vh]"
    >
      <div>
        <div className="border-b-2 border-b-black flex flex-col items-center justify-center gap-4 bg-gray-100 rounded-t-full text-center mx-2 p-2 pt-8 shadow-lg shadow-gray-700 md:pt-0 md:mx-48">
          <div className="flex flex-start items-center gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-8 h-8"
            >
              <path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z" />
              <path d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 016 13.18v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 00.551-1.608 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.668 2.25 2.25 0 002.12 0z" />
              <path d="M4.462 19.462c.42-.419.753-.89 1-1.394.453.213.902.434 1.347.661a6.743 6.743 0 01-1.286 1.794.75.75 0 11-1.06-1.06z" />
            </svg>

            <h2 className="text-4xl underline italic text-center font-serif">
              Sobre mim
            </h2>
          </div>
          <p className="text-sm italic text-gray-800 pb-4">
            * Quem sou, stack atual, stack em que estou trabalhando.
          </p>
        </div>
      </div>
      <Swiper
        slidesPerView={1}
        loop={true}
        navigation={nav}
        pagination={pag}
        modules={[Navigation, Pagination]}
        className="w-screen row-span-4 m-0"
      >
        <SwiperSlide>
          <AboutMeDescription />
        </SwiperSlide>
        <SwiperSlide>
          <AboutMeExperience />
        </SwiperSlide>
        <SwiperSlide>
          <AboutMeCurrStack />
        </SwiperSlide>
        <SwiperSlide>
          <AboutMeWorkStack />
        </SwiperSlide>
        <SwiperSlide>
          <ApiHere />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

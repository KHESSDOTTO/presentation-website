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

export interface Pag {
  dynamicBullets: boolean;
}

export default function AboutMe() {
  let [nav, setNav] = useState<boolean>(false),
    [pag, setPag] = useState<boolean | Pag>(false);

  useEffect(() => {
    if (window.screen.width < 768) {
      setPag({ dynamicBullets: true });
      setNav(false);
    } else {
      setPag(false);
      setNav(true);
    }
  }, []);

  return (
    <section
      id="aboutMe"
      className="h-fit pt-16 grid grid-rows-6 border-2 gap-2"
    >
      <div className="mx-4 border-b-4 border-b-black">
        <div className="flex flex-col items-center justify-center gap-4 bg-white rounded-t-full text-center mx-2 p-2 pt-8">
          <div className="flex flex-start items-center gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
              />
            </svg>
            <h2 className="text-4xl underline italic text-center">Sobre mim</h2>
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
        className="w-screen row-span-5 m-0"
      >
        <SwiperSlide>
          <AboutMeDescription />
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

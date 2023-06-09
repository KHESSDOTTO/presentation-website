import Image from "next/image";
import imgConstruction from "../../images/construction.jpeg";
import { useState, useEffect } from "react";
import { Slide, Fade } from "react-awesome-reveal";
import { LiWithLogo, stackList } from "../smallComp/liWithLogo";
import sassLogo from "../../images/sass-logo.svg";
import reactLogo from "../../images/react-logo.svg";
import jestLogo from "../../images/jest-logo.svg";
import sqlLogo from "../../images/sql-logo.svg";
import postgreSqlLogo from "../../images/postgresql-logo.svg";
import mySqlLogo from "../../images/mysql-logo.svg";

export default function AboutMeWorkStack() {
  const [windowWidth, setWindowWidth] = useState<number>(0),
    [imgAfter, setImgAfter] = useState<boolean>(true);

  const workStackFront: stackList[] = [
      { text: "SASS", imgLogo: sassLogo },
      { text: "React Native", imgLogo: reactLogo },
      { text: "Jest", imgLogo: jestLogo },
    ],
    workStackBack: stackList[] = [
      { text: "SQL", imgLogo: sqlLogo },
      { text: "PostgreSQL", imgLogo: postgreSqlLogo },
      { text: "MySQL", imgLogo: mySqlLogo },
    ];

  const imgSize = 20;

  useEffect(() => {
    setWindowWidth(window.outerWidth);
    if (window.outerWidth > 767) {
      setImgAfter(false);
    }
  }, []);

  const imgElement = (
    <div className="md:flex md:justify-center md:items-center md:p-6 md:shadow-md md:shadow-black md:bg-transparent md:rounded-md md:col-start-1 md:col-end-6">
      <Image
        src={imgConstruction}
        alt="Construction"
        width={windowWidth}
        className="col-span-12 border-gray-300 border-2 md:hidden"
      />
      <Image
        src={imgConstruction}
        alt="Construction"
        width={450}
        className="hidden col-span-12 border-gray-500 border-2 shadow-black shadow-lg md:rounded-md md:inline-block"
      />
    </div>
  );

  return (
    <Fade duration={1000}>
      <article className="flex flex-col px-2 text-indigo-900 gap-10 md:grid md:grid-cols-12 md:items-center md:py-12 md:px-16">
        {!imgAfter && imgElement}
        <Slide
          duration={750}
          direction="left"
          className="col-start-2 col-end-8 md:col-start-6 md:col-end-13"
        >
          <div className="grid grid-cols-12 px-6 shadow-lg shadow-indigo-900 pb-6 bg-gradient-to-b from-white/70 to-white/10 mx-2 md:bg-gradient-to-l md:to-white/80 md:rounded-lg">
            <h3 className="col-span-12 text-2xl font-semibold flex flex-row gap-4 items-center justify-start py-8 underline underline-offset-4 md:text-3xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="darkblue"
                className="w-14 h-14"
              >
                <path d="M4.5 9.75a.75.75 0 00-.75.75V15c0 .414.336.75.75.75h6.75A.75.75 0 0012 15v-4.5a.75.75 0 00-.75-.75H4.5z" />
                <path
                  fillRule="evenodd"
                  d="M3.75 6.75a3 3 0 00-3 3v6a3 3 0 003 3h15a3 3 0 003-3v-.037c.856-.174 1.5-.93 1.5-1.838v-2.25c0-.907-.644-1.664-1.5-1.837V9.75a3 3 0 00-3-3h-15zm15 1.5a1.5 1.5 0 011.5 1.5v6a1.5 1.5 0 01-1.5 1.5h-15a1.5 1.5 0 01-1.5-1.5v-6a1.5 1.5 0 011.5-1.5h15z"
                  clipRule="evenodd"
                />
              </svg>
              Stack em que estou trabalhando
            </h3>
            <div className="col-span-6 flex flex-col gap-6 md:px-8">
              <div className="flex flex-row items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"
                  />
                </svg>
                <h4 className="text-xl font-semibold text-indigo-900 underline decoration-wavy md:text-2xl">
                  Front-end:
                </h4>
              </div>
              <ul className="list-disc flex flex-col gap-2 font-semibold list-inside text-sm md:text-base">
                {workStackFront.map((e) => {
                  return (
                    <LiWithLogo
                      text={e.text}
                      imgLogo={e.imgLogo}
                      imgSize={imgSize}
                    />
                  );
                })}
              </ul>
            </div>
            <div className="col-span-6 flex flex-col gap-6">
              <div className="flex flex-row items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
                  />
                </svg>
                <h4 className="text-xl font-semibold text-indigo-900 underline decoration-wavy md:text-2xl">
                  Back-end:
                </h4>
              </div>
              <ul className="list-disc text-sm flex flex-col gap-2 font-semibold list-inside md:text-base">
                {workStackBack.map((e) => {
                  return (
                    <LiWithLogo
                      text={e.text}
                      imgLogo={e.imgLogo}
                      imgSize={imgSize}
                    />
                  );
                })}
              </ul>
            </div>
          </div>
        </Slide>
        {imgAfter && imgElement}
      </article>
    </Fade>
  );
}

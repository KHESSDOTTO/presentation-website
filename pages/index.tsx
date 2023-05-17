import WelcomeToMyWorld from "@/components/welcomeToMyWorld";
import AboutMe from "@/components/aboutMe";
import NavBar from "@/components/navBar";
import Comments from "@/components/comments";
import { Toaster } from "react-hot-toast";
import Contacts from "@/components/contacts";
import { Fade } from "react-awesome-reveal";
import BgImgOffice from "/images/background-office-dark.jpeg";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {
  const [windowWidth, setWindowWidth] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    setWindowHeight(window.outerHeight);
    setWindowWidth(window.outerWidth);
  }, []);

  return (
    <div className="max-w-screen overflow-x-hidden text-slate-600">
      <Toaster />
      <NavBar />
      <Fade duration={1500} delay={300}>
        <WelcomeToMyWorld />
      </Fade>
      <Fade duration={1500} delay={300}>
        <AboutMe />
      </Fade>
      <div className="min-h-screen grid grid-rows-3">
        <Comments />
        <Contacts />
      </div>
    </div>
  );
}

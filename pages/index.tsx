import WelcomeToMyWorld from "@/components/welcomeToMyWorld";
import AboutMe from "@/components/aboutMe";
import NavBar from "@/components/navBar";
import Comments from "@/components/comments";
import { Toaster } from "react-hot-toast";
import Contacts from "@/components/contacts";
import { Fade } from "react-awesome-reveal";

export default function Home() {
  return (
    <>
      <Toaster />
      <NavBar />
      <Fade duration={1500} delay={300} fraction={0}>
        <WelcomeToMyWorld />
      </Fade>
      <Fade duration={1500} delay={300} fraction={0}>
        <AboutMe />
      </Fade>
      <div className="min-h-screen grid grid-rows-3">
        <Comments />
        <Contacts />
      </div>
    </>
  );
}

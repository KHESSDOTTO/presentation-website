import WelcomeToMyWorld from "@/components/welcomeToMyWorld";
import AboutMe from "@/components/aboutMe";
import NavBar from "@/components/navBar";
import Comments from "@/components/comments";
import { Toaster } from "react-hot-toast";
import Contacts from "@/components/contacts";

export default function Home() {
  return (
    <>
      <Toaster />
      <NavBar />
      <WelcomeToMyWorld />
      <AboutMe />
      <div className="min-h-screen grid grid-rows-3">
        <Comments />
        <Contacts />
      </div>
    </>
  );
}

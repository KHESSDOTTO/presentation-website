import WelcomeToMyWorld from "@/components/welcomeToMyWorld";
import AboutMe from "@/components/aboutMe";
import ApiHere from "@/components/apiHere";
import ThankYou from "@/components/thankYou";
import NavBar from "@/components/navBar";
import WriteToMe from "@/components/comments";
import Comments from "@/components/comments";

export default function Home() {
  return (
    <>
      <NavBar />
      <WelcomeToMyWorld />
      <AboutMe />
      <Comments />
      <ThankYou />
    </>
  );
}

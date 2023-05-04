import WelcomeToMyWorld from "@/components/welcomeToMyWorld";
import AboutMe from "@/components/aboutMe";
import ThankYou from "@/components/thankYou";
import NavBar from "@/components/navBar";
import Comments from "@/components/comments";

export default function Home() {
  return (
    <>
      <NavBar />
      <WelcomeToMyWorld />
      <AboutMe />
      <div className="min-h-screen grid grid-rows-3">
        <Comments />
        <ThankYou />
      </div>
    </>
  );
}

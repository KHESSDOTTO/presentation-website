import { Fade } from "react-awesome-reveal";
import AboutMeCurrStack from "../aboutMeCurrStack";
import AboutMeWorkStack from "../aboutMeWorkStack";

export default function AboutMeTotalStack() {
  return (
    <article className="flex justify-evenly items-center">
      <AboutMeCurrStack />
      <AboutMeWorkStack />
    </article>
  );
}

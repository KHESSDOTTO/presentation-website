import Image from "next/image";
import img from "../../images/khess.png";
import { Fade } from "react-awesome-reveal";
import { useState, useEffect } from "react";

function FadeLeftComp() {
  const [toRender, setToRender] = useState(<div></div>);

  useEffect(() => {
    setToRender(
      <Fade direction="left" delay={700} duration={800}>
        <div className="mt-8 flex flex-col items-center gap-6 mx-8 h-full bg-slate-400/70 p-6 rounded-2xl shadow-lg shadow-black mb-2 md:grid md:grid-cols-12 md:rounded-lg">
          <div className="hidden md:col-span-4 md:grid md:grid-cols-4">
            <span className="text-gray-600 italic col-span-1 text-sm text-top text-center px-4 pt-8 md:block">
              Khess:
            </span>
            <div className="border-l-8 flex flex-row justify-center items-center border-l-gray-600 border-l-8 rounded-l-2xl rounded-r-lg md:col-span-3 md:flex md:bg-gradient-to-r md:from-white">
              <Image
                src={img}
                alt="myself"
                width={125}
                height={125}
                className="m-2 rounded-full border-2 border-black hidden md:block"
              />
            </div>
          </div>
          <fieldset className="border-t-2 border-t-gray-500 text-center flex flex-col justify-center md:col-span-8 md:border-none">
            <legend className="italic text-3xl mb-2 font-['Great_Vibes'] md:hidden">
              Khess Santomauro Dotto
            </legend>
            <article className="text-center bg-white/80 text-md rounded-lg p-4 text-slate-500 md:text-sm">
              <p className="pb-2">
                Olá! Meu nome é Khess. Sou um desenvolvedor web em busca de
                melhorias constantes! &#128591; Abaixo, informações básicas
                sobre mim, meu stack atual, stacks em que estou trabalhando, bem
                como links (CV, portfolio...).
              </p>{" "}
              <p>
                Não deixe de checar este website tanto em celulares quanto
                desktops (mobile-first)! Por favor, deixe um comentário ou
                sugestão ao final da sua visita. &#128521;
              </p>
            </article>
          </fieldset>
          <div className="bg-slate-100/90 flex flex-row justify-center w-8/12 items-center border-l-gray-800 border-l-8 shadow-lg shadow-black p-2 rounded-l-xl rounded-r-lg md:hidden">
            <Image
              src={img}
              alt="myself"
              width={130}
              height={130}
              className="rounded-full border-black border-2 border-black"
            />
          </div>
        </div>
      </Fade>
    );
  }, []);

  return <>{toRender}</>;
}

export default function WelcomeToMyWorld() {
  return (
    <section
      id="welcomeToMyWorld"
      className={`bg-gradient-to-b from-gray-100 to-gray-300 py-8 min-h-screen flex flex-col gap-4 items-center justify-center md:pb-24 md:bg-gradient-to-r md:grid md:grid-rows-2 md:h-screen md:pt-20 md:from-white md:via-gray-300 md:to-gray-500/80 md:h-[120vh]`}
    >
      <FadeLeftComp />
      <h1 className="hidden font-['Great_Vibes'] text-8xl mt-12 mx-auto flex-row items-center gap-4 text-gray-800 stroke-black md:flex md:row-span-2">
        Khess Santomauro Dotto{" "}
      </h1>
    </section>
  );
}

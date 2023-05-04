import Image from "next/image";
import img from "../../images/khess.png";

export default function WelcomeToMyWorld() {
  return (
    <section
      id="welcomeToMyWorld"
      className={`bg-gray-200 pt-8 border-t-2 border-b-2 border-gray-500/50 min-h-screen flex flex-col gap-4 items-center justify-center md:grid md:grid-rows-3 md:h-screen md:py-8`}
    >
      <div className="mt-8 grid gap-6 mx-8 h-full bg-slate-400/70 p-6 rounded-2xl shadow-xl mb-2 md:grid-rows-3 md:grid-cols-12 md:row-span-1 md:mt-24">
        <div className="hidden col-span-4 md:grid">
          <span className="text-gray-600 italic col-span-1 text-sm text-top text-center px-4 pt-8 md:block">
            Khess:
          </span>
          <div className="flex flex-row justify-center items-center border-l-gray-600 border-l-8 rounded-l-2xl rounded-r-lg col-span-3 md:flex">
            <Image
              src={img}
              alt="myself"
              width={125}
              height={125}
              className="m-2 rounded-full border-2 border-black hidden md:block"
            />
          </div>
        </div>
        <fieldset className="col-span-12 border-t-2 border-t-gray-500 text-center flex flex-col justify-center gap-8 md:col-span-8 md:border-none">
          <legend className="italic mb-2 text-3xl md:hidden font-['Great_Vibes']">
            Khess Santomauro Dotto
          </legend>
          <article className="text-center bg-white/80 text-sm rounded-lg p-4 md:p-2 md:text-xs">
            <p className="pb-2">
              Olá! Meu nome é Khess. Esse é um breve site para me apresentar.
              Sou um desenvolvedor web em busca da melhorias constantes!{" "}
              <span className="text-lg">&#128591;</span> Abaixo, há uma seção
              interativa com informações básicas sobre mim, minha trajetória,
              stack atual e stacks em que estou trabalhando.
            </p>{" "}
            <p>
              Em seguida, há uma seção de comentários para me ajudarem a
              melhorar... não hesite em deixar sua sugestão, por favor!
              &#128521; Logo após, meus contatos. Não deixe de checar este
              website tanto em celulares quanto desktops (mobile-first).{" "}
            </p>
          </article>
        </fieldset>
        <div className="flex flex-row justify-center col-start-2 col-end-12 items-center border-l-gray-800 border-l-8 shadow-lg p-2 rounded-l-xl rounded-r-lg md:hidden">
          <Image
            src={img}
            alt="myself"
            width={130}
            height={130}
            className="rounded-full border-black border-2 border-black"
          />
        </div>
      </div>
      <h1 className="hidden font-['Great_Vibes'] underline text-7xl mt-12 md:flex mx-auto md:col-span-12 md:row-span-2 flex-row items-center gap-4">
        Khess Santomauro Dotto{" "}
      </h1>
    </section>
  );
}

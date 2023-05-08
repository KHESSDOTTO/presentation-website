import { Fade } from "react-awesome-reveal";

export default function AboutMeExperience() {
  return (
    <article className="flex flex-col items-center justify-center px-6 gap-4 pb-6">
      <Fade duration={1000}>
        <h3 className="underline font-semibold text-xl text-gray-700 flex flex-row items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path d="M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.25a.75.75 0 001 .707A8.237 8.237 0 016 18.75c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 20.636A8.214 8.214 0 0118 18.75c.966 0 1.89.166 2.75.47a.75.75 0 001-.708V4.262a.75.75 0 00-.5-.707A9.735 9.735 0 0018 3a9.707 9.707 0 00-5.25 1.533v16.103z" />
          </svg>
          Minha história/experiência
        </h3>
        <div className="flex flex-col gap-1 text-sm leading-5 indent-4 text-justify">
          <p>
            Comecei minha carreira no mercado financeiro com uma oportunidade
            que recebi pela faculdade (FGV). Apesar de possuir um perfil
            naturalmente mais analítico, neste mercado, desenvolvi bastante o
            meu lado comercial e comunicativo. Infelizmente, não era onde eu
            queria construir a minha carreira... :(
          </p>
          <p>
            Em meus estudos paralelos, fiz um curso de VBA para automatizar
            processos manuais / mecânicos que tínhamos no banco. Isso me
            interessou muito e vi grande importância!
          </p>
          <p>
            Pelos próximos 2 anos, mantive contato próximo com a programação
            (VBA e Python) e a parte que eu mais gostava do meu trabalho era de
            lidar diretamente com códigos para automatizar processos, bem como
            desenvolver planilhas de cálculos intuitivas e esteticamente
            agradáveis para uso da equipe.
          </p>
          <p>
            A partir desse momento, aprendi e resolvi estudar por conta própria
            desenvolvimento Web Full Stack, área que me interessou muito! cursei
            matérias eletivas de desenvolvimento Web na faculdade e, por fim,
            concluí o curso completo de de Web Development full stack na
            Ironhack no início de 2023.
          </p>
          <p>
            Aprendi bastante e estou desenvolvendo uma série de projetos
            pessoais enquanto não tenho a minha primeira oportunidade de
            emprego! Continuo estudando todos os dias, tenho cerca de 3 anos de
            experiência com programação em geral e 1 ano especificamente com
            desenvolvimento web. Quer saber mais? Me chama e vamos conversar!!!
            Meus contatos estão ao final (rodapé).
          </p>
        </div>
      </Fade>
    </article>
  );
}

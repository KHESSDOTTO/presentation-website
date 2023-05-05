import imgThumbsUp from "../../images/thumbs-up.238x256.png";
import Image from "next/image";

export default function AboutMeCurrStack() {
  return (
    <article className="px-4 gap-8 flex flex-col justify-center text-green-900">
      <div className="grid grid-cols-12 shadow-md shadow-black px-6 pb-6 bg-white/60">
        <h3 className="col-span-12 text-4xl font-semibold text-green-900 flex flex-row gap-2 items-center justify-start py-8 underline underline-offset-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="darkgreen"
            className="w-12 h-12"
          >
            <path
              fillRule="evenodd"
              d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
              clipRule="evenodd"
            />
          </svg>
          Stack Atual
        </h3>
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
                d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"
              />
            </svg>
            <h4 className="text-2xl font-semibold text-green-800 underline decoration-wavy">
              Front-end:
            </h4>
          </div>
          <ul className="list-disc flex flex-col gap-2 font-semibold list-inside">
            <li>HTML (HTML5)</li>
            <li>CSS (CSS3)</li>
            <li>Javascript</li>
            <li>Typescript</li>
            <li>React.js</li>
            <li>Bootstrap</li>
            <li>React-bootstrap</li>
            <li>Tailwind</li>
            <li>Next.js</li>
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
            <h4 className="text-2xl font-semibold text-green-800 underline decoration-wavy">
              Back-end:
            </h4>
          </div>
          <ul className="list-disc flex flex-col gap-2 font-semibold list-inside">
            <li>MongoDB</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>Javascript</li>
            <li>Typescript</li>
            <li>Axios</li>
            <li>REST API</li>
          </ul>
        </div>
      </div>
      <Image
        src={imgThumbsUp}
        alt="Thumbs Up"
        width={130}
        height={130}
        className="col-span-12 mx-auto"
      />
    </article>
  );
}

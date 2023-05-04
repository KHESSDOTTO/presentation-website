export default function AboutMeCurrStack() {
  return (
    <article className="grid grid-cols-12 px-6">
      <h3 className="col-span-12 text-3xl font-semibold flex flex-row gap-2 items-center justify-start">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="darkgreen"
          className="w-8 h-8"
        >
          <path
            fillRule="evenodd"
            d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
            clipRule="evenodd"
          />
        </svg>
        Stack Atual
      </h3>
      <div className="col-span-6">
        <h4>Front-end:</h4>
        <ul>
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
      <div className="col-span-6">
        <h4>Back-end:</h4>
        <ul>
          <li>MongoDB</li>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>Javascript</li>
          <li>Typescript</li>
          <li>Axios</li>
          <li>REST API</li>
        </ul>
      </div>
    </article>
  );
}

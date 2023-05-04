export default function AboutMeWorkStack() {
  return (
    <article className="grid grid-cols-12">
      <h3 className="flex flex-row justify-center items-center gap-2 col-span-12 text-2xl underline font-semibold">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="darkblue"
          className="w-10 h-10"
        >
          <path d="M4.5 9.75a.75.75 0 00-.75.75V15c0 .414.336.75.75.75h6.75A.75.75 0 0012 15v-4.5a.75.75 0 00-.75-.75H4.5z" />
          <path
            fillRule="evenodd"
            d="M3.75 6.75a3 3 0 00-3 3v6a3 3 0 003 3h15a3 3 0 003-3v-.037c.856-.174 1.5-.93 1.5-1.838v-2.25c0-.907-.644-1.664-1.5-1.837V9.75a3 3 0 00-3-3h-15zm15 1.5a1.5 1.5 0 011.5 1.5v6a1.5 1.5 0 01-1.5 1.5h-15a1.5 1.5 0 01-1.5-1.5v-6a1.5 1.5 0 011.5-1.5h15z"
            clipRule="evenodd"
          />
        </svg>
        Stack em que estou trabalhando
      </h3>
      <div className="col-span-6">
        <h4>Front-end:</h4>
        <ul>
          <li>SASS</li>
          <li>React Native</li>
          <li>Jest</li>
        </ul>
      </div>
      <div className="col-span-6">
        <h4>Back-end:</h4>
        <ul>
          <li>SQL</li>
          <li>PostgreSQL</li>
        </ul>
      </div>
    </article>
  );
}

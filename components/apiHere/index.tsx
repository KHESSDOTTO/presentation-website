import { useLoadScript, GoogleMap, Marker } from "@react-google-maps/api";
import styles from "./styles.module.css";
import { Fade, Slide, Roll } from "react-awesome-reveal";

export default function ApiHere() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
  });

  if (!isLoaded) {
    return (
      <section>
        <div className="flex flex-row items-center">
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
              d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
            />
          </svg>
          <h2 className="text-2xl font-semibold underline">Onde estou</h2>
        </div>
        <p>Loading map...</p>
      </section>
    );
  }

  return (
    <section
      className={`flex flex-col items-center justify-center gap-10 h-full md:flex-row md:justify-evenly md:gap-0 xl:h-[70vh]`}
    >
      <Slide
        direction="down"
        duration={750}
        delay={200}
        className="self-start md:self-center"
      >
        <div className="flex flex-col gap-2 self-start px-8 text-gray-800 md:px-0">
          <div className="self-start flex flex-row gap-2 items-center font-semibold underline">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                clipRule="evenodd"
              />
            </svg>
            <h2 className="text-2xl">Onde estou</h2>
          </div>
          <p className="italic ">São Paulo, São Paulo, Brasil</p>
        </div>
      </Slide>
      <div className="hidden md:inline-block md:h-2/5 md:border-l-2 md:border-gray-800 md:mr-4"></div>
      <div className="rounded-xl bg-white/60 w-11/12 h-2/3 border-2 flex flex-col gap-2 justify-center items-center md:w-3/5 md:h-5/6 lg:h-2/3">
        <GoogleMap
          center={{ lat: -23.642429988253433, lng: -46.662051583212225 }}
          zoom={12}
          mapContainerClassName={styles.someClass}
        >
          <Marker position={{ lat: 44, lng: -80 }} />
        </GoogleMap>
        <p className="italic text-xs hidden md:inline-block">
          São Paulo, São Paulo, Brasil
        </p>
      </div>
    </section>
  );
}

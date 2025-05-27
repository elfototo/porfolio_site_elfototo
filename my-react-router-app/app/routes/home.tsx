import type { Route } from "./+types/home";
import Services from "../components/services";
import MainButton from "../components/mainButton";
import Technologies from "../components/technologies";
import Projects from "../components/projects";
import Skills from "../components/skills";
import ParallaxIcon from "../components/parallaxIcon";
import { useTranslation } from "react-i18next";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      {/* Block Main */}
      <div
        id="home"
        className="flex flex-col md:flex-row justify-center items-center md:justify-between mx-auto container max-w-[1200px] px-4 pb-10 md:pb-0"
      >
        {/* bg img */}
        <img
          src={"/bg.webp"}
          alt="bg"
          className="absolute z-0 xl:-top-[9%] lg:-top-[5%] -top-[4%] xl:-right-[15%] lg:-right-[10%] -right-[13%] opacity-100 xl:w-[1000px] lg:w-[800px] w-[600px]"
        />
        {/* Mobile*/}
        <div className="block md:hidden flex items-center justify-center">
          <div className="bg-yellow-400 relative w-50 h-50 rounded-full overflow-hidden shadow-xl border-4 border-white">
            <img
              src="/main_photo.webp"
              alt="Avatar"
              className="absolute top-2 left-0 w-full h-auto object-cover z-10"
            />
          </div>
        </div>
        <div className="md:hidden flex justify-center items-center flex-col z-20 w-full mt-8">
          <h2 className="text-xl leading-none font-semibold mb-2">
            {t("main.greeting")}
            <span className="text-yellow-400 underline">
              {t("main.titleHighlight.part1")}
              {t("main.titleHighlight.part2")}
            </span>{" "}
          </h2>
          <h2 className="text-xl leading-none font-semibold mb-4">
            {t("main.name.part1")}
            {t("main.name.name")}
          </h2>
          <MainButton value={t("main.downloadCV")} />
        </div>

        {/* Deckstop */}
        <div className="md:block hidden flex flex-col z-20 xl:w-[50%] md:w-[50%] w-[50%] h-full mr-0 pb-10">
          <p className="text-xl leading-none font-semibold mb-4">
            {t("main.greeting")}
          </p>
          <h1 className="text-[50px] leading-none font-bold mb-8">
            <span className="text-gray-700">
              {t("main.titleHighlight.part1")}
            </span>
            <span className="text-yellow-400 underline">
              {t("main.titleHighlight.part2")}
            </span>
          </h1>
          <p className="text-xl leading-none font-semibold mb-8">
            {t("main.name.part1")}
            <span className="">{t("main.name.name")}</span>
            {t("main.name.part2")}
          </p>
          <MainButton value={t("main.downloadCV")} />
        </div>

        <div className="md:block flex mx-auto hidden relative w-[70%] lg:w-[70%] overflow-visible lg:h-[37rem] h-[30rem]">
          <img
            src="/main_photo.webp"
            alt="Background image"
            loading="eager"
            className="object-contain absolute -bottom-[2.5rem] lg:bottom-0 lg:-right-0 xl:right-0 w-full lg:h-[37rem] h-[32rem] z-0"
          />
          <ParallaxIcon
            src="/icon_5.webp"
            speed={10}
            className="top-1/8 left-0 lg:w-[150px] w-[120px] z-10"
          />
          <ParallaxIcon
            src="/icon_4.webp"
            speed={10}
            className="top-1/2 right-1/7 lg:w-[140px] w-[110px] z-20"
          />
          <ParallaxIcon
            src="/icon_6.webp"
            speed={-10}
            className="bottom-1/7 left-1/5 lg:w-[150px] w-[110px] z-20 "
          />
          <ParallaxIcon
            src="/icon_1.webp"
            speed={-20}
            className="-top-1/10 right-1/7 lg:w-[170px] w-[120px] z-20"
          />
          <ParallaxIcon
            src="/icon_3.webp"
            speed={5}
            className="top-1/5 right-1/7 lg:w-[50px] w-[40px] z-20"
          />
          <ParallaxIcon
            src="/icon_3.webp"
            speed={5}
            className="bottom-1/3 left-1/9 lg:w-[50px] w-[40px] z-20"
          />
          <ParallaxIcon
            src="/icon_3.webp"
            speed={-5}
            className="blur-2xl top-0 left-1/4 lg:w-[50px] w-[40px] z-20"
          />
        </div>
      </div>

      {/* Block About */}

      <div id="about" className="relative text-white w-full">
        {/*Deckstop wave */}
        <div className="absolute xl:-top-70 lg:-top-44 md:-top-40 hidden md:block w-full z-0 overflow-hidden">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#334155"
              fillOpacity="1"
              d="M0,96L48,112C96,128,192,160,288,154.7C384,149,480,107,576,117.3C672,128,768,192,864,197.3C960,203,1056,149,1152,112C1248,75,1344,53,1392,42.7L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>

        {/* Mobile wave*/}
        <div className="absolute -top-35 md:hidden block w-full z-0 overflow-hidden">
          <svg
            className="h-[200px] w-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#334155"
              fillOpacity="1"
              d="M0,224L120,197.3C240,171,480,117,720,90.7C960,64,1200,64,1320,64L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
            ></path>
          </svg>
        </div>

        {/* Border up*/}
        <div className="relative bg-[#334155] w-full h-full relative z-10">
          {/* Content */}
          <div className="container max-w-[1200px] px-4 py-10 mx-auto flex flex-wrap justify-center items-center h-full">
            <div className="md:block hidden relative w-[300px] h-[400px] mr-10">
              {/* deckstop img */}
              <ParallaxIcon
                src="/about_2.webp"
                speed={-5}
                className="top-0 right-0 w-[500px] z-10"
              />
            </div>
            <div className="md:w-[50%] w-full">
              <h1 className="text-white text-5xl font-bold mb-10">
                {t("about.title")}
              </h1>
              <p>{t("about.text")}</p>
            </div>

            {/* mobile img*/}
            <div className="md:hidden mx-auto relative w-full h-full mt-8">
              <img
                src="/about_mobile.webp"
                alt="image"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Block Skills */}
      <div id="skills" className="relative bg-white h-full w-full">
        {/* Deckstop Wawe*/}
        <div className="absolute rotate-180 xl:-top-0 lg:-top-0 md:-top-0 hidden md:block w-full z-0 overflow-hidden">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#334155"
              fillOpacity="1"
              d="M0,320L48,288C96,256,192,192,288,186.7C384,181,480,235,576,213.3C672,192,768,96,864,96C960,96,1056,192,1152,208C1248,224,1344,160,1392,128L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
        {/* Mobile wawe*/}
        <div className="absolute rotate-180 -top-16 md:hidden block w-full z-0 overflow-hidden">
          <svg
            className="h-[200px] w-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#334155"
              fillOpacity="1"
              d="M0,224L120,197.3C240,171,480,117,720,90.7C960,64,1200,64,1320,64L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
            ></path>
          </svg>
        </div>
        <div className="container max-w-[1200px] px-4 py-[300px] xl:py-[400px] mx-auto flex items-center h-full w-full z-10">
          <Skills />
        </div>
      </div>

      {/* Block Services */}
      <div
        id="services"
        className="bg-gray-700 min-h-[1000px] md:min-h-[500px] lg:min-h-[450px] relative w-full mb-10"
      >
        {/*Deckstop wave */}
        <div className="absolute xl:-top-70 lg:-top-44 md:-top-40 hidden md:block w-full z-0 overflow-hidden">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#334155"
              fillOpacity="1"
              d="M0,128L26.7,106.7C53.3,85,107,43,160,58.7C213.3,75,267,149,320,154.7C373.3,160,427,96,480,69.3C533.3,43,587,53,640,69.3C693.3,85,747,107,800,122.7C853.3,139,907,149,960,149.3C1013.3,149,1067,139,1120,122.7C1173.3,107,1227,85,1280,64C1333.3,43,1387,21,1413,10.7L1440,0L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"
            ></path>
          </svg>
        </div>
        {/* Mobile wave*/}
        <div className="absolute -top-35 md:hidden block w-full z-0 overflow-hidden">
          <svg
            className="h-[200px] w-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#334155"
              fillOpacity="1"
              d="M0,224L120,197.3C240,171,480,117,720,90.7C960,64,1200,64,1320,64L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
            ></path>
          </svg>
        </div>

        <div className="container max-w-[1200px] mx-auto flex h-full justify-center items-center">
          <div className="w-full flex flex-col justify-center items-center z-20 px-4 pb-[150px]">
            <Services />
          </div>
        </div>
      </div>

      {/* Block Technologies */}
      {/* <div className="relative bg-white h-full w-full mb-10 h-[900px] py-[200px]">
        <div className="container max-w-[1200px] mx-auto h-full justify-center items-center">
          <Technologies />
        </div>
      </div> */}

      {/* Block Projects */}
      <div id="projects" className="bg-white h-full w-full mb-10">
        <div className="container max-w-[1200px] mx-auto h-full">
          <Projects />
        </div>
      </div>
    </>
  );
}

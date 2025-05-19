import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div className="">
      {/* Block 1 */}
      <div>
        <div>
          <div className="flex flex-col md:flex-row justify-center md:justify-around mx-auto container px-4 py-10 lg:py-0 ">
            {/* Mobile images*/}
            <div className="block md:hidden flex items-center justify-center">
              <div className="bg-yellow-400 relative w-50 h-50 rounded-full overflow-hidden shadow-xl border-4 border-white">
                <img
                  src="/main_photo.webp"
                  alt="Avatar"
                  className="absolute top-2 left-0 w-full h-auto object-cover z-10"
                />
              </div>
            </div>
            {/* Mobile */}
            <div className="md:hidden flex justify-center items-center flex-col z-20 w-full mt-8">
              <h2 className="text-xl leading-none font-semibold mb-2">
                Hello, I'm a{" "}
                <span className="text-yellow-400 underline">
                  Frontend developer.
                </span>{" "}
              </h2>
              <h2 className="text-xl leading-none font-semibold mb-4">
                My name is Elizaveta
              </h2>

              <div className="flex">
                <button className="h-auto py-4 px-8 cursor-pointer bg-yellow-400 hover:bg-yellow-500 text-white font-semibold rounded-lg mr-4 transition duration-300">
                  Download CV
                </button>
              </div>
            </div>

            {/* md:block hidden flex flex-col z-20 md:w-[40%] w-full md:mr-10 mr-0 lg:mt-20 mt-10 xl:ml-40 lg:ml-10 ml-0 */}
            {/* Deckstop */}
            <div className="md:block hidden flex flex-col z-20 md:w-[50%] w-[50%] w-full md:mr-10 mr-0 lg:mt-20 mt-10 xl:ml-40 lg:ml-10">
              <p className="text-xl leading-none font-semibold mb-4">
                Hello, I'm a
              </p>
              <h1 className="text-[50px] leading-none font-bold mb-8">
                <span className="text-gray-700">Frontend </span>
                <span className="text-yellow-400 underline">developer.</span>
              </h1>
              <p className="text-xl leading-none font-semibold mb-8">
                My name is <span className="">Elizaveta Davydova</span>. Welcome
                to my website. Here I'm posting my experience and last projects.
              </p>
              <div className="flex">
                <button className="h-auto py-4 px-8 cursor-pointer bg-yellow-400 hover:bg-yellow-500 text-white font-semibold rounded-lg mr-4 transition duration-300">
                  Download CV
                </button>

                {/* <button className="w-3/4 h-[50px] border cursor-pointer border-yellow-400 text-yellow-400 hover:border-yellow-500 font-semibold rounded-lg transition duration-300">
                  Write me
                </button> */}
              </div>
            </div>
            {/* Deckstop */}
            <div className="md:block hidden relative lg:w-[600px] w-[500px] lg:h-[600px]">
              <img
                src="/main_photo.webp"
                alt="Background image"
                loading="eager"
                className="absolute lg:-bottom-10 -bottom-30 xl:-left-10 lg:left-0 w-auto lg:h-[600px] h-[500px] object-contain right-0"
                style={{
                  filter: "drop-shadow(0 10px 20px rgba(0, 0, 0, 0.5))",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Block 2 */}

      <div className="relative text-white w-full">
        {/* Wave */}
        <div className="absolute xl:-top-70 lg:-top-44 md:-top-40 hidden md:block w-full z-0 overflow-hidden">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#334155"
              fill-opacity="1"
              d="M0,96L48,112C96,128,192,160,288,154.7C384,149,480,107,576,117.3C672,128,768,192,864,197.3C960,203,1056,149,1152,112C1248,75,1344,53,1392,42.7L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>

        {/* mobile */}
        <div className="absolute -top-35 md:hidden block w-full z-0 overflow-hidden">
          <svg
            className="h-[200px] w-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#334155"
              fill-opacity="1"
              d="M0,224L120,197.3C240,171,480,117,720,90.7C960,64,1200,64,1320,64L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
            ></path>
          </svg>
        </div>

        <div className="bg-[#334155] w-full h-[600px] relative z-10">
          <div className=" px-4 container mx-auto flex flex-wrap justify-center items-center h-full">
            <div className="md:block hidden relative bg-yellow-400 w-[300px] h-[400px] mr-10">
              {/* <img src="" alt="image" className="" /> */}
            </div>
            <div className="md:w-[50%] w-full">
              <h1 className="text-white text-5xl font-bold mb-10">About me</h1>
              <p>
                Junior Frontend Developer with over a year of experience working
                with React, Next.js, and modern CSS frameworks such as Tailwind
                CSS. My background in design allows me to effectively integrate
                visual and technical solutions, providing a comprehensive
                approach to development — from implementation to creating
                user-friendly and visually appealing interfaces. I am eager to
                further develop my skills in frontend development and become an
                expert in building high-quality, performant, and scalable web
                applications.
              </p>
            </div>
            {/* mobile */}
            <div className="md:hidden  relative bg-yellow-400 w-full h-[200px]">
              {/* <img src="" alt="image" className="" /> */}
            </div>
          </div>
        </div>
        <div className="bg-[#334155] w-full h-[300px] z-10"></div>
      </div>

      {/* Block 3 */}

      <div className="bg-white h-[500px] relative w-full">
        <div className="container mx-auto flex h-full justify-center items-center">
          <div className="absolute w-full flex flex-col justify-center items-center -top-60 z-20 ">
            <h1 className="text-white text-5xl font-bold mb-10">Services</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-4 w-full container">
              <div className="w-full h-[300px] bg-yellow-400 flex justify-center items-center text-white text-2xl">
                Servece
              </div>
              <div className="w-full h-[300px] bg-yellow-400  flex justify-center items-center text-white text-2xl">
                Servece
              </div>
              <div className="w-full h-[300px] bg-yellow-400  flex justify-center items-center text-white text-2xl">
                Servece
              </div>
              <div className="w-full h-[300px] bg-yellow-400  flex justify-center items-center text-white text-2xl">
                Servece
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

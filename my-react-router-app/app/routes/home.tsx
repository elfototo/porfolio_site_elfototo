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
          <div className="flex justify-around mx-auto items-center container">
            <div className="flex flex-col z-20">
              <h1 className="text-[100px] leading-none font-bold text-yellow-500">
                <span className="block">Davydova</span>
                <span className="block">Elizaveta</span>
              </h1>
              <p className="text-[50px] leading-none font-bold mb-8">
                frontend developer
              </p>
              <div className="flex">
                <button className="w-3/4 h-[50px] bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-lg mr-4 transition duration-300">
                  Скачать CV
                </button>

                <button className="w-3/4 h-[50px] border border-yellow-500 text-yellow-500 hover:bg-yellow-100 font-semibold rounded-lg transition duration-300">
                  Написать мне
                </button>
              </div>
            </div>
            <div className="relative w-[500px] h-[650px]">
              <img
                src="/main_photo.png"
                alt="Background image"
                className="absolute bottom-0 left-0 w-auto h-[650px] object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Block 2 */}

      <div className="relative text-white w-full">
        {/* Wave */}
        <div className="absolute -top-60 w-full z-0 overflow-hidden">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#333333"
              fill-opacity="1"
              d="M0,96L48,112C96,128,192,160,288,154.7C384,149,480,107,576,117.3C672,128,768,192,864,197.3C960,203,1056,149,1152,112C1248,75,1344,53,1392,42.7L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
        <div className="bg-[#333333] w-full h-[600px] relative z-10">
          <div className="container mx-auto flex justify-center items-center h-full">
            <div className="relative bg-yellow-500 w-[300px] h-[400px] mr-10">
              {/* <img src="" alt="image" className="" /> */}
            </div>
            <div className="w-[50%]">
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
          </div>
        </div>
        <div className="bg-[#333333] w-full h-[300px] z-10"></div>
      </div>

      {/* Block 3 */}

      <div className="bg-yellow-500 h-[500px] relative w-full">
        <div className="container mx-auto flex justify-center items-center">
          <div className="absolute flex flex-col justify-center items-center -top-60 z-20">
            <h1 className="text-white text-5xl font-bold mb-10">Services</h1>
            <div className="flex">
              <div className="w-[300px] h-[300px] bg-gray-100 mr-10 flex justify-center items-center text-gray-500 text-2xl">
                Servece
              </div>
              <div className="w-[300px] h-[300px] bg-gray-100  mr-10 flex justify-center items-center text-gray-500 text-2xl">
                Servece
              </div>
              <div className="w-[300px] h-[300px] bg-gray-100  flex justify-center items-center text-gray-500 text-2xl">
                Servece
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

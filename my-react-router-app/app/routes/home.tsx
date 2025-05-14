import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div>
      <div className="flex justify-center">
        <div className="flex justify-center flex-col mr-20">
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
        <div className="bg-yellow-500 w-[400px] h-[500px] rounded-lg"></div>
      </div>
    </div>
  );
}

import { PiDevicesFill } from "react-icons/pi";
import type { JSX } from "react";

interface Props {
  title: string;
  content: string;
  id: number;
}

const colors = [
  "bg-purple-500",
  "bg-green-500",
  "bg-cyan-500",
  "bg-yellow-500",
];

const images = [
  "/services.webp",
  "/services_2.webp",
  "/services_3.webp",
  "/services_4.webp",
];

export default function ServiceCard({ title, content, id }: Props) {
  const color = colors[id % colors.length];
  const image = images[id % images.length];

  const icon: JSX.Element = <PiDevicesFill size={70} />;

  return (
    <>
      <div
        className={`${color} group w-full h-full flex flex-col items-start text-white text-2xl group-hover:shadow-xl transform transition-all duration-300 cursor-default rounded-xl overflow-hidden`}
      >
        <div className="md:w-full w-[70%] object-contain h-[60%] lg:h-[50%] mb-8 p-4 mx-auto">
          <img
            src={image}
            alt="img"
            className="object-contain mx-auto group-hover:-rotate-5 transition duration-300"
          />
        </div>
        <div className="bg-white text-gray-700 p-4 w-full lg:h-[50%] h-[40%]">
          <h1 className="font-bold mb-4 text-2xl">{title}</h1>
          <p className="text-sm">{content}</p>
        </div>
      </div>
    </>
  );
}

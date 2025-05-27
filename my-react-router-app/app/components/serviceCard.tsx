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
        className={`${color} w-full h-full flex flex-col items-start text-white text-2xl p-8 hover:shadow-xl transform transition-all duration-300 cursor-default`}
      >
        <div className="md:w-full  w-[300px] mb-8  mx-auto">
          
          <img src={image} alt="img" className="object-contain mx-auto" />
        </div>

        <h1 className="font-bold mb-4 text-2xl">{title}</h1>
        <div className="">
          <p className="text-sm">{content}</p>
        </div>
      </div>
    </>
  );
}

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
  "/services_3.webp",
  "/services_5.webp",
  "/services_2.webp",
  "/services_4.webp",
  "/services_6.webp",

];

export default function ServiceCard({
  title,
  content,
  id,
}: {
  title: string;
  content: string;
  id: number;
}) {
  const color = colors[id % colors.length];
  const image = images[id % images.length];

  return (
    <>
      <div
        className={`${color} group w-full h-full flex flex-col items-start text-white group-hover:shadow-xl transform transition-all duration-300 cursor-default rounded-xl overflow-hidden`}
      >
        <div className="md:w-full w-[70%] object-contain h-[60%] lg:h-[50%] mb-4 p-4 mx-auto">
          <img
            src={image}
            alt="img"
            className="object-contain mx-auto group-hover:-rotate-5 transition duration-300"
          />
        </div>
        <div className="bg-white text-gray-700 p-4 w-full  h-[50%] z-10">
          <h1 className="font-inter-extraBold mb-4 text-2xl">{title}</h1>
          <p className="font-inter-regular">{content}</p>
        </div>
      </div>
    </>
  );
}

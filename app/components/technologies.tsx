// import React from "react";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css/effect-fade";
// import "swiper/css/bundle";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import type { JSX } from "react";

// // icons
// import { FaReact } from "react-icons/fa";
// import { SiNextdotjs } from "react-icons/si";
// import { FaNodeJs } from "react-icons/fa";
// import { RiTailwindCssFill } from "react-icons/ri";
// import { FaGit } from "react-icons/fa";
// import { SiWebpack } from "react-icons/si";

// export default function Technologies() {
//   interface TechIcon {
//     id: number;
//     name: string;
//     icon: JSX.Element;
//   }

//   const techIcons: TechIcon[] = [
//     { id: 1, name: "React", icon: <FaReact size={50} /> },
//     { id: 2, name: "Next.js", icon: <SiNextdotjs size={50} /> },
//     { id: 3, name: "Node.js", icon: <FaNodeJs size={50} /> },
//     { id: 4, name: "Tailwind CSS", icon: <RiTailwindCssFill size={50} /> },
//     { id: 5, name: "Git", icon: <FaGit size={50} /> },
//     { id: 6, name: "Webpack", icon: <SiWebpack size={50} /> },
//   ];

//   return (
//     <>
//       <h1 className="text-gray-700 text-5xl font-bold mb-10 flex items-center justify-center">
//         Technologies
//       </h1>
//       <Swiper
//         spaceBetween={30}
//         centeredSlides={false}
//         autoplay={{
//           delay: 2500,
//           disableOnInteraction: false,
//         }}
//         navigation={true}
//         modules={[Autoplay, Pagination, Navigation]}
//         slidesPerView={5}
//         breakpoints={{
//           320: {
//             slidesPerView: 1,
//             spaceBetween: 5,
//           },
//           480: {
//             slidesPerView: 2,
//             spaceBetween: 5,
//           },
//           768: {
//             slidesPerView: 3,
//             spaceBetween: 10,
//           },
//           1024: {
//             slidesPerView: 4,
//             spaceBetween: 20,
//           },
//           1300: {
//             slidesPerView: 5,
//             spaceBetween: 20,
//           },
//         }}
//       >
//         {techIcons.map((tech) => (
//           <SwiperSlide
//             key={tech.id}
//             className="flex justify-center items-center"
//           >
//             <div className="tech-card p-4 flex justify-center items-center">
//               {tech.icon}
//               <span className="ml-2">{tech.name}</span>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </>
//   );
// }

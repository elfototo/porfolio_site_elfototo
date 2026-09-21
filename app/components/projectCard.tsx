// icons
import { FaGithub, FaGlobe } from "react-icons/fa";

import { useTranslation } from "react-i18next";

type Project = {
  id: number;
  title: string;
  content: string;
  button: string;
  github: string;
  website: string;
  image: string;
  tech: string[];
};

export default function ProjectCard({ id }: { id: number }) {
  const { t } = useTranslation();

  const projects: Project[] = [
    {
      id: 1,
      title: t("projects.davai.title"),
      content: t("projects.davai.content"),
      button: t("projects.davai.button"),
      github: "https://github.com/elfototo/davai-s-nami",
      image: "/portfolio_1.webp",
      website: "https://davai-s-nami.vercel.app/",
      tech: [
        "React",
        "Next.js",
        "SWR",
        "Redux",
        "Docker",
        "Vercel",
        "Telegram Web Apps",
        "Tailwind CSS",
      ],
    },

    {
      id: 2,
      title: t("projects.baton.title"),
      content: t("projects.baton.content"),
      button: t("projects.baton.button"),
      github: "https://github.com/elfototo/baton",
      website: "https://www.figma.com/community/plugin/1676909519117615210",
      image: "/baton-project.webp",
      tech: [
        "TypeScript",

        "Preact",

        "Tailwind CSS",

        "Figma Plugin API",

        "Vitest",
      ],
    },
  ];

  const currentProject = projects.find((item) => item.id === id);

  if (!currentProject) {
    return null;
  }

  return (
    <div className="mx-auto flex h-auto w-full flex-col overflow-hidden rounded-xl border border-gray-200 shadow-lg md:flex-row">
      {/* Desktop image */}
      <div
        className="relative hidden min-w-[45%] items-end md:block"
        style={{
          clipPath: "polygon(0 0, 100% 0, 85% 100%, 0% 100%)",
          background:
            "linear-gradient(90deg, rgba(78,19,179,1) 9%, rgba(245,45,133,1) 100%)",
        }}
      >
        <div
          className="absolute inset-0 z-0 h-full w-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${currentProject.image})`,
          }}
        />
      </div>

      {/* Mobile image */}
      <div className="block md:hidden">
        <img
          src={currentProject.image}
          alt={currentProject.title}
          loading="eager"
          className="mb-2 h-auto w-full"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col justify-center p-10">
        <h2 className="mb-3 text-2xl font-semibold">{currentProject.title}</h2>

        <p className="mb-5 text-md font-inter-light">
          {currentProject.content}
        </p>

        {/* Links */}
        <div className="flex flex-wrap gap-4">
          {/* GitHub */}
          <a
            href={currentProject.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-lg bg-black px-4 py-1 text-white transition-opacity hover:opacity-80"
          >
            <FaGithub />
            <span>GitHub</span>
          </a>

          {/* Website */}
          <a
            href={currentProject.website}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-lg bg-fuchsia-500 px-4 py-1 text-white transition-opacity hover:opacity-80"
          >
            <FaGlobe />
            <span>{currentProject.button}</span>
          </a>
        </div>

        {/* Technologies */}
        <div className="mt-10 flex flex-wrap gap-2">
          {currentProject.tech.map((item) => (
            <div
              key={item}
              className="flex cursor-default items-center gap-2 rounded-full bg-gray-600 px-4 py-1 text-md text-white"
            >
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

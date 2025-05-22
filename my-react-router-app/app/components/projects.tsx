import ProjectCard from "../components/projectCard";


export default function Projects() {
  return (
    <>
      <h1 className="text-gray-700 text-5xl font-bold mb-10 flex items-center justify-center">
        Latest projects
      </h1>
      <div className="container p-2">
        <ProjectCard idCard={1}/>
      </div>
    </>
  );
}

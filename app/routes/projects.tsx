import type { Route } from "./+types/projects";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Projects ()
  {
  return (
    <div>
      <h1>Добро пожаловать на мой сайт!</h1>
      <p>Это главная страница моего портфолио.</p>
    </div>
  );
}
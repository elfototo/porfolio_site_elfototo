import { type RouteConfig, route, layout, index, prefix } from "@react-router/dev/routes";

export default [
    layout("routes/layout.tsx", [
        index("routes/home.tsx"),
        route("about", "routes/about.tsx"),
        route("contact", "routes/contact.tsx"),
        route("projects", "routes/projects.tsx"),
      ])
] satisfies RouteConfig;
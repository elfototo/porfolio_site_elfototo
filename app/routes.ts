import { type RouteConfig, layout, index } from "@react-router/dev/routes";

export default [
    layout("routes/layout.tsx", [
        index("routes/home.tsx"),
      ])
] satisfies RouteConfig;
import { 
  type RouteConfig, 
  index, 
  route, 
  layout 
} from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  layout("layouts/main-layout.tsx", [
    route("about", "routes/about.tsx"),
    route("participation", "routes/participation.tsx"),
    route("program", "routes/program.tsx"),
    route("register", "routes/register.tsx"),
    route("sponsors", "routes/sponsors.tsx"),
  ]),
] satisfies RouteConfig;

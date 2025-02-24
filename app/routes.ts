import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("pages/Home.jsx"),
    route("/jobs", "pages/Jobs.jsx"),
    route("/service", "pages/Services.jsx"),
    route("/login", "pages/Login.jsx"),
    route("/signup", "pages/SignUp.jsx"),

] satisfies RouteConfig;

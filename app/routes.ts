import {
    type RouteConfig,
    route
} from "@react-router/dev/routes";

export default [
    route("/", "routes/contact-info.tsx"),
    route("/billing", "routes/billing.tsx"),
    route("/extras", "routes/extras.tsx"),
    route("/summary", "routes/summary.tsx")
] satisfies RouteConfig;

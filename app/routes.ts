import {
  type RouteConfig,
  route
} from "@react-router/dev/routes";

export default [
  route("/", "routes/contact-info.tsx"),
  route("/billing", "routes/billing.tsx"),
  route("/add-ons", "routes/add-ons.tsx"),
  route("/summary", "routes/summary.tsx")
] satisfies RouteConfig;

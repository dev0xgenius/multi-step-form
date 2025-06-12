import {
  type RouteConfig,
  index,
  prefix,
  route,
} from "@react-router/dev/routes";

export default [
  route("/", "routes/contact-info.tsx"),
  route("/billing", "routes/billing.tsx"),
  route("/extras", "routes/extras.tsx"),
  ...prefix("/summary", [
    index("routes/summary.tsx"),
    route(":formID", "routes/thankyou.tsx"),
  ]),
] satisfies RouteConfig;

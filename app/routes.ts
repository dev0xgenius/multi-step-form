import {
  type RouteConfig,
  index,
  route
} from "@react-router/dev/routes";

export default [
  route("/", "routes/UserInfo.tsx"),
  route("/billing", "routes/Billing.tsx"),
  route("/add-ons", "routes/AddOns.tsx"),
  route("/summary", "routes/Summary.tsx")
] satisfies RouteConfig;

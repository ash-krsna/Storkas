import {
  BadgeCheck,
  Boxes,
  Building2,
  ClipboardCheck,
  Clock3,
  CreditCard,
  Headphones,
  MapPinned,
  PackageCheck,
  Radar,
  Repeat2,
  Route,
  ShieldCheck,
  Snowflake,
  Truck,
  Users,
  Warehouse,
} from "lucide-react";

export const logisticsFeatures = [
  {
    title: "Route planning",
    description: "Plan city and intercity movements with practical route visibility and clear handoff points.",
    icon: Route,
  },
  {
    title: "Shipment coordination",
    description: "Coordinate pickup, transit, delivery, and customer communication from a single request flow.",
    icon: PackageCheck,
  },
  {
    title: "B2B freight support",
    description: "Move business inventory, retail stock, samples, and bulk parcels through a structured network.",
    icon: Truck,
  },
  {
    title: "Micro-warehousing",
    description: "Use local holding points for short-term storage, dispatch preparation, and faster fulfillment.",
    icon: Warehouse,
  },
  {
    title: "Cold-chain readiness",
    description: "Support temperature-sensitive categories with controlled pickup windows and handling notes.",
    icon: Snowflake,
  },
  {
    title: "Reverse logistics",
    description: "Manage returns, exchanges, repair pickups, and business-to-vendor movement with less friction.",
    icon: Repeat2,
  },
];

export const operationsFeatures = [
  {
    title: "Verified pickup details",
    description: "Every request captures pickup, drop, package type, weight, timing, and contact details clearly.",
    icon: ClipboardCheck,
  },
  {
    title: "Local delivery focus",
    description: "Designed for Indian cities, local vendors, D2C brands, farms, stores, and growing small businesses.",
    icon: MapPinned,
  },
  {
    title: "Responsive support",
    description: "Customers and businesses get simple next-step communication instead of unclear shipment status.",
    icon: Headphones,
  },
  {
    title: "Reliable partner network",
    description: "Carrier, warehouse, and delivery partners can apply to join a controlled operating network.",
    icon: Users,
  },
];

export const trustCards = [
  { title: "Human-coordinated operations", icon: Headphones },
  { title: "Clear shipment intake", icon: ClipboardCheck },
  { title: "Local delivery intelligence", icon: MapPinned },
  { title: "Partner-first network model", icon: Users },
  { title: "Transparent service pricing", icon: CreditCard },
  { title: "Built for Indian commerce", icon: Building2 },
];

export const paymentMethods = [
  { name: "UPI", icon: BadgeCheck },
  { name: "Google Pay", icon: CreditCard },
  { name: "PhonePe", icon: CreditCard },
  { name: "Paytm", icon: CreditCard },
  { name: "Bank Transfer", icon: Building2 },
  { name: "Cash on Delivery", icon: Boxes },
];

export const logisticsStats = [
  { label: "Pickup types", value: "6+", icon: PackageCheck },
  { label: "Operating model", value: "City + B2B", icon: Radar },
  { label: "Support window", value: "Fast response", icon: Clock3 },
  { label: "Network", value: "Partner-led", icon: ShieldCheck },
];

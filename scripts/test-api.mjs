import { Readable } from "node:stream";
import businessQuote from "../api/business-quote.js";
import contact from "../api/contact.js";
import health from "../api/health.js";
import partnerApplication from "../api/partner-application.js";
import shipmentRequest from "../api/shipment-request.js";

function createRequest(method, body = {}) {
  const request = Readable.from(method === "GET" ? [] : [JSON.stringify(body)]);
  request.method = method;
  return request;
}

function createResponse() {
  return {
    statusCode: 200,
    headers: {},
    body: "",
    setHeader(key, value) {
      this.headers[key.toLowerCase()] = value;
    },
    end(value = "") {
      this.body = value;
    },
  };
}

async function invoke(handler, method, body) {
  const request = createRequest(method, body);
  const response = createResponse();
  await handler(request, response);
  return {
    statusCode: response.statusCode,
    body: JSON.parse(response.body),
  };
}

const cases = [
  {
    name: "health",
    handler: health,
    method: "GET",
  },
  {
    name: "shipment request",
    handler: shipmentRequest,
    method: "POST",
    body: {
      name: "Test Sender",
      phone: "+91 9999999999",
      pickupCity: "Bengaluru",
      dropCity: "Chennai",
      goodsType: "Retail parcels",
      weight: "25 kg",
      pickupDate: "2026-06-20",
      message: "Handle carefully",
    },
  },
  {
    name: "partner application",
    handler: partnerApplication,
    method: "POST",
    body: {
      partnerName: "Test Fleet",
      phone: "+91 9999999999",
      baseLocation: "Hyderabad",
      partnerType: "Fleet Owner",
      fleetSize: "4 vehicles",
      coverage: "Hyderabad to Vijayawada",
      compliance: "GST Available",
      message: "Available weekdays",
    },
  },
  {
    name: "business quote",
    handler: businessQuote,
    method: "POST",
    body: {
      name: "Test Operator",
      email: "ops@example.com",
      businessName: "Example Stores",
      serviceType: "B2B Freight",
      monthlyShipments: "120",
      message: "Need recurring route support",
    },
  },
  {
    name: "contact",
    handler: contact,
    method: "POST",
    body: {
      name: "Test User",
      contact: "hello@example.com",
      message: "Need help with a route",
    },
  },
];

for (const testCase of cases) {
  const result = await invoke(testCase.handler, testCase.method, testCase.body);

  if (result.statusCode !== 200 || !result.body.ok) {
    throw new Error(`${testCase.name} failed: ${JSON.stringify(result)}`);
  }

  console.log(`${testCase.name}: ok`);
}

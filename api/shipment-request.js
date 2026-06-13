import { handleSubmission } from "./_utils/submissions.js";

export default function handler(request, response) {
  return handleSubmission(request, response, {
    type: "shipment-request",
    referencePrefix: "SHIP",
    fields: ["name", "phone", "pickupCity", "dropCity", "goodsType", "weight", "pickupDate", "message"],
    requiredFields: ["name", "phone", "pickupCity", "dropCity", "goodsType", "weight", "pickupDate"],
    successMessage: "Your shipment request has been received. Storkas will contact you soon.",
  });
}

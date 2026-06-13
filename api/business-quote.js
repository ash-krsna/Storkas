import { handleSubmission } from "./_utils/submissions.js";

export default function handler(request, response) {
  return handleSubmission(request, response, {
    type: "business-quote",
    referencePrefix: "QUOTE",
    fields: ["name", "email", "businessName", "serviceType", "monthlyShipments", "message"],
    requiredFields: ["name", "email", "businessName", "serviceType", "monthlyShipments", "message"],
    emailField: "email",
    successMessage: "Your logistics proposal request has been received.",
  });
}

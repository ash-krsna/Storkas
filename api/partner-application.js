import { handleSubmission } from "./_utils/submissions.js";

export default function handler(request, response) {
  return handleSubmission(request, response, {
    type: "partner-application",
    referencePrefix: "PARTNER",
    fields: ["partnerName", "phone", "baseLocation", "partnerType", "fleetSize", "coverage", "compliance", "message"],
    requiredFields: ["partnerName", "phone", "baseLocation", "partnerType", "fleetSize", "coverage", "compliance"],
    successMessage: "Your partner application has been received.",
  });
}

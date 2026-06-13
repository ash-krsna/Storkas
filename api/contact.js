import { handleSubmission } from "./_utils/submissions.js";

export default function handler(request, response) {
  return handleSubmission(request, response, {
    type: "contact",
    referencePrefix: "CONTACT",
    fields: ["name", "contact", "message"],
    requiredFields: ["name", "contact", "message"],
    successMessage: "Thanks for contacting Storkas. We will respond soon.",
  });
}

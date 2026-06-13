import {
  allowMethods,
  createReferenceId,
  isValidEmail,
  readJsonBody,
  sanitizePayload,
  sendJson,
  validateRequired,
} from "./http.js";

export async function handleSubmission(request, response, config) {
  if (!allowMethods(request, response, ["POST"])) {
    return;
  }

  try {
    const body = await readJsonBody(request);
    const data = sanitizePayload(body, config.fields);
    const missingFields = validateRequired(data, config.requiredFields);

    if (missingFields.length > 0) {
      sendJson(response, 400, {
        ok: false,
        error: "Please complete all required fields.",
        missingFields,
      });
      return;
    }

    if (config.emailField && !isValidEmail(data[config.emailField])) {
      sendJson(response, 400, {
        ok: false,
        error: "Please provide a valid email address.",
      });
      return;
    }

    const referenceId = createReferenceId(config.referencePrefix);

    console.info("Storkas submission received", {
      type: config.type,
      referenceId,
      receivedAt: new Date().toISOString(),
      data,
    });

    sendJson(response, 200, {
      ok: true,
      type: config.type,
      referenceId,
      message: config.successMessage,
    });
  } catch (error) {
    sendJson(response, 400, {
      ok: false,
      error: error.message || "Unable to process request.",
    });
  }
}

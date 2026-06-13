const MAX_BODY_BYTES = 32 * 1024;

export function sendJson(response, statusCode, payload) {
  response.statusCode = statusCode;
  response.setHeader("Content-Type", "application/json; charset=utf-8");
  response.setHeader("Cache-Control", "no-store");
  response.end(JSON.stringify(payload));
}

export function allowMethods(request, response, methods) {
  if (methods.includes(request.method)) {
    return true;
  }

  response.setHeader("Allow", methods.join(", "));
  sendJson(response, 405, {
    ok: false,
    error: `Method ${request.method} is not allowed.`,
  });
  return false;
}

export function readJsonBody(request) {
  return new Promise((resolve, reject) => {
    let rawBody = "";

    request.on("data", (chunk) => {
      rawBody += chunk;

      if (Buffer.byteLength(rawBody) > MAX_BODY_BYTES) {
        reject(new Error("Request body is too large."));
        request.destroy();
      }
    });

    request.on("end", () => {
      if (!rawBody) {
        resolve({});
        return;
      }

      try {
        resolve(JSON.parse(rawBody));
      } catch {
        reject(new Error("Request body must be valid JSON."));
      }
    });

    request.on("error", reject);
  });
}

export function sanitizeString(value) {
  if (typeof value !== "string") {
    return "";
  }

  return value.replace(/\s+/g, " ").trim().slice(0, 500);
}

export function sanitizePayload(payload, allowedFields) {
  return allowedFields.reduce((clean, field) => {
    clean[field] = sanitizeString(payload[field]);
    return clean;
  }, {});
}

export function validateRequired(payload, requiredFields) {
  return requiredFields.filter((field) => !sanitizeString(payload[field]));
}

export function isValidEmail(value) {
  if (!value) {
    return true;
  }

  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function createReferenceId(prefix) {
  const random = Math.random().toString(36).slice(2, 8).toUpperCase();
  return `${prefix}-${Date.now().toString(36).toUpperCase()}-${random}`;
}

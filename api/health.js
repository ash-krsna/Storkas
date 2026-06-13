import { allowMethods, sendJson } from "./_utils/http.js";

export default function handler(request, response) {
  if (!allowMethods(request, response, ["GET"])) {
    return;
  }

  sendJson(response, 200, {
    ok: true,
    service: "storkas-api",
    status: "healthy",
    timestamp: new Date().toISOString(),
  });
}

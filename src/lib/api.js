export async function submitForm(endpoint, payload) {
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const result = await response.json().catch(() => ({
    ok: false,
    error: "Server returned an invalid response.",
  }));

  if (!response.ok || !result.ok) {
    throw new Error(result.error || "Request failed. Please try again.");
  }

  return result;
}

/**
 * Simple baseline API helper for BTVAS external requests.
 */
export async function apiFetch<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const headers = new Headers(options.headers);
  if (!headers.has("Content-Type")) {
    headers.set("Content-Type", "application/json");
  }

  const response = await fetch(endpoint, {
    ...options,
    headers,
  });

  if (!response.ok) {
    let errorMsg = `API Error: ${response.statusText}`;
    try {
      const errorJson = await response.json();
      if (errorJson?.message) {
        errorMsg = errorJson.message;
      }
    } catch {
      // ignore
    }
    throw new Error(errorMsg);
  }

  return response.json() as Promise<T>;
}

/**
 * Helper to format date strings.
 */
export function formatDate(
  date: Date | string | number,
  options: Intl.DateTimeFormatOptions = {
    month: "long",
    day: "numeric",
    year: "numeric",
  }
): string {
  const d = typeof date === "object" ? date : new Date(date);
  if (isNaN(d.getTime())) return "";
  return d.toLocaleDateString("en-US", options);
}

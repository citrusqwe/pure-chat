export function isEmpty(value: any): boolean {
  if (value === null) return true;
  if (Array.isArray(value)) return !value.length;
  if (typeof value === "object") return !Object.keys(value).length;
  return true;
}
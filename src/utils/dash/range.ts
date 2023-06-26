export function range(n: number): number[] | [] {
  return [...new Array(n).keys()];
}
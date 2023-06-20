export function testSmth(...args: number[]): number {
  if (!args.length) {
    throw Error('No arguments passed')
  }
  return args.reduce((res, curr) => res + curr, 0);
}
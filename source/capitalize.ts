import { toUpperCase } from "./upper-case.js";

/**
 * Capitalize the first letter of a string.
 * @example
 * ```ts
 * const capitalizedString = capitalize("hello world"); // "Hello world"
 * ```
 */
export function capitalize<T extends string>(string: string): Capitalize<T> {
  return toUpperCase(string.charAt(0)) + string.slice(1) as Capitalize<T>;
}

export type CapitalizeAll<T extends string[]> = T extends [infer First, ...infer Rest]
  ? First extends string
    ? Rest extends string[]
      ? [Capitalize<First>, ...CapitalizeAll<Rest>]
      : never
    : never
  : [];

export function capitalizeAll<T extends string[]>(strings: T): Capitalize<T[number]>[] {
  return strings.map((string) => capitalize(string));
}

import { toLowerCase } from "./lower-case.js";

/**
 * Uncapitalize the first letter of a string.
 * @example
 * ```ts
 * const uncapitalizedString = uncapitalize("Hello World"); // "hello World"
 * ```
 */
export function uncapitalize<T extends string>(string: string): Uncapitalize<T> {
  return toLowerCase(string.charAt(0)) + string.slice(1) as Uncapitalize<T>;
}

export type UncapitalizeAll<T extends string[]> = T extends [infer First, ...infer Rest]
  ? First extends string
    ? Rest extends string[]
      ? [Uncapitalize<First>, ...UncapitalizeAll<Rest>]
      : never
    : never
  : [];

export function uncapitalizeAll<T extends string[]>(strings: T): Uncapitalize<T[number]>[] {
  return strings.map((string) => uncapitalize(string));
}

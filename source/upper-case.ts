
/**
 * Convert string type to UPPERCASE.
 * @example
 * ```ts
 * type UppercaseString = UpperCase<"hello world">; // "HELLO WORLD"
 * ```
 */
export type UpperCase<T extends string> = Uppercase<T>;

/**
 * Convert a string to UPPERCASE.
 * @example
 * ```ts
 * const uppercaseString = toUpperCase("hello world"); // "HELLO WORLD"
 * ```
 */
export function toUpperCase<T extends string>(string: T): UpperCase<T> {
  return string.toUpperCase() as UpperCase<T>;
}

export type UpperCaseAll<T extends string[]> = T extends [infer First, ...infer Rest]
  ? First extends string
    ? Rest extends string[]
      ? [UpperCase<First>, ...UpperCaseAll<Rest>]
      : never
    : never
  : [];

export function toLowerCaseAll<T extends string[]>(strings: T): UpperCase<T[number]>[] {
  return strings.map((string) => toUpperCase(string));
}
